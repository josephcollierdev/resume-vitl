/**
 * MOCKUP.jsx — Visual reference for jay.developer redesign
 *
 * This file is READ-ONLY reference for the Cursor agent.
 * Do NOT import or render this in the actual project.
 * Use it to verify your Vue output matches the intended design.
 *
 * Stack note: the real project uses Vue 3 + Tailwind + Inertia.
 * This mockup uses React inline styles purely for portability.
 * Map every inline style here to its Tailwind equivalent when
 * writing the real Home.vue component.
 */

import { useState } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
// These map 1:1 to the tokens in .cursorrules and tailwind.config.js
const T = {
  bg:          "#0f0f11",
  bgSurface:   "#16161a",
  bgRaised:    "#1c1c21",
  border:      "#2a2a32",
  borderStrong:"#38383f",
  text:        "#e8e4f0",
  text2:       "#9994aa",
  text3:       "#55505f",
  accent:      "#7f77dd",
  accentDeep:  "#534ab7",
  accentDim:   "#2a2640",
  teal:        "#1d9e75",
  tealDim:     "#0d3326",
  tealBorder:  "#0f6e56",
};

// ─── Skills data ──────────────────────────────────────────────────────────────
// In the real project this comes from the $page.props.skillsData Inertia prop.
const skillsData = [
  { label: "Programming & Markup Languages", items: ["PHP", "Javascript", "Python", "HTML/CSS", "Bash", "Shell"] },
  { label: "Web Frameworks & Runtime Environments", items: ["Laravel", "Phalcon", "Node.js", "Django"] },
  { label: "Frontend Frameworks & Libraries", items: ["Vue.js", "React.js", "jQuery", "Tailwind", "Bootstrap"] },
  { label: "Databases & Data Storage", items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis"] },
  { label: "CMS & Admin Panels", items: ["WordPress", "Filament", "Backpack"] },
  { label: "Virtualization & Containerization", items: ["Docker", "Vagrant", "VirtualBox"] },
  { label: "Deployment & Automation Tools", items: ["Git", "Jenkins", "Docker", "Envoyer", "Buddy", "CircleCI"] },
  { label: "Automated Testing", items: ["PHPUnit", "Pest", "Laravel Dusk", "Selenium", "Cypress"] },
  { label: "Monitoring & Logging", items: ["New Relic", "Sentry", "Kibana", "Valgrind", "Pulse"] },
  { label: "Cloud Services & Platforms", items: ["AWS", "GCP", "Azure", "DigitalOcean", "Pantheon"] },
  { label: "Search & Indexing", items: ["Elasticsearch", "BigQuery"] },
  // teal: true — security/cyber groups get the teal pill variant
  { label: "Security & Authorization", items: ["OAuth", "JWT", "OpenID Connect", "SAML", "LDAP"], teal: true },
  { label: "API Integrations", items: ["REST", "GraphQL", "SOAP", "XML-RPC", "JSON-RPC"] },
  { label: "Package Managers", items: ["Composer", "NPM", "Yarn", "Vite"] },
  { label: "Job Queues & Message Brokers", items: ["Redis", "RabbitMQ", "Beanstalkd", "Pheanstalk"] },
  { label: "Methodologies & Best Practices", items: ["Agile", "Scrum", "Kanban", "TDD", "CI/CD", "OWASP"] },
  { label: "Operating Systems", items: ["Linux", "macOS", "Windows", "Unix"] },
  { label: "IDEs & Editors", items: ["PHPStorm", "VS Code", "Sublime Text", "Vim", "Nano"] },
  { label: "Design Tools", items: ["Figma", "Zeplin", "Adobe XD", "Adobe Photoshop"] },
  { label: "Cybersecurity Certifications", items: ["Play It Safe: Manage Security Risks", "Connect and Protect: Networks and Network Security"], teal: true },
];

// ─── Style map (React inline → maps to Tailwind in real project) ──────────────
const s = {
  // root → class="min-h-screen bg-bg text-text-primary font-ui text-sm"
  root: { background: T.bg, color: T.text, minHeight: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif", fontSize: "14px" },

  // nav → class="sticky top-0 z-50 h-[60px] flex items-center border-b border-border bg-bg px-7"
  nav: { height: "60px", display: "flex", alignItems: "center", borderBottom: `1px solid ${T.border}`, background: T.bg, padding: "0 28px" },

  // navLogo → class="text-base font-bold tracking-tight text-text-primary mr-auto"
  navLogo: { fontSize: "16px", fontWeight: 700, color: T.text, marginRight: "auto", letterSpacing: "-0.01em" },

  navLinks: { display: "flex", gap: "2px" },

  // navLink (inactive) → class="text-[13px] text-text-secondary px-3.5 py-1.5 rounded-md transition-all hover:bg-bg-raised hover:text-text-primary"
  // navLink (active)   → class="text-[13px] text-text-primary px-3.5 py-1.5 rounded-md bg-bg-raised"
  navLink: (active) => ({
    color: active ? T.text : T.text2,
    textDecoration: "none",
    fontSize: "13px",
    padding: "6px 14px",
    borderRadius: "6px",
    background: active ? T.bgRaised : "transparent",
    transition: "all 0.15s",
  }),

  // section → class="border-b border-border"
  section: { borderBottom: `1px solid ${T.border}` },

  // inner → class="px-7 py-10"
  inner: { padding: "40px 28px" },

  // eyebrow → class="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent mb-3.5"
  eyebrow: { fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.accent, marginBottom: "14px" },

  // aboutGrid → class="grid grid-cols-[1fr_180px] gap-5 items-start max-sm:grid-cols-1"
  aboutGrid: { display: "grid", gridTemplateColumns: "1fr 180px", gap: "20px", alignItems: "start" },

  // bio → class="bg-bg-surface border border-border rounded-xl p-6 text-[13px] leading-[1.75] text-text-secondary"
  bio: { background: T.bgSurface, border: `1px solid ${T.border}`, borderRadius: "12px", padding: "22px 24px", lineHeight: 1.75, color: T.text2, fontSize: "13px" },

  // avatarCard → class="bg-bg-surface border border-border rounded-xl flex flex-col items-center justify-center gap-3 py-6 px-4"
  avatarCard: { background: T.bgSurface, border: `1px solid ${T.border}`, borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "24px 16px" },

  // avatarCircle → class="w-[72px] h-[72px] rounded-full bg-accent-dim border-2 border-accent-deep flex items-center justify-center text-2xl font-bold text-accent"
  avatarCircle: { width: "72px", height: "72px", borderRadius: "50%", background: T.accentDim, border: `2px solid ${T.accentDeep}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 700, color: T.accent },

  // statusDot → class="inline-block w-1.5 h-1.5 rounded-full bg-teal mr-1.5 align-middle"
  dot: { display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: T.teal, marginRight: "5px", verticalAlign: "middle" },

  // resumeWrap → class="bg-bg-surface border border-border rounded-xl p-7 flex flex-col items-center gap-5"
  resumeWrap: { background: T.bgSurface, border: `1px solid ${T.border}`, borderRadius: "12px", padding: "28px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" },

  // resumePage → plain div wrapping <img>, not a font-styled element in the real project
  // real: class="bg-[#faf9f7] rounded-lg w-full max-w-[440px] overflow-hidden"
  resumePage: { background: "#faf9f7", borderRadius: "8px", width: "100%", maxWidth: "440px", padding: "8px" },

  // skillGroup → class="bg-bg-surface border border-border rounded-xl px-5 py-4.5 mb-3.5"
  skillGroup: { background: T.bgSurface, border: `1px solid ${T.border}`, borderRadius: "12px", padding: "18px 20px", marginBottom: "14px" },

  // skillLabel → class="text-[11px] font-semibold text-text-secondary tracking-[0.03em] mb-3"
  skillLabel: { fontSize: "11px", fontWeight: 600, color: T.text2, marginBottom: "12px", letterSpacing: "0.03em" },

  // pills → class="flex flex-wrap gap-1.5"
  pills: { display: "flex", flexWrap: "wrap", gap: "6px" },

  // pill (default) → class="bg-accent-dim text-accent border border-accent-deep rounded-full px-3 py-1 text-[11px] font-medium"
  pill: { background: T.accentDim, color: T.accent, padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 500, border: `1px solid ${T.accentDeep}` },

  // pill (teal) → class="bg-teal-dim text-teal border border-teal-border rounded-full px-3 py-1 text-[11px] font-medium"
  pillTeal: { background: T.tealDim, color: T.teal, border: `1px solid ${T.tealBorder}` },

  // statusBar → class="flex gap-2 items-center bg-teal-dim border border-teal-border rounded-lg px-4 py-2.5 mb-5"
  statusBar: { display: "flex", gap: "8px", alignItems: "center", background: T.tealDim, border: `1px solid ${T.tealBorder}`, borderRadius: "8px", padding: "10px 16px", marginBottom: "20px" },

  // contactGrid → class="grid grid-cols-2 gap-5 max-sm:grid-cols-1"
  contactGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" },

  // card → class="bg-bg-surface border border-border rounded-xl p-6"
  card: { background: T.bgSurface, border: `1px solid ${T.border}`, borderRadius: "12px", padding: "24px" },

  // cardLabel → class="text-[11px] font-semibold text-text-tertiary uppercase tracking-[0.1em] mb-2"
  cardLabel: { fontSize: "11px", fontWeight: 600, color: T.text3, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" },

  // emailLink → class="text-accent text-[13px] tracking-[0.02em] no-underline border-b border-accent-deep pb-0.5 hover:text-text-primary transition-colors"
  emailLink: { color: T.accent, fontSize: "13px", letterSpacing: "0.02em", textDecoration: "none", borderBottom: `1px solid ${T.accentDeep}`, paddingBottom: "2px" },

  // footer → class="px-7 py-5 text-center text-xs text-text-tertiary tracking-[0.04em] border-t border-border"
  footer: { padding: "20px 28px", textAlign: "center", fontSize: "12px", color: T.text3, letterSpacing: "0.04em", borderTop: `1px solid ${T.border}` },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Resume image frame. In real project: <img :src="$page.props.resumeImages[0]" ... /> */
function ResumePageFrame({ pageNumber }) {
  return (
    <div style={s.resumePage}>
      {/* Real project: replace this placeholder with the actual <img> tag */}
      <div style={{ background: "#ede9e3", borderRadius: "4px", width: "100%", aspectRatio: "8.5/11", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "11px", color: "#aaa", letterSpacing: "0.1em" }}>RESUME PAGE {pageNumber}</span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Mockup() {
  const [hov, setHov] = useState(null);
  const navItems = ["about", "resume", "skills", "contact", "github"];

  return (
    <div style={s.root}>

      {/* ── Nav ───────────────────────────────────────────────────────────── */}
      <nav style={s.nav}>
        <div style={s.navLogo}>
          jay<span style={{ color: T.accent }}>.</span>developer
        </div>
        <div style={s.navLinks}>
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "github" ? "https://github.com/jaydeveloperdev" : `#${item}`}
              target={item === "github" ? "_blank" : undefined}
              rel="noreferrer"
              style={s.navLink(hov === item)}
              onMouseEnter={() => setHov(item)}
              onMouseLeave={() => setHov(null)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <div style={s.section} id="about">
        <div style={s.inner}>
          <div style={s.eyebrow}>About me</div>
          <div style={s.aboutGrid}>
            {/* Bio — real project: <div v-html="biographyText" /> */}
            <div style={s.bio}>
              Hey, I'm jay! I'm a fullstack developer and technology professional from NYC!
              Raised in Queens and currently living in Brooklyn, I enjoy working on new and exciting
              projects for work and for fun, and i'm always down to travel or work remotely.
              <br /><br />
              I primarily work as a software engineer with various web applications and I am always
              looking to expand my breadth of knowledge in regards to technology. Currently, I am
              studying cybersecurity and networking as a way to enhance my skills as a web developer.
              <br /><br />
              Below, you'll find a list of jobs that i've held along with a brief outlook of my
              skills. Feel free to check out my resume and don't hesitate to contact me!
            </div>
            {/* Avatar card */}
            <div style={s.avatarCard}>
              <div style={s.avatarCircle}>J</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: T.text, textAlign: "center" }}>jay developer</div>
              <div style={{ fontSize: "11px", color: T.text3, textAlign: "center" }}>
                <span style={s.dot} />Brooklyn, NY
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Resume ────────────────────────────────────────────────────────── */}
      <div style={s.section} id="resume">
        <div style={s.inner}>
          <div style={s.eyebrow}>Resume</div>
          <div style={s.resumeWrap}>
            {/* Real project: render actual resume images from storage */}
            <ResumePageFrame pageNumber={1} />
            <ResumePageFrame pageNumber={2} />
          </div>
        </div>
      </div>

      {/* ── Skills ────────────────────────────────────────────────────────── */}
      <div style={s.section} id="skills">
        <div style={s.inner}>
          <div style={s.eyebrow}>Skills</div>
          {/* Real project: v-for="group in skillsData" */}
          {skillsData.map((group) => (
            <div key={group.label} style={s.skillGroup}>
              <div style={s.skillLabel}>{group.label}</div>
              <div style={s.pills}>
                {/* Real project: v-for="item in group.items" */}
                {group.items.map((item) => (
                  <span key={item} style={{ ...s.pill, ...(group.teal ? s.pillTeal : {}) }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <div style={{ ...s.section, borderBottom: "none" }} id="contact">
        <div style={{ ...s.inner, minHeight: "260px" }}>
          <div style={s.eyebrow}>Contact</div>
          {/* Status bar */}
          <div style={s.statusBar}>
            <span style={s.dot} />
            <span style={{ fontSize: "12px", color: T.teal, fontWeight: 500 }}>
              Available for projects &amp; remote work
            </span>
          </div>
          <div style={s.contactGrid}>
            {/* Email card */}
            <div style={s.card}>
              <div style={s.cardLabel}>Email</div>
              <a href="mailto:jaydeveloper.contact@gmail.com" style={s.emailLink}>
                jaydeveloper.contact@gmail.com
              </a>
            </div>
            {/* Logo card */}
            <div style={{ ...s.card, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <div style={{ fontSize: "20px", fontWeight: 700, color: T.text }}>
                jay<span style={{ color: T.accent }}>.</span>dev
              </div>
              <div style={{ fontSize: "11px", color: T.text3, letterSpacing: "0.08em" }}>
                Brooklyn · NYC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer style={s.footer}>
        © 2026 jay developer · fullstack &amp; cybersecurity
      </footer>

    </div>
  );
}
