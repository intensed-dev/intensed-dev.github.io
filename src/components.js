const siteContent = {
  nav: [
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Stack", href: "#stack" },
    { label: "Kontakt", href: "#contact" },
  ],
  heroMetrics: [
    { value: "5+", label: "Years of Experience" },
    { value: "~2h", label: "Responsetimes" },
    { value: "13+", label: "Projects" },
  ],
  projects: [
    {
      title: "Launch Pages",
      kicker: "GitHub Pages",
      summary: "Statische Websites mit präziser Dramaturgie, klarer Struktur und minimalem Wartungsaufwand.",
      tags: ["HTML", "Tailwind", "DaisyUI"],
      tone: "light",
    },
    {
      title: "KeyframeCSS",
      kicker: "Utility Animations",
      summary: "Easy & Tailwind-compatible CSS classes for beautiful, fluid animations.",
      tags: ["CSS", "Animations", "Performance"],
      tone: "dark",
    },
    {
      title: "FaST SDK",
      kicker: "BETA ∙ Performances",
      summary: "FaST speeds up your loading times of websites by using javascript to prioritize what's fastest.",
      tags: ["JavaScript", "Frontend", "Performance"],
      tone: "light",
    },
  ],
  services: [
    {
      icon: "sparkles",
      title: "No generative AI",
      text: "I wont use generative AIs like Claude Code, Codex, ChatGPT or other LLMs to generate whole websites.",
    },
    {
      icon: "layers-3",
      title: "Deep Experience",
      text: "I can code since I can think, and my experience is guiding my way into the future, and I can trust her.",
    },
    {
      icon: "gauge",
      title: "Fast Pages",
      text: "No Building, No talking: I will get started when I'm ready, and proceed until I am done. At least I try :)",
    },
  ],
  stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "KeyframeCSS", "Swift", "GitHub Pages"],
  timeline: [
    { year: "01", title: "Define", text: "Selecting Positioning, Sitestructure and Componentgrid." },
    { year: "02", title: "Craft", text: "Crafting Materials, Motion and responsive Details." },
    { year: "03", title: "Ship", text: "Deploying static websites and expanding iterative details." },
  ],
};

const icon = (name, className = "h-5 w-5") => `<i data-lucide="${name}" class="${className}"></i>`;

const HeaderComponent = `
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/55 backdrop-blur-2xl transition-all duration-300" data-header>
    <nav class="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Hauptnavigation">
      <a href="#top" class="group flex items-center gap-2 text-sm font-semibold tracking-normal text-neutral-950">
        <span class="grid h-7 w-7 place-items-center rounded-full bg-neutral-950 text-[11px] font-black text-white transition-transform duration-300 group-hover:scale-105">ID</span>
        <span>Intense.</span>
      </a>
      <div class="hidden items-center gap-7 text-sm text-neutral-700 md:flex" data-nav-links></div>
      <a href="#contact" class="btn btn-sm rounded-full border-0 bg-neutral-950 px-4 text-white hover:bg-neutral-800">
        ${icon("send", "h-4 w-4")}
        Contact
      </a>
    </nav>
  </header>
`;

const HeroComponent = `
  <section id="top" class="relative isolate min-h-[92svh] overflow-hidden pt-14">
    <div class="hero-visual absolute inset-0 -z-10" aria-hidden="true">
      <div class="hero-grid"></div>
      <div class="hero-sheen" data-parallax data-speed="0.22"></div>
    </div>
    <div class="mx-auto grid min-h-[calc(92svh-3.5rem)] max-w-7xl content-center gap-12 px-5 py-20 md:grid-cols-[0.92fr_1.08fr] md:px-8">
      <div class="max-w-3xl self-center">
        <p class="reveal mb-5 text-sm font-semibold uppercase text-neutral-500">Web experiences for people who notice details.</p>
        <h1 class="reveal text-balance text-5xl font-black leading-[0.95] text-neutral-950 sm:text-6xl lg:text-8xl">
          Intensed.
          <span class="block text-neutral-500">Designed to feel inevitable.</span>
        </h1>
        <p class="reveal mt-7 max-w-2xl text-pretty text-lg leading-8 text-neutral-600 md:text-xl">
          I'm a high school student, frontend developer and Lead Developer at Kryphic Games.
        </p>
        <div class="reveal mt-9 flex flex-wrap items-center gap-3">
          <a href="#work" class="btn rounded-full border-0 bg-neutral-950 px-6 text-white hover:bg-neutral-800">
            ${icon("arrow-down-right", "h-4 w-4")}
            View my Work
          </a>
          <a href="#studio" class="btn btn-ghost rounded-full px-6 text-neutral-800">
            ${icon("play", "h-4 w-4")}
            Values
          </a>
        </div>
      </div>
      <div class="stage-wrap reveal" data-parallax data-speed="-0.1">
        <div class="device-stage" aria-label="Intensed Dev Interface Vorschau">
          <div class="device-toolbar">
            <span></span><span></span><span></span>
          </div>
          <div class="device-screen">
            <div class="screen-line wide"></div>
            <div class="screen-line"></div>
            <div class="screen-dashboard">
              <div class="dashboard-panel active"></div>
              <div class="dashboard-panel"></div>
              <div class="dashboard-panel"></div>
            </div>
            <div class="screen-wave"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto -mt-12 grid max-w-7xl gap-3 px-5 pb-8 sm:grid-cols-3 md:px-8" data-hero-metrics></div>
  </section>
`;

