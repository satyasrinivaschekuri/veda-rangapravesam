import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Countdown } from "@/components/Countdown";
import heroDancer from "@/assets/hero-dancer.jpg";
import omSymbol from "@/assets/om-symbol.jpg";
import dancerPortrait from "@/assets/dancer-portrait.jpg";
import placeholder from "@/assets/placeholder-1.jpg";

export const Route = createFileRoute("/")({ component: Index });

const repertoire = [
  "Pushpanjali", "Ganesha Stuthi", "Alarippu", "Jathiswaram",
  "Shabdam", "Varnam", "Padam", "Thillana", "Mangalam",
];

const orchestra = [
  { role: "Nattuvangam", name: "Guru Name (TBA)" },
  { role: "Vocal", name: "Vocalist Name (TBA)" },
  { role: "Mridangam", name: "Mridangist Name (TBA)" },
  { role: "Violin", name: "Violinist Name (TBA)" },
  { role: "Flute", name: "Flutist Name (TBA)" },
];

function Section({ id, eyebrow, title, children, className = "" }: { id?: string; eyebrow?: string; title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title) && (
          <div className="text-center mb-16">
            {eyebrow && <p className="text-[var(--gold)] tracking-[0.3em] uppercase text-xs mb-4">{eyebrow}</p>}
            {title && <h2 className="font-display text-4xl md:text-5xl text-primary">{title}</h2>}
            <div className="divider-diamond mt-6">
              <span className="text-[var(--gold)] text-xl">❖</span>
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Index() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="top" className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 text-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        <img src={omSymbol} alt="" width={140} height={140} className="opacity-90 mb-6" />
        <p className="text-[var(--maroon)] tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-display">
          The Family of Veda Cordially Invites You to Her
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-primary leading-tight">
          Bharatanatyam
        </h1>
        <h1 className="font-display text-5xl md:text-7xl text-[var(--gold)] italic leading-tight mt-2">
          Rangapravesam
        </h1>
        <div className="divider-diamond mt-8 w-full max-w-md">
          <span className="text-[var(--gold)] text-2xl">❖</span>
        </div>
        <p className="font-script text-3xl md:text-4xl text-[var(--maroon)] mt-8">
          Sunday, August 2, 2026
        </p>
        <a href="#rsvp" className="btn-maroon mt-10 inline-block">Request the Honor of Your Presence</a>

        <div className="mt-20 w-full max-w-3xl">
          <p className="text-[var(--gold)] tracking-[0.3em] uppercase text-xs mb-6">Counting Moments Until the Ascendance</p>
          <Countdown />
        </div>
      </section>

      {/* DETAILS */}
      <Section id="details" eyebrow="Save the Date" title="Event Details" className="bg-secondary/40">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { h: "Date", body: <><p className="font-display text-2xl text-primary">August 2, 2026</p><p className="text-muted-foreground mt-2">Sunday</p><p className="text-sm text-muted-foreground mt-3">RSVP by July 2, 2026</p></> },
            { h: "Time", body: <><p className="text-foreground">Seating Opens: 1:30 PM</p><p className="text-foreground mt-1">Performance: 2:00 PM – 5:00 PM</p><p className="text-muted-foreground mt-3 italic">Dinner Reception to Follow</p></> },
            { h: "Venue", body: <><p className="font-display text-xl text-primary">Richard J. Ernst Community Cultural Center</p><p className="text-muted-foreground mt-1">Northern Virginia Community College – Annandale Campus</p><p className="text-foreground mt-2">8333 Little River Turnpike</p><p className="text-foreground">Annandale, VA 22003</p><a href="https://maps.google.com/?q=Richard+J+Ernst+Community+Cultural+Center+Annandale+VA" target="_blank" rel="noreferrer" className="inline-block mt-4 text-[var(--gold)] tracking-widest text-xs uppercase hover:underline">View Map →</a></> },
          ].map((c) => (
            <div key={c.h} className="bg-card border border-border p-8 text-center">
              <h3 className="font-display text-[var(--gold)] tracking-[0.25em] uppercase text-sm mb-4">{c.h}</h3>
              <div>{c.body}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT RANGAPRAVESAM */}
      <Section id="about-event" eyebrow="The Tradition" title="About Rangapravesam">
        <div className="max-w-3xl mx-auto text-center space-y-5 text-foreground/85 leading-relaxed text-lg">
          <p>
            A <em>Rangapravesam</em> — literally "ascending the stage" — marks the formal solo debut of a
            classical Indian dancer. It is the culmination of years of dedicated training under the
            guidance of a Guru, and a sacred offering to the divine, to teachers, and to the community
            that has shaped the dancer's journey.
          </p>
          <p>
            On this auspicious day, Veda will perform a traditional <em>Margam</em> — a graceful
            progression of pieces that journey through pure rhythm, devotional storytelling, and
            joyful celebration. We invite you to witness this milestone with us.
          </p>
        </div>
      </Section>

      {/* DANCER */}
      <Section id="dancer" eyebrow="The Dancer" title="Veda Chekuri" className="bg-secondary/40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="gold-frame p-2 max-w-sm">
              <img src={dancerPortrait} alt="Veda Chekuri" width={800} height={1024} loading="lazy" className="w-full" />
            </div>
          </div>
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <p>
              <strong className="text-primary">Veda Chekuri</strong> began her journey in Bharatanatyam at a young age,
              drawn to the grace, rhythm, and storytelling of this ancient classical art. Under the
              loving guidance of her Guru, she has spent years immersed in <em>nritta</em> (pure dance),
              <em> nritya</em> (expressive dance), and the rich repertoire of the South Indian classical tradition.
            </p>
            <p>
              Beyond the stage, Veda is a curious and compassionate young scholar with passions that
              extend into academics, music, and community service. Dance has been a constant companion —
              shaping her discipline, her devotion, and her sense of self.
            </p>
            <p>
              Her Rangapravesam is both a culmination and a beginning: a heartfelt offering of gratitude
              to her family, teachers, and community, and a promise to carry forward this timeless art.
            </p>
          </div>
        </div>
      </Section>

      {/* GURUS */}
      <Section id="gurus" eyebrow="At the Sacred Feet of" title="The Guru & Academy">
        <div className="max-w-3xl mx-auto bg-card border border-border p-10 text-center">
          <div className="gold-frame p-2 w-40 h-40 mx-auto mb-6">
            <img src={placeholder} alt="Guru placeholder" width={400} height={400} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-display text-2xl text-primary">Guru Name (Placeholder)</h3>
          <p className="text-[var(--gold)] tracking-widest uppercase text-xs mt-2">Founder & Director, Dance Academy</p>
          <p className="mt-6 text-foreground/85 leading-relaxed">
            A revered teacher of Bharatanatyam with decades of experience nurturing students in the
            classical tradition. Through dedicated instruction, choreography, and mentorship, the academy
            continues to share the beauty of Indian classical dance with the community.
          </p>
          <p className="mt-4 text-muted-foreground text-sm italic">
            Full guru bio and academy details to be added.
          </p>
        </div>
      </Section>

      {/* REPERTOIRE */}
      <Section id="repertoire" eyebrow="The Repertoire" title="A Journey Through the Margam" className="bg-secondary/40">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repertoire.map((name, i) => (
            <div key={name} className="bg-card border border-border overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={placeholder} alt={name} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center">
                <p className="text-[var(--gold)] tracking-[0.25em] uppercase text-xs">Margam {String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-2xl text-primary mt-2">{name}</h3>
                <p className="text-muted-foreground text-sm mt-3 italic">The Margam unfolds — Join us on August 2</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ORCHESTRA */}
      <Section id="orchestra" eyebrow="Musical Ensemble" title="The Divine Rhythms & Melodies">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {orchestra.map((m) => (
            <div key={m.role} className="text-center p-6 border border-border bg-card">
              <p className="text-[var(--gold)] tracking-[0.25em] uppercase text-xs mb-3">{m.role}</p>
              <p className="font-display text-lg text-primary">{m.name}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8 italic">Ensemble members to be announced</p>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" eyebrow="Moments in Motion" title="Gallery" className="bg-secondary/40">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-muted gold-frame p-1">
              <img src={i % 2 === 0 ? placeholder : dancerPortrait} alt={`Gallery ${i + 1}`} width={500} height={500} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8 italic">Gallery placeholders — photos to be added</p>
      </Section>

      {/* RSVP */}
      <Section id="rsvp" eyebrow="Join Us in Celebration" title="RSVP">
        <p className="text-center text-muted-foreground mb-10">Please respond by July 2, 2026</p>
        <div className="max-w-xl mx-auto bg-card border border-border p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="font-display text-2xl text-primary mb-3">RSVP Confirmed</h3>
              <p className="text-muted-foreground">Thank you for your response. We look forward to seeing you at Veda's Rangapravesam!</p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-5"
            >
              {[
                { name: "name", label: "Full Name", type: "text", required: true },
                { name: "email", label: "Email Address", type: "email", required: true },
                { name: "phone", label: "Phone Number", type: "tel", required: false },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-2">{f.label}</label>
                  <input type={f.type} name={f.name} required={f.required} className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-[var(--gold)] transition" />
                </div>
              ))}
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-2">Number of Attendees</label>
                <select name="attendees" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-[var(--gold)]">
                  {Array.from({ length: 10 }).map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-2">Message for the Dancer (Optional)</label>
                <textarea name="message" rows={4} className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-[var(--gold)] resize-none" />
              </div>
              <button type="submit" className="btn-maroon w-full">Confirm Attendance</button>
            </form>
          )}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-12 px-6 text-center">
        <img src={omSymbol} alt="" width={64} height={64} className="mx-auto mb-4 opacity-90" />
        <p className="font-display text-2xl">Veda Chekuri</p>
        <p className="font-script text-2xl text-[var(--gold-soft)] mt-1">Bharatanatyam Rangapravesam</p>
        <div className="divider-diamond my-6 max-w-xs mx-auto opacity-60">
          <span className="text-[var(--gold-soft)]">❖</span>
        </div>
        <p className="text-sm text-primary-foreground/80">August 2, 2026 · Annandale, Virginia</p>
        <p className="text-xs text-primary-foreground/60 mt-6">With love & gratitude — The Chekuri Family</p>
      </footer>
    </div>
  );
}

import heroImg from "@/assets/hero-dancer.jpg";
void heroImg;
