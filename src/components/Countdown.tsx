import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-02T14:00:00-04:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  const Item = ({ v, l }: { v: number; l: string }) => (
    <div className="flex flex-col items-center min-w-[68px]">
      <span className="font-display text-4xl md:text-5xl text-primary">{String(v).padStart(2, "0")}</span>
      <span className="text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground mt-1">{l}</span>
    </div>
  );
  return (
    <div className="flex items-center justify-center gap-3 md:gap-6">
      <Item v={t.days} l="Days" />
      <span className="text-3xl text-[var(--gold)] font-display">:</span>
      <Item v={t.hours} l="Hours" />
      <span className="text-3xl text-[var(--gold)] font-display">:</span>
      <Item v={t.minutes} l="Minutes" />
      <span className="text-3xl text-[var(--gold)] font-display">:</span>
      <Item v={t.seconds} l="Seconds" />
    </div>
  );
}
