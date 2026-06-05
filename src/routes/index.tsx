import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, GraduationCap, Briefcase, Award, Code2, Download } from "lucide-react";
import cvAsset from "@/assets/Marina_George_CV.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marina George — Software Engineer & Full-Stack Developer" },
      { name: "description", content: "AI graduate and full-stack developer based in Alexandria, Egypt. Building modern, user-focused web applications with React, Angular, Next.js and Flutter." },
      { property: "og:title", content: "Marina George — Software Engineer" },
      { property: "og:description", content: "Portfolio, projects, experience and contact details for Marina George." },
    ],
  }),
  component: Portfolio,
});

const experiences = [
  { role: "International Instructor (Freelance)", company: "The Knowledge Academy", period: "May 2026 – Present", bullets: ["Deliver training sessions and workshops for international audiences in technology and software development.", "Adapt content to diverse learning needs across countries and experience levels."] },
  { role: "Frontend Developer Intern", company: "Route Academy", period: "Jan 2026 – May 2026", bullets: ["Built 4+ responsive web apps with HTML, CSS, JavaScript, React.js and Next.js.", "Created 20+ reusable UI components to improve maintainability.", "Integrated REST APIs into 5+ projects for dynamic data handling."] },
  { role: "Instructor (Kids 6–18)", company: "iSchool", period: "Aug 2025 – Oct 2025", bullets: ["Delivered 40+ project-based lessons across Flutter, Web Dev, AI and Data Science.", "Guided 20+ students per cohort through hands-on coding exercises."] },
  { role: "Java & Python Instructor", company: "Innova Steam — AAST", period: "Jun 2025 – Aug 2025", bullets: ["Taught Java and Python to 15+ students through hands-on sessions.", "Created and delivered 10+ interactive lessons on core programming concepts."] },
  { role: "Flutter Developer Intern", company: "Route Academy", period: "Sep 2024 – Feb 2025", bullets: ["Built 5+ Flutter apps using MVVM and Clean Architecture.", "Enhanced 4+ apps with API integration and refined UI/UX."] },
];

const projects = [
  { name: "Spoken Sign", tag: "Graduation Project", desc: "Chat app for individuals with hearing impairments. Sign-to-text and text-to-speech, built with Flutter + Firebase.", tech: ["Flutter", "Firebase", "AI"] },
  { name: "Roselle E-Commerce", tag: "Full Stack", desc: "Feature-rich shopping platform with product listings, cart, orders and social login.", tech: ["Angular 21", "TypeScript", "Bootstrap", "Node.js"] },
  { name: "Social App", tag: "Full Stack", desc: "Facebook-inspired social media app with news feed, posts and social interactions.", tech: ["React", "Tailwind", "Hero UI", "Node.js"] },
  { name: "Bakery React", tag: "Frontend", desc: "Bakery-themed web app showcasing products and brand identity with a clean custom UI.", tech: ["React", "Vite", "CSS"] },
  { name: "Sip Hub Cafeteria", tag: "Full Stack", desc: "Cafeteria management app with auth (Google OAuth, password recovery) and MVC layout.", tech: ["PHP", "MySQL", "MVC"] },
];

