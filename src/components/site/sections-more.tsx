import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  Braces,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  PenTool,
  Quote,
  Smartphone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Counter, GlassCard, Magnetic, Pill, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------- Services */

const SERVICES = [
  { title: "Full Stack Development", icon: Braces, copy: "React, Next.js, Node and PostgreSQL — typed end to end." },
  { title: "UI/UX Design", icon: Layers, copy: "Research, flows, wireframes and high-fidelity interfaces." },
  { title: "Brand Identity", icon: Sparkles, copy: "Positioning, type systems, color and full brand guidelines." },
  { title: "Logo Design", icon: PenTool, copy: "Distinctive marks that scale from favicon to billboard." },
  { title: "Web Applications", icon: Braces, copy: "Dashboards, marketplaces and social platforms built to scale." },
  { title: "Mobile Apps", icon: Smartphone, copy: "Responsive PWAs and React Native experiences." },
  { title: "Graphics Design", icon: Palette, copy: "Campaign visuals, social kits and print-ready collateral." },
  { title: "Consulting", icon: Users, copy: "Product strategy, design audits and technical direction." },
];

export function Services() {
  return (
    <section id="services" className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="One partner, from first sketch to production deploy."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <GlassCard className="h-full p-6">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary/60">
                  <s.icon className="size-5 text-accent" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Timeline */

const TIMELINE = [
  {
    year: "2024 — Present",
    role: "Founder & Product Engineer",
    org: "UniConnect",
    copy: "Leading product, design and engineering for a campus social network serving 12,000+ students.",
  },
  {
    year: "2023 — 2024",
    role: "Senior Frontend Engineer",
    org: "Nimbus Studio",
    copy: "Shipped design systems and marketing surfaces for fintech and SaaS clients across three continents.",
  },
  {
    year: "2021 — 2023",
    role: "Full Stack Developer",
    org: "Freelance",
    copy: "Built booking platforms, storefronts and dashboards for founders in Lagos, Nairobi and Berlin.",
  },
  {
    year: "2019 — 2021",
    role: "Graphic & Brand Designer",
    org: "Independent",
    copy: "Crafted brand identities, logo systems and campaign visuals for 40+ small businesses.",
  },
];

export function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <section id="journey" className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="A six-year path from pixels to platforms." />
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-border" />
            <ul className="grid gap-2">
              {TIMELINE.map((item, i) => (
                <li key={item.year}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={cn(
                      "flex w-full items-start gap-4 rounded-xl py-3 pr-4 pl-0 text-left transition-colors",
                      active === i ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-1.5 size-[15px] shrink-0 rounded-full border-2 border-background",
                        active === i ? "aurora" : "bg-muted",
                      )}
                    />
                    <span>
                      <span className="block font-display text-xs tracking-widest uppercase opacity-70">
                        {item.year}
                      </span>
                      <span className="mt-1 block font-display text-lg font-semibold">
                        {item.role}
                      </span>
                      <span className="text-sm opacity-70">{item.org}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="h-full p-8" hover={false}>
              <p className="font-display text-sm tracking-widest text-accent uppercase">
                {TIMELINE[active]?.org}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{TIMELINE[active]?.role}</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {TIMELINE[active]?.copy}
              </p>
              <p className="mt-6 text-sm text-muted-foreground">{TIMELINE[active]?.year}</p>
            </GlassCard>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Testimonials */

const TESTIMONIALS = [
  {
    quote:
      "Zion shipped in three weeks what our previous team scoped for three months — and it looked better than the Figma.",
    name: "Amara Eze",
    role: "Co-founder, Vela Commerce",
  },
  {
    quote:
      "He thinks like a product designer and executes like a senior engineer. Rare combination, real leverage.",
    name: "Daniel Okonkwo",
    role: "CTO, Nimbus Studio",
  },
  {
    quote:
      "The brand system he built still holds up two years and one pivot later. Every detail was considered.",
    name: "Sarah Bello",
    role: "Head of Brand, Kora",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Testimonials" title="What collaborators say." align="center" />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col p-8">
                <Quote className="size-6 text-primary" />
                <p className="mt-5 flex-1 text-lg leading-relaxed text-balance">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-current" />
                  ))}
                </div>
                <div className="mt-4">
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Certifications */

const CERTS = [
  { name: "Meta Front-End Developer", year: "2024" },
  { name: "Google UX Design", year: "2023" },
  { name: "AWS Cloud Practitioner", year: "2023" },
  { name: "Figma Advanced Prototyping", year: "2022" },
];

export function Certifications() {
  return (
    <section className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Certifications" title="Credentials, verified." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.07}>
              <GlassCard className="group flex h-full items-center gap-4 p-6">
                <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-border">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full aurora opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60"
                  />
                  <Award className="relative size-5 text-gold" />
                </span>
                <span>
                  <span className="block font-display text-sm font-semibold">{c.name}</span>
                  <span className="text-sm text-muted-foreground">{c.year}</span>
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Statistics */

const STATS = [
  { label: "Projects Completed", value: 84, suffix: "+" },
  { label: "Happy Clients", value: 46, suffix: "" },
  { label: "Years Experience", value: 6, suffix: "" },
  { label: "GitHub Contributions", value: 3200, suffix: "+" },
  { label: "Apps Built", value: 21, suffix: "" },
];

export function Stats() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass grid gap-8 rounded-3xl px-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center">
              <p className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Blog */

const POSTS = [
  {
    title: "Designing for slow networks without designing ugly",
    excerpt: "How UniConnect keeps a rich social feed under 100kb of critical JavaScript.",
    date: "Jun 2026",
    read: "7 min",
    tag: "Performance",
  },
  {
    title: "The design tokens I put in every project",
    excerpt: "A pragmatic token set that survives redesigns, dark mode and three brand pivots.",
    date: "Apr 2026",
    read: "5 min",
    tag: "Design Systems",
  },
  {
    title: "Shipping as a solo founder-engineer",
    excerpt: "The workflow, tooling and boundaries that let one person run product and code.",
    date: "Feb 2026",
    read: "9 min",
    tag: "Founder",
  },
];

export function Blog() {
  return (
    <section id="writing" className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on craft, performance and building alone."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <GlassCard className="group flex h-full flex-col p-7">
                <Pill>{p.tag}</Pill>
                <h3 className="mt-5 font-display text-xl leading-snug font-semibold text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    {p.date} · {p.read}
                  </span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Contact */

const SOCIALS = [
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "GitHub", icon: Github, href: "https://github.com" },
  { label: "X", icon: MessageCircle, href: "https://x.com" },
  { label: "Email", icon: Mail, href: "mailto:hello@zionoguntade.com" },
  { label: "WhatsApp", icon: Smartphone, href: "https://wa.me/2340000000000" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad relative px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-primary/20 floating-orb"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something worth remembering."
            description="Tell me about the product, the deadline and the ambition. I reply within 24 hours."
          />
          <Reveal delay={0.12}>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-accent" /> Nigeria — working worldwide
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <Magnetic key={s.label} strength={0.25}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="glass grid size-12 place-items-center rounded-xl transition-colors hover:text-accent"
                  >
                    <s.icon className="size-5" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <GlassCard className="p-8" hover={false}>
            <form
              className="grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="text-muted-foreground">Name</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm">
                <span className="text-muted-foreground">Project type</span>
                <input
                  name="subject"
                  className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="Web app, brand identity, consulting…"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-muted-foreground">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="What are we building?"
                />
              </label>
              <Magnetic strength={0.2}>
                <button
                  type="submit"
                  className="w-full rounded-xl aurora px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elevate)] transition-transform hover:scale-[1.01]"
                >
                  {sent ? "Message sent — thank you" : "Send message"}
                </button>
              </Magnetic>
              <p aria-live="polite" className="text-center text-xs text-muted-foreground">
                {sent ? "I'll get back to you within 24 hours." : "No spam. Ever."}
              </p>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
