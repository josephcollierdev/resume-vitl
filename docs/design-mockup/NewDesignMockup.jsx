/**
 * Design mockup only — not wired into the Vue app.
 *
 * Class names use the project's real tailwind.config.js tokens (bg, bg-surface, border,
 * text-primary/secondary/tertiary, accent, teal, font-resume) so they translate close to
 * verbatim into the Vue components described in PLAN.md. `font-resume` is Georgia, already
 * defined in tailwind.config.js but currently unused — repurposed here as the editorial serif.
 * `font-mono` is Tailwind's built-in default stack, no new font load required.
 *
 * Two pages are sketched: the existing single-page resume site (refined) and a new /projects
 * route (portfolio). The PreviewSwitcher at the bottom is a reviewing aid only, not part of the
 * shipped design.
 */
import { useState } from "react";

// Order matches the page's own section order (resume -> skills -> about -> contact). "projects"
// is a real route (not an anchor); from Home.vue these are #anchors, from Projects.vue they'd be
// "/#resume" etc. to navigate back then scroll.
const NAV_LINKS = [
  { label: "resume", href: "#resume" },
  { label: "skills", href: "#skills" },
  { label: "about", href: "#about" },
  { label: "projects", href: "/projects", external: true },
  { label: "contact", href: "#contact" },
];

function Nav({ current, active }) {
  return (
    // No wordmark here — Hero already carries the name, repeating it in the nav was redundant
    // (especially at mobile widths). Right padding is wider than left so "github" doesn't end up
    // under the scrollbar.
    <nav className="sticky top-0 z-50 flex h-[60px] items-center border-b border-border bg-bg pl-7 pr-11">
      <div className="ml-auto flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={
              "rounded-md px-3.5 py-1.5 text-[13px] transition-all duration-150 " +
              ((link.external ? current === "projects" : active === link.label)
                ? "bg-bg-raised text-text-primary"
                : "text-text-secondary hover:bg-bg-raised hover:text-text-primary")
            }
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://github.com/josephcollierdev"
          className="rounded-md px-3.5 py-1.5 text-[13px] text-text-secondary transition-all duration-150 hover:bg-bg-raised hover:text-text-primary"
        >
          github
        </a>
      </div>
    </nav>
  );
}

/* ---------- Resume site (single page) ---------- */