const skills = {
  Frontend: ["React.js", "Angular", "Vue.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  "Styling & UI": ["Tailwind CSS", "Bootstrap", "DaisyUI", "Hero UI", "Responsive Design"],
  "Libraries & Tools": ["React Router", "Axios", "Redux Toolkit", "Context API", "Vite"],
  "Backend & DB": ["Firebase", "REST APIs", "PHP", "MySQL", "MongoDB", "Node.js"],
  Languages: ["JavaScript", "TypeScript", "Python", "PHP", "Dart"],
  Other: ["Flutter", "MVVM", "Clean Architecture", "Git & GitHub"],
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">Marina<span className="text-clay">.</span></a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition">About</a></li>
            <li><a href="#experience" className="hover:text-foreground transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-foreground transition">Projects</a></li>
            <li><a href="#education" className="hover:text-foreground transition">Education</a></li>
            <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
          </ul>
          <a href="#contact" className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">Get in touch</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "radial-gradient(900px 500px at 80% -10%, var(--accent), transparent 60%), radial-gradient(700px 400px at -10% 10%, var(--sand), transparent 70%)" }} />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-28">
          <p className="text-sm uppercase tracking-[0.25em] text-clay mb-6">Software Engineer · Alexandria, Egypt</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.02] max-w-4xl">
            Hi, I'm Marina — I build <em className="italic text-clay">warm</em>, user-focused web experiences.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Recent Artificial Intelligence graduate from Alexandria University, passionate about full-stack development —
            React, Angular, Next.js, Flutter — and building clean, scalable products.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition inline-flex items-center gap-2">
              View my work <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://github.com/marinageorge225" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary transition inline-flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/marina-george-b14234234" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary transition inline-flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-border/60">
        <div className="grid md:grid-cols-3 gap-12">
          <h2 className="font-display text-4xl">About</h2>
          <div className="md:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>I'm a software engineer with a foundation in Artificial Intelligence and a love for crafting modern web applications. I enjoy turning complex problems into clean, maintainable solutions — and teaching others along the way.</p>
            <p>Beyond shipping code, I've taught Flutter, Web Development, AI and Data Science to 35+ students, and I'm currently expanding into open-source development at ITI.</p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Problem Solving", "Agile Mindset", "Analytical Thinking", "Clean Architecture"].map(s => (
                <span key={s} className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-t border-border/60">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-clay" />
          <h2 className="font-display text-4xl">Experience</h2>
        </div>
        <div className="space-y-2">
          {experiences.map((e, i) => (
            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-6 py-8 border-t border-border/60">
              <div className="text-sm text-muted-foreground font-medium">{e.period}</div>
              <div>
                <h3 className="font-display text-2xl">{e.role}</h3>
                <p className="text-clay mb-4">{e.company}</p>
                <ul className="space-y-2 text-muted-foreground">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3"><span className="text-clay mt-2">·</span><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-border/60">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-6 h-6 text-clay" />
          <h2 className="font-display text-4xl">Selected Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="group rounded-2xl bg-card border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-clay">{p.tag}</span>
                <a href="https://github.com/marinageorge225" target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 transition">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <h3 className="font-display text-2xl mb-3">{p.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border/60">
        <h2 className="font-display text-4xl mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="rounded-2xl bg-card border border-border p-6">
              <h3 className="font-display text-xl mb-4 text-clay">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s} className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-24 border-t border-border/60">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-6 h-6 text-clay" />
          <h2 className="font-display text-4xl">Education</h2>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl bg-card border border-border p-8">
            <div className="flex flex-wrap justify-between gap-2 mb-2">
              <h3 className="font-display text-2xl">Information Technology Institute (ITI)</h3>
              <span className="text-sm text-muted-foreground">Oct 2025 – Aug 2026</span>
            </div>
            <p className="text-clay">9-Month Diploma — Open-Source Track · MCIT</p>
            <p className="text-muted-foreground mt-2">Alexandria, Egypt</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-8">
            <div className="flex flex-wrap justify-between gap-2 mb-2">
              <h3 className="font-display text-2xl">Alexandria University</h3>
              <span className="text-sm text-muted-foreground">Sep 2021 – Jun 2025</span>
            </div>
            <p className="text-clay">B.Sc. in Artificial Intelligence — Faculty of Computer and Data Science</p>
            <p className="text-muted-foreground mt-2">GPA: 3.67 / 4.0</p>
          </div>
        </div>
      </section>

      {/* Achievements & Certs */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border/60">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-6 h-6 text-clay" />
          <h2 className="font-display text-4xl">Certificates & Achievements</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display text-xl mb-4">Courses</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>· MERN Stack Development — Udemy</li>
              <li>· React Development — Udemy</li>
              <li>· GitHub CI/CD — Udemy</li>
              <li>· Java for Beginners — Udemy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl mb-4">Achievements</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>· RoboParade Competition — Wellington Int. School (Jun 2024)</li>
              <li>· AI Olympics — Alamein International University (Mar 2024)</li>
              <li>· FIRST LEGO League Explore Egypt Championship — Bibliotheca Alexandrina (Feb 2024)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <p className="text-sm uppercase tracking-[0.25em] text-clay mb-4">Get in touch</p>
          <h2 className="font-display text-5xl md:text-6xl max-w-3xl leading-tight">Let's build something thoughtful together.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Open to full-time and freelance opportunities — and open to relocation.</p>
          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <a href="mailto:marinageorgezarif@gmail.com" className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:bg-secondary transition">
              <Mail className="w-5 h-5 text-clay" />
              <span>marinageorgezarif@gmail.com</span>
            </a>
            <a href="tel:+201210400272" className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:bg-secondary transition">
              <Phone className="w-5 h-5 text-clay" />
              <span>+20 121 040 0272</span>
            </a>
            <a href="https://github.com/marinageorge225" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:bg-secondary transition">
              <Github className="w-5 h-5 text-clay" />
              <span>github.com/marinageorge225</span>
            </a>
            <a href="https://linkedin.com/in/marina-george-b14234234" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:bg-secondary transition">
              <Linkedin className="w-5 h-5 text-clay" />
              <span>LinkedIn Profile</span>
            </a>
            <div className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border sm:col-span-2">
              <MapPin className="w-5 h-5 text-clay" />
              <span>Saba Basha, Alexandria, Egypt — Open to relocation</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-muted-foreground flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} Marina George Zarif</span>
            <span>Designed & built with care.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
