const shell = document.getElementById("site-shell");

const tagTemplate = (tag) => `<span class="rounded-full border border-current/15 px-3 py-1 text-xs font-semibold">${tag}</span>`;

const renderNav = () => {
  const navLinks = document.querySelector("[data-nav-links]");
  navLinks.innerHTML = siteContent.nav
    .map((item) => `<a href="${item.href}" class="transition hover:text-neutral-950">${item.label}</a>`)
    .join("");
};

const renderHeroMetrics = () => {
  const metrics = document.querySelector("[data-hero-metrics]");
  metrics.innerHTML = siteContent.heroMetrics
    .map(
      (metric) => `
        <article class="reveal metric-card">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </article>
      `,
    )
    .join("");
};

const renderProjects = () => {
  const projects = document.querySelector("[data-projects]");
  projects.innerHTML = siteContent.projects
    .map(
      (project, index) => `
        <article class="reveal project-card project-card-${project.tone}" style="--delay:${index * 90}ms">
          <p class="text-sm font-semibold opacity-70">${project.kicker}</p>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="mt-auto reveal mt-9 flex flex-wrap items-center gap-3">
            <a href="${project.links.repo}" class="btn rounded-full border-0 bg-neutral-950 px-6 text-white hover:bg-neutral-800">
              ${icon("arrow-down-right", "h-4 w-4")}
              GitHub
            </a>
            <a href="${project.links.other.src}" class="btn btn-ghost rounded-full px-6 text-neutral-800">
              ${icon(project.links.other.icon, "h-4 w-4")}
              ${project.links.other.title}
            </a>
          </div>
          <div class="flex flex-wrap gap-2">${project.tags.map(tagTemplate).join("")}</div>
        </article>
      `,
    )
    .join("");
};

const renderServices = () => {
  const services = document.querySelector("[data-services]");
  services.innerHTML = siteContent.services
    .map(
      (service, index) => `
        <article class="reveal service-row" style="--delay:${index * 80}ms">
          <div class="service-icon">${icon(service.icon)}</div>
          <div>
            <h3>${service.title}</h3>
            <p>${service.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderStack = () => {
  const stack = document.querySelector("[data-stack]");
  stack.innerHTML = siteContent.stack
    .map((item) => `<span class="stack-chip">${item}</span>`)
    .join("");
};

const renderTimeline = () => {
  const timeline = document.querySelector("[data-timeline]");
  timeline.innerHTML = siteContent.timeline
    .map(
      (item, index) => `
        <article class="reveal timeline-card" style="--delay:${index * 90}ms">
          <span>${item.year}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
};

function loadComponents() {
  shell.innerHTML = [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    StudioComponent,
    StackComponent,
    ContactComponent,
    FooterComponent,
  ].join("");

  renderNav();
  renderHeroMetrics();
  renderProjects();
  renderServices();
  renderStack();
  renderTimeline();
}

loadComponents();