function Hero() {
  return (
    <section className="border-b border-border px-4 py-10 sm:px-7 sm:py-16">
      <div className="flex items-center gap-2 mb-5 w-fit rounded-full border border-teal-border bg-teal-dim px-3 py-1">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
        <span className="text-[11px] font-medium text-teal">Available for projects &amp; remote work</span>
      </div>

      <h1 className="font-resume text-[40px] leading-[1.1] text-text-primary sm:text-[56px]">
        Joseph Collier
      </h1>
      <p className="mt-2 text-[15px] text-text-secondary sm:text-base">
        Full-Stack Developer &amp; Software Engineer{" "}
        <span className="text-text-tertiary">— Brooklyn, NY</span>
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="/projects"
          className="rounded-lg bg-accent-deep px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-accent"
        >
          View Portfolio
        </a>
        <a
          href="#resume"
          className="rounded-lg border border-border-strong px-5 py-2.5 text-[13px] font-semibold text-text-primary transition-colors duration-150 hover:bg-bg-raised"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

function About({ bio }) {
  return (
    <section id="about" className="border-b border-border px-4 py-6 sm:px-7 sm:py-10">
      <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
        about me
      </div>
      <div className="grid items-start gap-5 grid-cols-1 sm:grid-cols-[1fr_180px]">
        <div className="rounded-xl border border-border bg-bg-surface px-6 py-[22px] font-resume text-[15px] leading-[1.7] text-text-secondary">
          {bio}
        </div>
        {/* Facts card — replaces the old avatar+name card; Hero now carries the name */}
        <div className="flex flex-col gap-3 rounded-xl border border-border bg-bg-surface px-4 py-5 text-[12px]">
          <div>
            <div className="text-text-tertiary uppercase tracking-[0.08em] text-[10px] mb-1">Location</div>
            <div className="text-text-primary">Brooklyn, NY</div>
          </div>
          <div>
            <div className="text-text-tertiary uppercase tracking-[0.08em] text-[10px] mb-1">Focus</div>
            <div className="text-text-primary">Fullstack &amp; Cybersecurity</div>
          </div>
          <div>
            <div className="text-text-tertiary uppercase tracking-[0.08em] text-[10px] mb-1">Currently</div>
            <div className="text-text-primary">Studying network security</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section id="resume" className="border-b border-border px-4 py-6 sm:px-7 sm:py-10">
      <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
        resume
      </div>
      <div className="flex flex-col items-center gap-5 rounded-xl border border-border bg-bg-surface p-7">
        <div className="w-full rounded-lg bg-[#faf9f7] p-2 sm:max-w-[440px]">
          <div className="flex h-[300px] items-center justify-center rounded text-xs text-black/30">
            resume page image (unchanged)
          </div>
        </div>
        <a href="#" className="text-[13px] text-accent">Download PDF</a>
      </div>
    </section>
  );
}

const TOP_SKILLS = ["PHP", "Laravel", "Vue.js", "JavaScript", "Python", "MySQL", "AWS", "Docker", "REST", "OWASP"];
const FULL_SKILL_GROUPS = [
  { label: "Programming & Markup Languages", items: ["PHP", "Javascript", "Python", "HTML/CSS", "Bash", "Shell"] },
  { label: "Web Frameworks & Runtime Environments", items: ["Laravel", "Phalcon", "Node.js", "Django"] },
  { label: "Security & Authorization", items: ["OAuth", "JWT", "OpenID Connect", "SAML", "LDAP"], teal: true },
  { label: "…16 more categories", items: ["see full skills list"] },
];

function Skills() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="skills" className="border-b border-border px-4 py-6 sm:px-7 sm:py-10">
      <div className="mb-3.5 flex items-center justify-between">
        <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">skills</div>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-[11px] font-medium text-text-secondary hover:text-text-primary"
        >
          {expanded ? "Show top skills" : "View full skill set →"}
        </button>
      </div>

      {!expanded && (
        <div className="rounded-xl border border-border bg-bg-surface px-5 py-[18px]">
          <div className="mb-3 text-[11px] font-semibold tracking-[0.03em] text-text-secondary">Top skills</div>
          <div className="flex flex-wrap gap-1.5">
            {TOP_SKILLS.map((s) => (
              <span key={s} className="rounded-full border border-accent-deep bg-accent-dim px-3 py-1 text-[11px] font-medium text-accent">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {expanded &&
        FULL_SKILL_GROUPS.map((group) => (
          <div key={group.label} className="mb-3.5 rounded-xl border border-border bg-bg-surface px-5 py-[18px]">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.03em] text-text-secondary">{group.label}</div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((s) => (
                <span
                  key={s}
                  className={
                    "rounded-full px-3 py-1 text-[11px] font-medium border " +
                    (group.teal ? "border-teal-border bg-teal-dim text-teal" : "border-accent-deep bg-accent-dim text-accent")
                  }
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="min-h-[220px] px-4 py-6 sm:px-7 sm:py-10">
      <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">contact</div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-bg-surface p-6">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">Email</div>
          <a href="mailto:josephcollier.contact@gmail.com" className="border-b border-accent-deep pb-0.5 text-[13px] text-accent">
            josephcollier.contact@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-bg-surface p-6">
          <div className="text-xl font-bold text-text-primary">
            josephcollier<span className="text-accent">.</span>dev
          </div>
          <div className="text-[11px] tracking-[0.08em] text-text-tertiary">Brooklyn · NYC</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-7 py-5 text-center text-xs tracking-[0.04em] text-text-tertiary">
      © 2026 Joseph Collier · fullstack &amp; Cybersecurity
    </footer>
  );
}

function ResumeSitePage() {
  const bio =
    "Hey, I'm Joseph! I'm a fullstack developer and technology professional from NYC, raised in Queens and currently living in Brooklyn. I enjoy working on new and exciting projects for work and for fun, and I'm always down to travel or work remotely.";
  return (
    <div className="bg-bg min-h-screen">
      <Nav active="resume" />
      <Hero />
      <ResumeSection />
      <Skills />
      <About bio={bio} />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- Portfolio page (new /projects route) ---------- */

const PROJECTS = [
  {
    category: "3D Printing",
    date: "2025",
    title: "Parametric Enclosure Series", // PLACEHOLDER — swap for real project name
    deck: "A library of custom-fit enclosures designed in CAD and printed for home network and workshop electronics.", // PLACEHOLDER
    tags: ["Fusion 360", "PLA+", "FDM"],
  },
  {
    category: "Electronics",
    date: "2025",
    title: "Home Automation Control Panel", // PLACEHOLDER
    deck: "A wall-mounted control panel wired and programmed to manage lighting and climate for the apartment.", // PLACEHOLDER
    tags: ["ESP32", "Soldering", "Home Assistant"],
  },
  {
    category: "Workshop",
    date: "2024",
    title: "Garage Workshop Reorganization", // PLACEHOLDER
    deck: "A full teardown and rebuild of a home workshop — storage, workflow, and tool layout redesigned from scratch.", // PLACEHOLDER
    tags: ["Storage design", "Woodworking"],
  },
];

function PhotoPlaceholder({ label, className = "" }) {
  return (
    <div
      className={
        "flex items-center justify-center rounded-lg border border-border bg-gradient-to-br from-bg-raised to-bg-surface text-[11px] text-text-tertiary " +
        className
      }
    >
      {label}
    </div>
  );
}

function PortfolioMasthead() {
  return (
    <header className="border-b border-border px-4 py-10 sm:px-7 sm:py-14">
      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-3">portfolio</div>
      <h1 className="font-resume text-[36px] leading-[1.15] text-text-primary sm:text-[48px]">
        Projects &amp; builds
      </h1>
      <p className="mt-3 max-w-[540px] font-resume text-[15px] leading-[1.7] text-text-secondary">
        A running record of things I've designed, wired, printed, and built outside of client work —
        3D prints, electronics, and workshop projects.
      </p>
    </header>
  );
}

function FeaturedProject({ project }) {
  return (
    <section className="border-b border-border px-4 py-8 sm:px-7 sm:py-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1.1fr_1fr] sm:items-center">
        <PhotoPlaceholder label="Featured photo placeholder — 16:10" className="aspect-[16/10] w-full" />
        <div>
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-teal">
            {project.category} · {project.date}
          </div>
          <h2 className="font-resume text-[28px] leading-[1.2] text-text-primary sm:text-[32px]">
            {project.title}
          </h2>
          <p className="mt-3 font-resume text-[15px] leading-[1.7] text-text-secondary">{project.deck}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-border-strong bg-bg-raised px-3 py-1 font-mono text-[11px] text-text-secondary">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="rounded-xl border border-border bg-bg-surface p-5">
      <PhotoPlaceholder label="Photo placeholder" className="aspect-[4/3] w-full mb-4" />
      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-teal">
        {project.category} · {project.date}
      </div>
      <h3 className="font-resume text-[19px] leading-[1.3] text-text-primary">{project.title}</h3>
      <p className="mt-2 font-resume text-[13px] leading-[1.6] text-text-secondary">{project.deck}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-border-strong bg-bg-raised px-2.5 py-0.5 font-mono text-[10px] text-text-secondary">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [featured, ...rest] = PROJECTS;
  return (
    <div className="bg-bg min-h-screen">
      <Nav current="projects" />
      <PortfolioMasthead />
      <FeaturedProject project={featured} />
      <section className="px-4 py-8 sm:px-7 sm:py-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ---------- Reviewing aid only — not part of the shipped design ---------- */

export default function PreviewSwitcher() {
  const [page, setPage] = useState("resume");
  return (
    <div>
      <div className="flex justify-center gap-2 bg-black py-3">
        <button
          onClick={() => setPage("resume")}
          className={"rounded px-3 py-1 text-xs " + (page === "resume" ? "bg-white text-black" : "text-white")}
        >
          Resume site (single page)
        </button>
        <button
          onClick={() => setPage("projects")}
          className={"rounded px-3 py-1 text-xs " + (page === "projects" ? "bg-white text-black" : "text-white")}
        >
          /projects (new route)
        </button>
      </div>
      {page === "resume" ? <ResumeSitePage /> : <ProjectsPage />}
    </div>
  );
}
