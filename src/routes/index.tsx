import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Countdown } from "@/components/Countdown";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import danceStudent from "@/assets/photos/Dance_Student.jpeg";
import danceGuru from "@/assets/photos/Dance_Guru.jpeg";
import danceBanner from "@/assets/photos/Dance_Banner.jpeg";
import dance01 from "@/assets/photos/Dance_01.jpeg";
import dance02 from "@/assets/photos/Dance_02.jpeg";
import dance03 from "@/assets/photos/Dance_03.jpeg";
import dance04 from "@/assets/photos/Dance_04.jpeg";
import dance05 from "@/assets/photos/Dance_05.jpeg";
import dance06 from "@/assets/photos/Dance_06.jpeg";
import dance07 from "@/assets/photos/Dance_07.jpeg";
import dance08 from "@/assets/photos/Dance_08.jpeg";
import danceGallery01 from "@/assets/photos/Dance_Gallery_01.jpeg";
import danceGallery02 from "@/assets/photos/Dance_Gallery_02.jpeg";
import danceGallery03 from "@/assets/photos/Dance_Gallery_03.jpeg";
import danceGallery04 from "@/assets/photos/Dance_Gallery_04.jpeg";
import danceGallery05 from "@/assets/photos/Dance_Gallery_05.jpeg";
import danceGallery06 from "@/assets/photos/Dance_Gallery_06.jpeg";
import danceGallery07 from "@/assets/photos/Dance_Gallery_07.jpeg";
import danceGallery08 from "@/assets/photos/Dance_Gallery_08.jpeg";
import danceGallery09 from "@/assets/photos/Dance_Gallery_09.jpeg";
import danceGallery10 from "@/assets/photos/Dance_Gallery_10.jpeg";
import danceGallery11 from "@/assets/photos/Dance_Gallery_11.jpeg";
import danceGallery12 from "@/assets/photos/Dance_Gallery_12.jpeg";
import danceGallery13 from "@/assets/photos/Dance_Gallery_13.jpeg";
import danceGallery14 from "@/assets/photos/Dance_Gallery_14.jpeg";
import danceGallery15 from "@/assets/photos/Dance_Gallery_15.jpeg";
import danceGallery16 from "@/assets/photos/Dance_Gallery_16.jpeg";
import danceGallery17 from "@/assets/photos/Dance_Gallery_17.jpeg";
import danceGallery18 from "@/assets/photos/Dance_Gallery_18.jpeg";
import danceGallery19 from "@/assets/photos/Dance_Gallery_19.jpeg";
import danceGallery20 from "@/assets/photos/Dance_Gallery_20.jpeg";
import danceGallery21 from "@/assets/photos/Dance_Gallery_21.jpeg";
import danceGallery22 from "@/assets/photos/Dance_Gallery_22.jpeg";
import danceGallery23 from "@/assets/photos/Dance_Gallery_23.jpeg";

export const Route = createFileRoute("/")({ component: Index });

