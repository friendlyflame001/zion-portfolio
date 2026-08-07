import { createFileRoute } from "@tanstack/react-router";
import { BackToTop, CursorGlow, Footer, Loader, Nav, ScrollProgress } from "@/components/site/chrome";
import { About, Featured, Hero, Projects, Skills } from "@/components/site/sections-work";
import {
  Blog,
  Certifications,
  Contact,
  Services,
  Stats,
  Testimonials,
  Timeline,
} from "@/components/site/sections-more";

const title = "Zion Oguntade — Founder, Full Stack Developer & Product Designer";
const description =
  "Portfolio of Zion Oguntade: founder of UniConnect, full stack developer and UI/UX designer building beautiful, scalable web products from Nigeria.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Zion Oguntade",
          jobTitle: "Founder, Full Stack Developer & UI/UX Designer",
          address: { "@type": "PostalAddress", addressCountry: "NG" },
          knowsAbout: ["React", "Next.js", "TypeScript", "UI/UX Design", "Brand Identity"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Featured />
        <Projects />
        <Services />
        <Timeline />
        <Testimonials />
        <Certifications />
        <Stats />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
