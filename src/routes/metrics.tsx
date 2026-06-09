import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/metrics")({
  component: MetricsPage,
});

const METRICS_URL = import.meta.env.VITE_METRICS_URL as string;
const REMINDER_URL = import.meta.env.VITE_REMINDER_URL as string;
const THANKS_URL = import.meta.env.VITE_THANKS_URL as string;

interface Rsvp {
  id: string;
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  attendees: number;
  message: string;
  created_at: string;
  email_sent: boolean;
  source_ip: string;
}

interface DuplicateGroup {
  value: string;
  count: number;
  ids: string[];
}

interface MetricsData {
  total_rsvps: number;
  total_adults: number;
  total_children: number;
  total_attendees: number;
  rsvps: Rsvp[];
  anomalies: {
    duplicate_emails: DuplicateGroup[];
    duplicate_phones: DuplicateGroup[];
    duplicate_ips: DuplicateGroup[];
    large_groups: Rsvp[];
  };
}

function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div
      style={{ borderColor: "var(--gold, #c49a3c)" }}
      className="flex flex-col items-center justify-center border p-6 bg-[#faf8f2]"
    >
      <span
        style={{ color: "var(--gold, #c49a3c)" }}
        className="text-xs uppercase tracking-widest font-serif mb-2"
      >
        {label}
      </span>
      <span
        style={{ color: "var(--maroon, #4a1520)" }}
        className="text-4xl font-serif"
      >
        {value}
      </span>
    </div>
  );
}