const margams = [
  {
    name: "Pranavakaram SiddhiVinayakam",
    description: "A vibrant invocatory piece dedicated to Lord Ganesha, the remover of obstacles, Pranavakaram celebrates the sacred sound \"Om\" through energetic movement and devotion. The composition highlights Nritta with precise footwork, brisk rhythmic patterns, and graceful geometric postures, while subtle Nritya elements express reverence and spiritual joy. Often presented early in a recital, it showcases stamina, timing, and classical technique.",
    image: dance01,
  },
  {
    name: "Manduka Shabdam",
    description: "A lively narrative dance that blends storytelling with rhythmic movement. Set in a lush forest, the piece depicts frogs rhythmically praising Lord Vishnu through the story of Gajendra Moksham. The dance beautifully combines expressive Nritya with playful Nritta, featuring bouncing footwork, quick transitions, dramatic character portrayal, and stylized frog-like movements that make this item both theatrical and technically engaging.",
    image: dance02,
  },
  {
    name: "Bhamakalapam",
    description: "Considered the masterpiece of the Kuchipudi tradition, Bhamakalapam portrays the pride, longing, and devotion of Satyabhama, the beloved queen of Lord Krishna. Rich in Nritya, the dance emphasizes emotional storytelling, expressive dialogue, and dramatic characterization. Traditional elements such as the grand entrance behind a curtain and the iconic braided-hair challenge add theatrical depth, while interwoven Nritta passages highlight rhythmic sophistication and regal grace.",
    image: dance03,
  },
  {
    name: "Aigiri Nandini",
    description: "A powerful tribute to Goddess Durga, Aigiri Nandini depicts her fierce battle against the demon Mahishasura. The choreography emphasizes vigorous Nritta through dynamic footwork, strong stances, rapid rhythmic sequences, and warrior-like movements inspired by Tandava. Intense Nritya conveys both the divine mother's compassion and the goddess's fierce energy as protector and destroyer of evil.",
    image: dance04,
  },
  {
    name: "Krishnam Kalaya Sakhi Sundaram (Tarangam)",
    description: "This beloved Tarangam expresses the Gopis' joyful devotion toward Lord Krishna. The first section features expressive Nritya, portraying Krishna's playful charm and divine beauty. The highlight of the piece is the iconic Tarangam, where the dancer performs intricate Nritta while balancing on the rim of a brass plate, symbolizing focus, balance, and spiritual surrender.",
    image: dance05,
  },
  {
    name: "Brahmam Okate",
    description: "A soulful and philosophical composition, Brahmam Okate conveys the timeless message that all humanity is equal before the divine. Through expressive Nritya, the dancer portrays everyday contrasts — king and servant, rich and poor — to illustrate the unity of all living beings. Graceful movements, gentle storytelling, and uplifting rhythmic passages blend with light Nritta to create a presentation filled with devotion, compassion, and spiritual reflection. The piece beautifully emphasizes harmony, humility, and the universality of the human spirit.",
    image: dance06,
  },
  {
    name: "Shiva Tandavam",
    description: "Shiva Tandavam captures the majestic cosmic dance of Lord Shiva as Nataraja, symbolizing creation, preservation, and destruction. Dominated by vigorous Nritta, the piece features powerful foot stamps, deep stances, rapid turns, and commanding poses inspired by Tandava. Expressive Nritya portrays Shiva's divine energy, meditative calm, and fierce cosmic power, making this item one of the most intense and physically demanding pieces in the repertoire.",
    image: dance07,
  },
  {
    name: "Shivudi Thillana",
    description: "A spirited concluding piece, Shivudu Thillana combines rhythmic brilliance with devotion to Lord Shiva. Primarily a Nritta composition, it showcases fast-paced footwork, striking stage patterns, spins, and crisp movements synchronized to lively percussion. Brief moments of Nritya depict Shiva's iconic form as Nataraja, creating a vibrant finale filled with energy, precision, and celebratory devotion.",
    image: dance08,
  },
];

const orchestra = [
  { role: "Nattuvangam", name: "Lakshmi Babu Garu" },
  { role: "Vocal", name: "Vignesh Subramanian" },
  { role: "Mridangam", name: "Rithwik Raman" },
  { role: "Violin", name: "Samapriya Dandibhotla" },
  { role: "Flute", name: "Svetak Sundhar" },
];