const ProjectsComponent = `
  <section id="work" class="section-pad bg-neutral-950 text-white">
    <div class="mx-auto max-w-7xl px-5 md:px-8">
      <div class="section-heading reveal">
        <p class="eyebrow text-white/55">Work & Projects</p>
        <h2 class="text-balance text-4xl font-black leading-tight sm:text-6xl">Built like a product launch. Maintained like a simple website.</h2>
      </div>
      <div class="mt-12 grid gap-5 lg:grid-cols-3" data-projects></div>
    </div>
  </section>
`;

const StudioComponent = `
  <section id="studio" class="section-pad overflow-hidden bg-base-100">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8">
      <div class="reveal">
        <p class="eyebrow">Values & Studio</p>
        <h2 class="text-balance text-4xl font-black leading-tight text-neutral-950 sm:text-6xl">Calm surface. Serious engineering underneath.</h2>
        <p class="mt-6 text-lg leading-8 text-neutral-600">Steve Jobs once said: <em>"Design is not just how it looks. Design is how it works."</em> I am trying my best to fullfil this mission.</p>
      </div>
      <div class="grid gap-4" data-services></div>
    </div>
  </section>
`;

const StackComponent = `
  <section id="stack" class="section-pad bg-[#f5f5f7]">
    <div class="mx-auto max-w-7xl px-5 md:px-8">
      <div class="section-heading reveal">
        <p class="eyebrow">Stack & Tools</p>
        <h2 class="text-balance text-4xl font-black leading-tight text-neutral-950 sm:text-6xl">Simple tools, polished output.</h2>
      </div>
      <div class="reveal mt-10 flex flex-wrap gap-3" data-stack></div>
      <div class="mt-16 grid gap-5 md:grid-cols-3" data-timeline></div>
    </div>
  </section>
`;

const ContactComponent = `
  <section id="contact" class="section-pad bg-neutral-950 text-white">
    <div class="mx-auto max-w-5xl px-5 text-center md:px-8">
      <p class="eyebrow reveal text-white/55">Kontakt</p>
      <h2 class="reveal text-balance text-5xl font-black leading-none sm:text-7xl">Make it intense. Keep it effortless.</h2>
      <p class="reveal mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65">My mission is to make the internet</p>
      <div class="reveal mt-10 flex flex-wrap justify-center gap-3">
        <a href="https://discord.com/login" class="btn rounded-full border-0 bg-white px-7 text-neutral-950 hover:bg-white/90">
          ${icon("mail", "h-4 w-4")}
          Discord @intense.dev
        </a>
        <a href="https://github.com/intensed-dev" class="btn rounded-full border border-white/15 bg-white/10 px-7 text-white hover:bg-white/15">
          ${icon("code-2", "h-4 w-4")}
          GitHub
        </a>
      </div>
    </div>
  </section>
`;

const FooterComponent = `
  <footer class="bg-neutral-950 px-5 pb-10 text-white/45 md:px-8">
    <div class="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p>© ${new Date().getFullYear()} Intensed Dev</p>
      <p>HTML · CSS · JavaScript · GitHub Pages</p>
    </div>
  </footer>
`;