function AnomalySection({ data }: { data: MetricsData }) {
  const { duplicate_emails, duplicate_phones, duplicate_ips, large_groups } =
    data.anomalies;
  const hasAnomalies =
    duplicate_emails.length > 0 ||
    duplicate_phones.length > 0 ||
    duplicate_ips.length > 0 ||
    large_groups.length > 0;

  if (!hasAnomalies) {
    return (
      <div className="mb-8">
        <SectionHeading>Anomalies</SectionHeading>
        <p className="text-sm font-serif" style={{ color: "#7a6555" }}>
          No anomalies detected.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <SectionHeading>Anomalies</SectionHeading>
      <div className="flex flex-col gap-4">
        {duplicate_emails.length > 0 && (
          <AnomalyCard
            title="Duplicate Emails"
            groups={duplicate_emails}
            valueLabel="Email"
          />
        )}
        {duplicate_phones.length > 0 && (
          <AnomalyCard
            title="Duplicate Phone Numbers"
            groups={duplicate_phones}
            valueLabel="Phone"
          />
        )}
        {duplicate_ips.length > 0 && (
          <AnomalyCard
            title="Multiple RSVPs from Same IP"
            groups={duplicate_ips}
            valueLabel="IP"
          />
        )}
        {large_groups.length > 0 && (
          <div
            style={{ borderColor: "var(--gold, #c49a3c)" }}
            className="border bg-[#faf8f2] p-4"
          >
            <p
              className="text-xs uppercase tracking-widest font-serif mb-3"
              style={{ color: "var(--gold, #c49a3c)" }}
            >
              Large Groups (&gt;10 attendees)
            </p>
            <div className="flex flex-col gap-1">
              {large_groups.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center gap-3 text-sm font-serif"
                  style={{ color: "#3d1a10" }}
                >
                  <Badge
                    className="font-serif text-white"
                    style={{
                      backgroundColor: "var(--maroon, #4a1520)",
                      borderColor: "var(--maroon, #4a1520)",
                    }}
                  >
                    {r.attendees} attendees
                  </Badge>
                  <span>{r.name}</span>
                  <span style={{ color: "#7a6555" }}>{r.email}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AnomalyCard({
  title,
  groups,
  valueLabel,
}: {
  title: string;
  groups: DuplicateGroup[];
  valueLabel: string;
}) {
  return (
    <div
      style={{ borderColor: "var(--gold, #c49a3c)" }}
      className="border bg-[#faf8f2] p-4"
    >
      <p
        className="text-xs uppercase tracking-widest font-serif mb-3"
        style={{ color: "var(--gold, #c49a3c)" }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-1">
        {groups.map((g) => (
          <div
            key={g.value}
            className="flex items-center gap-3 text-sm font-serif"
            style={{ color: "#3d1a10" }}
          >
            <Badge
              variant="destructive"
              className="font-serif"
            >
              {g.count}×
            </Badge>
            <span>
              <span style={{ color: "#7a6555" }}>{valueLabel}: </span>
              {g.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <h2
        className="text-xs uppercase tracking-widest font-serif whitespace-nowrap"
        style={{ color: "var(--gold, #c49a3c)" }}
      >
        {children}
      </h2>
      <div style={{ borderColor: "var(--gold, #c49a3c)" }} className="flex-1 border-t" />
    </div>
  );
}

type ReminderType = "7-day" | "1-day";

interface ReminderState {
  pending: ReminderType | null;
  sending: boolean;
  result: { sent: number; failed: number; total: number } | null;
  error: string | null;
}

function ReminderControls({ metricsKey, totalRsvps }: { metricsKey: string; totalRsvps: number }) {
  const [state, setState] = useState<ReminderState>({
    pending: null,
    sending: false,
    result: null,
    error: null,
  });
  const cancelRef = useRef<HTMLButtonElement>(null);

  function requestSend(type: ReminderType) {
    setState({ pending: type, sending: false, result: null, error: null });
    setTimeout(() => cancelRef.current?.focus(), 0);
  }

  function cancel() {
    setState((s) => ({ ...s, pending: null }));
  }

  async function confirm() {
    if (!state.pending) return;
    setState((s) => ({ ...s, sending: true, error: null }));
    try {
      const res = await fetch(`${REMINDER_URL}?key=${encodeURIComponent(metricsKey)}`, {
        method: "POST",
      });
      if (res.status === 403) {
        setState((s) => ({ ...s, sending: false, pending: null, error: "Access denied." }));
        return;
      }
      if (!res.ok) {
        setState((s) => ({ ...s, sending: false, pending: null, error: `Server error: ${res.status}` }));
        return;
      }
      const json = await res.json();
      setState({ pending: null, sending: false, result: json, error: null });
    } catch {
      setState((s) => ({ ...s, sending: false, pending: null, error: "Failed to reach the server." }));
    }
  }

  const label: Record<ReminderType, string> = {
    "7-day": "Send 7 Day Reminder",
    "1-day": "Send 1 Day Reminder",
  };

  return (
    <div className="mb-10">
      <SectionHeading>Reminder Emails</SectionHeading>

      <div className="flex flex-wrap gap-3 mb-4">
        {(["7-day", "1-day"] as ReminderType[]).map((type) => (
          <button
            key={type}
            type="button"
            disabled={state.sending || state.pending !== null}
            onClick={() => requestSend(type)}
            className="font-serif uppercase tracking-widest text-xs px-5 py-3 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            style={{
              backgroundColor: "var(--maroon, #4a1520)",
              color: "#f7f3eb",
              border: "1px solid var(--gold, #c49a3c)",
            }}
          >
            {label[type]}
          </button>
        ))}
      </div>

      {state.pending && (
        <div
          className="flex flex-col sm:flex-row sm:items-center gap-3 p-4"
          style={{ border: "1px solid var(--gold, #c49a3c)", backgroundColor: "#f0ebe0" }}
        >
          <p className="font-serif text-sm flex-1" style={{ color: "#3d1a10" }}>
            This will send the <strong>{state.pending === "7-day" ? "7-day" : "1-day"} reminder</strong> to{" "}
            <strong>{totalRsvps}</strong> {totalRsvps === 1 ? "recipient" : "recipients"}. Are you sure?
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              ref={cancelRef}
              type="button"
              onClick={cancel}
              className="font-serif uppercase tracking-widest text-xs px-4 py-2 transition-opacity"
              style={{
                border: "1px solid #7a6555",
                color: "#7a6555",
                backgroundColor: "transparent",
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={state.sending}
              onClick={confirm}
              className="font-serif uppercase tracking-widest text-xs px-4 py-2 disabled:opacity-50 transition-opacity"
              style={{
                backgroundColor: "var(--maroon, #4a1520)",
                color: "#f7f3eb",
                border: "1px solid var(--gold, #c49a3c)",
              }}
            >
              {state.sending ? "Sending…" : "Yes, Send Now"}
            </button>
          </div>
        </div>
      )}

      {state.result && (
        <div
          className="p-4 font-serif text-sm"
          style={{ border: "1px solid var(--gold, #c49a3c)", backgroundColor: "#faf8f2", color: "#3d1a10" }}
        >
          ✦ Reminder sent — <strong>{state.result.sent}</strong> delivered,{" "}
          <strong>{state.result.failed}</strong> failed, <strong>{state.result.total}</strong> total.
        </div>
      )}

      {state.error && (
        <p className="font-serif text-sm text-red-700 mt-2">{state.error}</p>
      )}
    </div>
  );
}

function ThanksControls({ metricsKey, totalRsvps }: { metricsKey: string; totalRsvps: number }) {
  const [pending, setPending] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ sent: number; failed: number; total: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);

  function requestSend() {
    setPending(true);
    setResult(null);
    setError(null);
    setTimeout(() => cancelRef.current?.focus(), 0);
  }

  function cancel() {
    setPending(false);
  }

  async function confirm() {
    setSending(true);
    setError(null);
    try {
      const res = await fetch(`${THANKS_URL}?key=${encodeURIComponent(metricsKey)}`, {
        method: "POST",
      });
      if (res.status === 403) {
        setSending(false);
        setPending(false);
        setError("Access denied.");
        return;
      }
      if (!res.ok) {
        setSending(false);
        setPending(false);
        setError(`Server error: ${res.status}`);
        return;
      }
      const json = await res.json();
      setSending(false);
      setPending(false);
      setResult(json);
    } catch {
      setSending(false);
      setPending(false);
      setError("Failed to reach the server.");
    }
  }

  return (
    <div className="mb-10">
      <SectionHeading>Thank You Email</SectionHeading>

      <div className="flex flex-wrap gap-3 mb-4">
        <button
          type="button"
          disabled={sending || pending}
          onClick={requestSend}
          className="font-serif uppercase tracking-widest text-xs px-5 py-3 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
          style={{
            backgroundColor: "var(--maroon, #4a1520)",
            color: "#f7f3eb",
            border: "1px solid var(--gold, #c49a3c)",
          }}
        >
          Send Thank You Email
        </button>
      </div>

      {pending && (
        <div
          className="flex flex-col sm:flex-row sm:items-center gap-3 p-4"
          style={{ border: "1px solid var(--gold, #c49a3c)", backgroundColor: "#f0ebe0" }}
        >
          <p className="font-serif text-sm flex-1" style={{ color: "#3d1a10" }}>
            This will send a <strong>thank-you email</strong> to{" "}
            <strong>{totalRsvps}</strong> {totalRsvps === 1 ? "recipient" : "recipients"}. Are you sure?
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              ref={cancelRef}
              type="button"
              onClick={cancel}
              className="font-serif uppercase tracking-widest text-xs px-4 py-2 transition-opacity"
              style={{
                border: "1px solid #7a6555",
                color: "#7a6555",
                backgroundColor: "transparent",
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={sending}
              onClick={confirm}
              className="font-serif uppercase tracking-widest text-xs px-4 py-2 disabled:opacity-50 transition-opacity"
              style={{
                backgroundColor: "var(--maroon, #4a1520)",
                color: "#f7f3eb",
                border: "1px solid var(--gold, #c49a3c)",
              }}
            >
              {sending ? "Sending…" : "Yes, Send Now"}
            </button>
          </div>
        </div>
      )}

      {result && (
        <div
          className="p-4 font-serif text-sm"
          style={{ border: "1px solid var(--gold, #c49a3c)", backgroundColor: "#faf8f2", color: "#3d1a10" }}
        >
          ✦ Thank you email sent — <strong>{result.sent}</strong> delivered,{" "}
          <strong>{result.failed}</strong> failed, <strong>{result.total}</strong> total.
        </div>
      )}

      {error && (
        <p className="font-serif text-sm text-red-700 mt-2">{error}</p>
      )}
    </div>
  );
}

function Dashboard({ data, metricsKey }: { data: MetricsData; metricsKey: string }) {
  const [search, setSearch] = useState("");

  const filteredRsvps = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return data.rsvps;
    return data.rsvps.filter(
      (r) =>
        r.name?.toLowerCase().includes(q) ||
        r.email?.toLowerCase().includes(q) ||
        r.phone?.toLowerCase().includes(q) ||
        r.message?.toLowerCase().includes(q),
    );
  }, [data.rsvps, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <p
          className="text-xs uppercase tracking-widest font-serif mb-2"
          style={{ color: "var(--gold, #c49a3c)" }}
        >
          Veda&rsquo;s Kuchipudi Rangapravesam
        </p>
        <h1
          className="text-3xl font-serif"
          style={{ color: "var(--maroon, #4a1520)" }}
        >
          RSVP Metrics
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div style={{ borderColor: "var(--gold, #c49a3c)" }} className="flex-1 max-w-32 border-t" />
          <span style={{ color: "var(--gold, #c49a3c)" }}>✦</span>
          <div style={{ borderColor: "var(--gold, #c49a3c)" }} className="flex-1 max-w-32 border-t" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <StatCard label="Total RSVPs" value={data.total_rsvps} />
        <StatCard label="Total Attendees" value={data.total_attendees} />
        <StatCard label="Adults" value={data.total_adults} />
        <StatCard label="Children" value={data.total_children} />
      </div>

      <AnomalySection data={data} />

      <ReminderControls metricsKey={metricsKey} totalRsvps={data.total_rsvps} />

      <ThanksControls metricsKey={metricsKey} totalRsvps={data.total_rsvps} />

      <SectionHeading>All RSVPs</SectionHeading>

      <div className="mb-4">
        <Input
          placeholder="Search by name, email, phone, or message…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm font-serif"
          style={{ borderColor: "var(--gold, #c49a3c)" }}
        />
        {search && (
          <p className="text-xs mt-1 font-serif" style={{ color: "#7a6555" }}>
            Showing {filteredRsvps.length} of {data.rsvps.length} RSVPs
          </p>
        )}
      </div>

      <div className="border overflow-x-auto" style={{ borderColor: "var(--gold, #c49a3c)" }}>
        <Table>
          <TableHeader>
            <TableRow style={{ backgroundColor: "#f0ebe0" }}>
              {["Name", "Email", "Phone", "Adults", "Children", "Total", "Date", "Message"].map(
                (h) => (
                  <TableHead
                    key={h}
                    className="font-serif text-xs uppercase tracking-wider whitespace-nowrap"
                    style={{ color: "var(--gold, #c49a3c)" }}
                  >
                    {h}
                  </TableHead>
                ),
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRsvps.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="text-center font-serif py-8"
                  style={{ color: "#7a6555" }}
                >
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              filteredRsvps.map((r, i) => (
                <TableRow
                  key={r.id}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#faf8f2" : "#f7f3eb",
                  }}
                >
                  <TableCell className="font-serif font-medium whitespace-nowrap" style={{ color: "#3d1a10" }}>
                    {r.name}
                  </TableCell>
                  <TableCell className="font-serif whitespace-nowrap" style={{ color: "#3d1a10" }}>
                    {r.email}
                  </TableCell>
                  <TableCell className="font-serif whitespace-nowrap" style={{ color: "#7a6555" }}>
                    {r.phone || "—"}
                  </TableCell>
                  <TableCell className="font-serif text-center" style={{ color: "#3d1a10" }}>
                    {r.adults}
                  </TableCell>
                  <TableCell className="font-serif text-center" style={{ color: "#3d1a10" }}>
                    {r.children}
                  </TableCell>
                  <TableCell className="font-serif text-center font-semibold" style={{ color: "var(--maroon, #4a1520)" }}>
                    {r.attendees}
                  </TableCell>
                  <TableCell className="font-serif whitespace-nowrap text-xs" style={{ color: "#7a6555" }}>
                    {formatDate(r.created_at)}
                  </TableCell>
                  <TableCell
                    className="font-serif text-xs max-w-xs truncate"
                    style={{ color: "#7a6555" }}
                    title={r.message}
                  >
                    {r.message || "—"}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function MetricsPage() {
  const urlKey = new URLSearchParams(window.location.search).get("key") ?? "";
  const initialKey = urlKey || sessionStorage.getItem("metrics_key") || "";

  const [keyInput, setKeyInput] = useState(initialKey);
  const [data, setData] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(() => !!initialKey);
  const [error, setError] = useState<string | null>(null);

  async function fetchMetrics(key: string) {
    if (!key.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${METRICS_URL}?key=${encodeURIComponent(key)}`);
      if (res.status === 403) {
        setError("Invalid key. Access denied.");
        sessionStorage.removeItem("metrics_key");
        setData(null);
        return;
      }
      if (!res.ok) {
        setError(`Unexpected error: ${res.status}`);
        return;
      }
      const json: MetricsData = await res.json();
      setData(json);
      sessionStorage.setItem("metrics_key", key);
    } catch {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  // Auto-fetch on mount when a key is available (from URL or sessionStorage)
  useState(() => {
    if (initialKey) fetchMetrics(initialKey);
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchMetrics(keyInput);
  }

  if (data) {
    return <Dashboard data={data} metricsKey={keyInput} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f3eb]">
        <p className="font-serif text-sm" style={{ color: "var(--gold, #c49a3c)" }}>
          Loading…
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f3eb]">
      <div
        className="w-full max-w-sm bg-[#faf8f2] p-8"
        style={{ border: "1px solid var(--gold, #c49a3c)" }}
      >
        <div className="text-center mb-6">
          <p
            className="text-xs uppercase tracking-widest font-serif mb-1"
            style={{ color: "var(--gold, #c49a3c)" }}
          >
            Restricted Access
          </p>
          <h1
            className="text-2xl font-serif"
            style={{ color: "var(--maroon, #4a1520)" }}
          >
            Metrics Dashboard
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="password"
            placeholder="Enter access key"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            className="font-serif"
            style={{ borderColor: "var(--gold, #c49a3c)" }}
            autoFocus
          />
          {error && (
            <p className="text-sm font-serif text-red-700">{error}</p>
          )}
          <Button
            type="submit"
            disabled={loading || !keyInput.trim()}
            className="font-serif uppercase tracking-widest text-xs"
            style={{
              backgroundColor: "var(--maroon, #4a1520)",
              color: "#f7f3eb",
              border: "1px solid var(--gold, #c49a3c)",
            }}
          >
            {loading ? "Loading…" : "Access Dashboard"}
          </Button>
        </form>
      </div>
    </div>
  );
}
