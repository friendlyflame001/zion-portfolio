import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./primitives";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

/** Thin gradient progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left aurora"
    />
  );
}

/** Soft light that follows the pointer on desktop. */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[55] hidden size-[420px] rounded-full opacity-40 blur-[110px] md:block"
      style={{
        left: pos.x - 210,
        top: pos.y - 210,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 60%, transparent), transparent 65%)",
        transition: "left 220ms ease-out, top 220ms ease-out",
      }}
    />
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5",
          scrolled ? "glass" : "border border-transparent",
        )}
      >
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          Zion<span className="text-gradient">.</span>
          <span className="text-muted-foreground"> Oguntade</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden sm:inline-block">
            <a
              href="#contact"
              className="rounded-xl aurora px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elevate)] transition-transform hover:scale-[1.03]"
            >
              Let's talk
            </a>
          </Magnetic>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden"
          >
            <ul className="grid gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="glass fixed right-5 bottom-5 z-50 grid size-12 place-items-center rounded-full text-foreground transition-colors hover:text-accent"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

/** Brief entry animation on first paint. */
export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-lg font-semibold tracking-tight"
            >
              Zion Oguntade
            </motion.p>
            <div className="mt-4 h-px w-40 overflow-hidden bg-border">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-full aurora"
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Footer() {
  return (
    <footer className="hairline-top px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zion Oguntade — Designed & built in Nigeria.
        </p>
        <nav aria-label="Footer" className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#services" className="transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-xl border border-border transition-colors hover:text-accent"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-xl border border-border transition-colors hover:text-accent"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="mailto:hello@zionoguntade.com"
            aria-label="Email"
            className="grid size-10 place-items-center rounded-xl border border-border transition-colors hover:text-accent"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
