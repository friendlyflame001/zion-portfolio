import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Download, Github } from "lucide-react";
const portraitAsset = { url: "/images/zion-portrait-september-2026.jpg" };
const ucFeed = { url: "/images/uc-feed.jpeg" };
const ucDiscover = { url: "/images/uc-discover.jpeg" };
const ucChat = { url: "/images/uc-chat.jpeg" };
const ucProfile = { url: "/images/uc-profile.jpeg" };
import { GlassCard, Magnetic, Pill, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ Hero */

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="availability">
            <span aria-hidden />
            Available for select freelance & founding roles
          </p>
          <h1>
            <span className="hero-greeting">Hi, I'm</span>Zion
            <br />
            <em>Oguntade.</em>
          </h1>
          <p className="hero-roles">
            Founder • Full Stack Developer • UI/UX Designer • Graphic Designer
          </p>
          <p className="hero-description">
            I design beautiful digital experiences and build scalable web applications that solve
            real world problems.
          </p>
          <div className="hero-actions">
            <a href="#work" className="primary-link">
              View Projects <ArrowUpRight size={18} />
            </a>
            <a href="/resume.pdf" className="resume-link">
              <Download size={17} /> Download Resume
            </a>
          </div>
          <a href="#uniconnect" className="hero-feature-link">
            See UniConnect <ArrowUpRight size={17} />
          </a>
        </div>
        <figure className="hero-portrait">
          <img
            src={portraitAsset.url}
            alt="Portrait of Zion Oguntade, full stack developer and product designer"
            width={1028}
            height={1280}
            fetchPriority="high"
          />
          <figcaption>
            <div>
              <strong>Zion Oguntade</strong>
              <span>Founder, UniConnect</span>
            </div>
            <span>Lagos, NG</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- About */

const ROLES = [
  "Founder of UniConnect",
  "Full Stack Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Branding Specialist",
  "Product Designer",
];

export function About() {
  return (
    <section id="about" className="section-pad relative px-6">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title="Design-obsessed engineer building products people actually keep using."
        />
        <div>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm Zion a founder and full stack developer working at the intersection of engineering
              craft and visual design. Over the last{" "}
              <span className="text-foreground">6 years</span> I've shipped social platforms,
              commerce experiences, dashboards and brand systems for startups and student
              communities across Africa.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              I care about the details most people never notice: easing curves, optical spacing,
              type rhythm, first paint speed. I prototype in Figma, build in React and TypeScript,
              and treat accessibility and performance as part of the design, not an afterthought.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {ROLES.map((role, i) => (
              <Reveal key={role} delay={0.05 * i}>
                <div className="glass flex items-center gap-3 rounded-xl px-4 py-3">
                  <span className="size-1.5 rounded-full aurora" />
                  <span className="text-sm">{role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Skills */

const SKILLS = [
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
      "Authentication",
      "Cloudinary",
    ],
  },
  { group: "Deployment", items: ["Git", "GitHub", "Railway", "Vercel", "Render"] },
  {
    group: "Design",
    items: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Canva",
      "Brand Identity",
      "Logo Design",
      "Motion Design",
    ],
  },
  {
    group: "Soft Skills",
    items: ["Leadership", "Communication", "Problem Solving", "Product Thinking"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A full stack toolkit, sharpened on real products."
          description="Everything I use day to day to take an idea from a blank Figma canvas to a deployed, monitored product."
        />
        <div className="capability-grid mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.group} delay={i * 0.07}>
              <GlassCard className="h-full p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold">{cat.group}</h3>
                  <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
          <Reveal delay={0.35}>
            <GlassCard className="flex h-full flex-col justify-between p-6" hover={false}>
              <p className="font-display text-lg leading-snug font-semibold text-balance">
                Curious about something not on this list?
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition-opacity hover:opacity-80"
              >
                Start a conversation <ArrowUpRight className="size-4" />
              </a>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Featured project */

const UNI_STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Cloudinary",
  "Render",
];

const UNI_SHOTS = [
  { src: ucFeed.url, label: "Feed", caption: "Stories, trending tags & campus feed" },
  { src: ucDiscover.url, label: "Discover", caption: "Find students by school, level & dept" },
  { src: ucChat.url, label: "Chat", caption: "Inbox, requests & communities" },
  { src: ucProfile.url, label: "Profile", caption: "Verified academic identity" },
];

function PhoneMockup({ src, label, caption }: { src: string; label: string; caption: string }) {
  return (
    <div className="group relative">
      <div className="glass relative rounded-[2rem] p-[6px] transition-transform duration-500 group-hover:-translate-y-2">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-border/60 bg-background">
          <img
            src={src}
            alt={`UniConnect ${label} screen`}
            loading="lazy"
            width={540}
            height={1055}
            className="w-full object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-foreground/10"
          />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="font-display text-sm font-semibold">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">{caption}</p>
      </div>
    </div>
  );
}

export function Featured() {
  return (
    <section id="uniconnect" className="section-pad relative px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-violet/20 floating-orb"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Project"
          title="UniConnect; the campus network students actually open every day."
          description="A university social platform connecting students through communities, messaging, announcements, networking and collaboration."
        />

        <Reveal delay={0.12}>
          <div className="relative mt-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-10 bottom-10 rounded-[3rem] aurora opacity-20 blur-3xl"
            />
            <div className="relative grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
              {UNI_SHOTS.map((shot) => (
                <PhoneMockup key={shot.label} {...shot} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {UNI_STACK.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              UniConnect gives every faculty, club and study group its own space with realtime
              messaging, verified announcements, an events feed and a networking layer that matches
              students by course, skill and interest. Built for slow campus networks, it ships under
              100kb of critical JS and works offline-first for the feed.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "2,000+ student accounts",
                "Realtime messaging & presence",
                "Role-based moderation tooling",
                "99.9% uptime since launch",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" /> {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18}>
            <GlassCard className="p-6" hover={false}>
              <p className="font-display text-sm tracking-widest text-muted-foreground uppercase">
                Explore
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href="https://uniconnectng.com.ng"
                  className="inline-flex items-center justify-between rounded-xl aurora px-5 py-3 text-sm font-medium text-primary-foreground"
                >
                  Live Demo <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="https://github.com/friendlyflame001/zion-portfolio"
                  className="inline-flex items-center justify-between rounded-xl border border-border px-5 py-3 text-sm transition-colors hover:text-accent"
                >
                  GitHub <Github className="size-4" />
                </a>
                <a
                  href="#writing"
                  className="inline-flex items-center justify-between rounded-xl border border-border px-5 py-3 text-sm transition-colors hover:text-accent"
                >
                  Case Study <ArrowUpRight className="size-4" />
                </a>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Projects */

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: "Web App" | "Design" | "Branding";
};

const PROJECTS: Project[] = [
  {
    title: "Vela Commerce",
    description: "Headless storefront with instant search, Paystack checkout and an admin CMS.",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1200&q=80",
    category: "Web App",
  },
  {
    title: "Pulse Analytics",
    description: "Realtime product analytics dashboard with cohort charts and anomaly alerts.",
    tech: ["React", "Node.js", "Recharts"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    category: "Web App",
  },
  {
    title: "Aurora Design System",
    description: "A 120 component design system with tokens, docs and dark-first theming.",
    tech: ["Figma", "Storybook", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    category: "Design",
  },
  {
    title: "Kora Identity",
    description: "Full brand identity for a fintech: logo, type system, motion and guidelines.",
    tech: ["Illustrator", "Brand", "Motion"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    category: "Branding",
  },
  {
    title: "Northwind Booking",
    description: "Multi tenant booking platform with calendar sync, payments and SMS reminders.",
    tech: ["Supabase", "Express", "Railway"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "Web App",
  },
  {
    title: "Studio Ori",
    description: "Editorial portfolio for a photography studio with scroll-driven storytelling.",
    tech: ["React", "Motion", "Cloudinary"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    category: "Design",
  },
];

const FILTERS = ["All", "Web App", "Design", "Branding"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="work" className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Selected Work" title="Products, systems and identities." />
          <Reveal delay={0.1}>
            <div
              role="group"
              aria-label="Filter projects"
              className="glass flex gap-1 rounded-xl p-1"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-sm transition-colors",
                    filter === f
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {filter === f ? (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 rounded-lg aurora"
                      transition={{ type: "spring", stiffness: 340, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="project-grid mt-12 grid gap-10 md:grid-cols-2">
          {visible.map((p, i) => (
            <motion.article
              layout
              key={p.title}
              initial={false}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group glass card-hover overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} project cover`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                <span className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-xs">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <a
                    href="https://example.com"
                    className="inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
                  >
                    Live Demo <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href="https://github.com"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub <Github className="size-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