const galleryPhotos = [
  { src: danceGallery01, alt: "Gallery photo 1" },
  { src: danceGallery02, alt: "Gallery photo 2" },
  { src: danceGallery03, alt: "Gallery photo 3" },
  { src: danceGallery04, alt: "Gallery photo 4" },
  { src: danceGallery05, alt: "Gallery photo 5" },
  { src: danceGallery06, alt: "Gallery photo 6" },
  { src: danceGallery07, alt: "Gallery photo 7" },
  { src: danceGallery08, alt: "Gallery photo 8" },
  { src: danceGallery09, alt: "Gallery photo 9" },
  { src: danceGallery10, alt: "Gallery photo 10" },
  { src: danceGallery11, alt: "Gallery photo 11" },
  { src: danceGallery12, alt: "Gallery photo 12" },
  { src: danceGallery13, alt: "Gallery photo 13" },
  { src: danceGallery14, alt: "Gallery photo 14" },
  { src: danceGallery15, alt: "Gallery photo 15" },
  { src: danceGallery16, alt: "Gallery photo 16" },
  { src: danceGallery17, alt: "Gallery photo 17" },
  { src: danceGallery18, alt: "Gallery photo 18" },
  { src: danceGallery19, alt: "Gallery photo 19" },
  { src: danceGallery20, alt: "Gallery photo 20" },
  { src: danceGallery21, alt: "Gallery photo 21" },
  { src: danceGallery22, alt: "Gallery photo 22" },
  { src: danceGallery23, alt: "Gallery photo 23" },
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

const API_URL = import.meta.env.VITE_API_URL as string;

const rsvpFields = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: false },
] as const;

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [margamOpen, setMargamOpen] = useState(false);
  const [margamIndex, setMargamIndex] = useState(0);

  useEffect(() => {
    const open = galleryOpen || margamOpen;
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setGalleryOpen(false);
        setMargamOpen(false);
      }
      if (event.key === "ArrowLeft") {
        if (galleryOpen) {
          setGalleryIndex((index) => (index + galleryPhotos.length - 1) % galleryPhotos.length);
        }
        if (margamOpen) {
          setMargamIndex((index) => (index + margams.length - 1) % margams.length);
        }
      }
      if (event.key === "ArrowRight") {
        if (galleryOpen) {
          setGalleryIndex((index) => (index + 1) % galleryPhotos.length);
        }
        if (margamOpen) {
          setMargamIndex((index) => (index + 1) % margams.length);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [galleryOpen, margamOpen]);

  return (
    <div id="top" className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 text-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        <div className="w-full flex justify-center mb-6">
          <img src={danceBanner} alt="Veda Rangapravesam Banner" className="w-full max-w-4xl max-h-64 object-contain rounded-md shadow-sm" />
        </div>
        <p className="text-[var(--maroon)] tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-display">
          The Family of Veda Cordially Invites You to Her
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-primary leading-tight">
          Kuchipudi
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
        <a href="#rsvp" className="btn-maroon mt-10 inline-block">RSVP Here</a>

        <div className="mt-20 w-full max-w-3xl">
          <p className="text-[var(--gold)] tracking-[0.3em] uppercase text-xs mb-6">Counting Moments Until the Ascendance</p>
          <Countdown />
        </div>
      </section>

      {/* DETAILS */}
      <Section id="details" eyebrow="Save the Date" title="Event Details" className="bg-secondary/40">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { h: "Date", body: <><p className="font-display text-2xl text-primary">August 2, 2026</p><p className="text-muted-foreground mt-2">Sunday</p><p className="text-sm text-muted-foreground mt-3">RSVP by July 17, 2026</p></> },
            { h: "Time", body: <><p className="text-foreground">Seating Opens: 2:00 PM EST</p><p className="text-foreground mt-1">Event: 2:30 PM – 7:30 PM EST</p><p className="text-foreground mt-1">Dinner: 7:30 PM EST Onwards</p></> },
            { h: "Venue", body: <><p className="font-display text-xl text-primary">Richard J. Ernst Community Cultural Center</p><p className="text-muted-foreground mt-1">Northern Virginia Community College – Annandale Campus</p><p className="text-foreground mt-2">8333 Little River Turnpike</p><p className="text-foreground">Annandale, VA 22003</p><a href="https://maps.google.com/?q=Richard+J+Ernst+Community+Cultural+Center+Annandale+VA" target="_blank" rel="noreferrer" className="inline-block mt-4 text-[var(--gold)] tracking-widest text-xs uppercase hover:underline">View Map →</a></> }
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
            On this auspicious day, Veda will perform a traditional <em>Kuchipudi program</em> — a graceful
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
              <img src={danceStudent} alt="Veda Chekuri" width={800} height={1024} loading="lazy" className="w-full" />
            </div>
          </div>
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <p>
              <strong className="text-primary">Veda Chekuri</strong> began dancing at the age of three with an early
              interest in Bollywood dance. She later explored ballet for a year before beginning her training in the
              classical dance form of Kuchipudi. Under the guidance of her Guru, Veda has spent several years learning
              the discipline, technique, and expressive elements of Kuchipudi, including <em>nritta</em> (pure dance)
              and <em>nritya</em> (expressive dance).
            </p>
            <p>
              In addition to Kuchipudi, Veda enjoys exploring other dance styles including Bollywood, ballet, and
              hip-hop. She is also a dedicated student who has earned her Black Belt in Taekwondo, reflecting her
              commitment, focus, and perseverance. Beyond dance and martial arts, her interests include academics,
              music, and community activities.
            </p>
            <p>
              Veda's Rangapravesam marks an important milestone in her Kuchipudi journey and represents years of
              learning, practice, and encouragement from her teachers and family. She looks forward to continuing her
              connection with dance while balancing her many interests and pursuits.
            </p>
          </div>
        </div>
      </Section>

      {/* GURUS */}
      <Section id="gurus" eyebrow="At the Sacred Feet of" title="The Guru & Academy">
        <div className="max-w-5xl mx-auto bg-card border border-border p-10">
          <div className="grid md:grid-cols-[minmax(0,1fr)_420px] gap-10 items-center">
            <div className="space-y-5 text-foreground/85 leading-relaxed">
              <h3 className="font-display text-2xl text-primary">Lakshmi Babu Bangaru</h3>
              <p className="text-[var(--gold)] tracking-widest uppercase text-xs">Founder & Artistic Director, Kuchipudi Dance Academy</p>
              <p>
                Lakshmi Babu Garu arrived in the United States in 1991 with a deep devotion to Kuchipudi and a
                quiet determination to preserve its rich storytelling tradition. In 1996, she founded
                Kuchipudi Dance Academy (KDA), growing from a small Sunday school class into a respected
                training home for American and international students.
              </p>
              <p>
                Her teaching blends rigorous technique, expressive abhinaya, and cultural context, helping
                students move confidently from beginner levels to advanced Rangapravesam milestones. Over the
                years, KDA has become known for its thoughtful choreography, devoted rehearsal culture, and
                community-focused performances.
              </p>
              <p>
                Today, the academy supports a broad range of learners with programs across multiple locations,
                helping dancers develop not only artistic skill but also leadership, discipline, and a deeper
                connection to India’s classical heritage.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="gold-frame p-2 max-w-[420px] w-full">
                <img src={danceGuru} alt="Lakshmi Babu Bangaru" width={420} height={560} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* REPERTOIRE */}
      <Section id="repertoire" eyebrow="The Repertoire" title="A Journey Through the Kuchipudi Program" className="bg-secondary/40">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {margams.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                setMargamIndex(i);
                setMargamOpen(true);
              }}
              className="bg-card border border-border overflow-hidden text-left group"
            >
              <div className="bg-muted p-6" style={{ height: "420px" }}>
                <img src={item.image} alt={item.name} width={800} height={600} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center">
                <p className="text-[var(--gold)] tracking-[0.25em] uppercase text-xs">Dance {String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-2xl text-primary mt-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-3 italic">{item.description}</p>
              </div>
            </button>
          ))}
        </div>

        {margamOpen && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black/80 px-4 py-6">
            <div className="relative mx-auto flex w-full max-w-[95vw] flex-col items-center rounded-[2rem] bg-background p-4 shadow-2xl sm:max-w-[90vw] sm:p-6">
              <button
                type="button"
                onClick={() => setMargamOpen(false)}
                className="absolute right-3 top-3 z-20 rounded-full bg-white/95 p-3 text-foreground shadow-lg transition hover:bg-white sm:right-4 sm:top-4"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative flex w-full items-center justify-center">
                <button
                  type="button"
                  onClick={() => setMargamIndex((margamIndex + margams.length - 1) % margams.length)}
                  className="absolute left-2 z-10 rounded-full bg-white/95 p-3 text-foreground shadow-lg transition hover:bg-white sm:left-3"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <div className="w-full max-w-3xl px-4 sm:px-6">
                  <img
                    src={margams[margamIndex].image}
                    alt={margams[margamIndex].name}
                    className="mx-auto max-h-[70vh] w-full object-contain"
                  />
                  <div className="mt-6 text-center">
                    <p className="text-[var(--gold)] tracking-[0.25em] uppercase text-xs">Dance {String(margamIndex + 1).padStart(2, "0")}</p>
                    <h3 className="font-display text-3xl text-primary mt-3">{margams[margamIndex].name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {margams[margamIndex].description}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMargamIndex((margamIndex + 1) % margams.length)}
                  className="absolute right-2 z-10 rounded-full bg-white/95 p-3 text-foreground shadow-lg transition hover:bg-white sm:right-3"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground sm:text-base">
                {`Dance ${margamIndex + 1} of ${margams.length}`}
              </p>
            </div>
          </div>
        )}
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
          {galleryPhotos.map((photo, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setGalleryIndex(i);
                setGalleryOpen(true);
              }}
              className="aspect-square overflow-hidden bg-muted gold-frame p-1"
            >
              <img src={photo.src} alt={photo.alt} width={500} height={500} loading="lazy" className="w-full h-full object-contain" />
            </button>
          ))}
        </div>

        {galleryOpen && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black/80 px-4 py-6">
            <div className="relative mx-auto flex w-full max-w-[95vw] flex-col items-center rounded-[2rem] bg-background p-4 shadow-2xl sm:max-w-[90vw] sm:p-6">
              <button
                type="button"
                onClick={() => setGalleryOpen(false)}
                className="absolute right-3 top-3 z-20 rounded-full bg-white/95 p-3 text-foreground shadow-lg transition hover:bg-white sm:right-4 sm:top-4"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative flex w-full items-center justify-center">
                <button
                  type="button"
                  onClick={() => setGalleryIndex((galleryIndex + galleryPhotos.length - 1) % galleryPhotos.length)}
                  className="absolute left-2 z-10 rounded-full bg-white/95 p-3 text-foreground shadow-lg transition hover:bg-white sm:left-3"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <img
                  src={galleryPhotos[galleryIndex].src}
                  alt={galleryPhotos[galleryIndex].alt}
                  className="mx-auto max-h-[80vh] w-full max-w-[100%] object-contain"
                />
                <button
                  type="button"
                  onClick={() => setGalleryIndex((galleryIndex + 1) % galleryPhotos.length)}
                  className="absolute right-2 z-10 rounded-full bg-white/95 p-3 text-foreground shadow-lg transition hover:bg-white sm:right-3"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground sm:text-base">
                {`Photo ${galleryIndex + 1} of ${galleryPhotos.length}`}
              </p>
            </div>
          </div>
        )}

        <p className="text-center text-muted-foreground text-sm mt-8 italic">Captured moments from Veda's dance journey.</p>
      </Section>

      {/* RSVP */}
      <Section id="rsvp" eyebrow="Join Us in Celebration" title="RSVP">
        {!submitted && <p className="text-center text-muted-foreground mb-10">Please respond by July 17, 2026</p>}
        <div className="max-w-xl mx-auto bg-card border border-border p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="font-display text-2xl text-primary mb-3">RSVP Confirmed</h3>
              <p className="text-muted-foreground">Thank you for your response. We look forward to seeing you at Veda's Rangapravesam!</p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitError(null);
                setSubmitting(true);
                const fd = new FormData(e.currentTarget);
                try {
                  const res = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: fd.get("name"),
                      email: fd.get("email"),
                      phone: fd.get("phone"),
                      adults: Number(fd.get("adults")),
                      children: Number(fd.get("children")),
                      attendees: Number(fd.get("adults")) + Number(fd.get("children")),
                      message: fd.get("message"),
                    }),
                  });
                  if (!res.ok) {
                    const data = await res.json().catch(() => ({}));
                    setSubmitError((data as { error?: string }).error ?? "Something went wrong. Please try again.");
                  } else {
                    setSubmitted(true);
                  }
                } catch {
                  setSubmitError("Unable to reach the server. Please check your connection and try again.");
                } finally {
                  setSubmitting(false);
                }
              }}
              className="space-y-5"
            >
              {rsvpFields.map((f) => (
                <div key={f.name}>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-2">{f.label}</label>
                  <input type={f.type} name={f.name} required={f.required} className="w-full bg-background text-foreground border border-border px-4 py-3 focus:outline-none focus:border-[var(--gold)] transition" />
                </div>
              ))}
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-2">Number of Attendees</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Adults</label>
                    <select name="adults" defaultValue="1" className="w-full bg-background text-foreground border border-border px-4 py-3 focus:outline-none focus:border-[var(--gold)]">
                      {Array.from({ length: 11 }).map((_, i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Children</label>
                    <select name="children" defaultValue="0" className="w-full bg-background text-foreground border border-border px-4 py-3 focus:outline-none focus:border-[var(--gold)]">
                      {Array.from({ length: 11 }).map((_, i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-2">Message for the Dancer (Optional)</label>
                <textarea name="message" rows={4} className="w-full bg-background text-foreground border border-border px-4 py-3 focus:outline-none focus:border-[var(--gold)] resize-none" />
              </div>
              {submitError && (
                <p className="text-sm text-red-600">{submitError}</p>
              )}
              <button type="submit" disabled={submitting} className="btn-maroon w-full disabled:opacity-60">
                {submitting ? "Sending…" : "Confirm Attendance"}
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-12 px-6 text-center">
        <p className="font-display text-2xl">Veda Chekuri</p>
        <p className="font-script text-2xl text-[var(--gold-soft)] mt-1">Kuchipudi Rangapravesam</p>
        <div className="divider-diamond my-6 max-w-xs mx-auto opacity-60">
          <span className="text-[var(--gold-soft)]">❖</span>
        </div>
        <p className="text-sm text-primary-foreground/80">August 2, 2026 · Annandale, Virginia</p>
        <p className="text-xs text-primary-foreground/60 mt-6">With love & gratitude — The Chekuri Family</p>
      </footer>
    </div>
  );
}

