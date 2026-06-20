const nav = document.getElementById("nav");
const footer = document.getElementById("footer");

//const discord = "https://discord.gg/mszTMk84rX";
const discord = "discord.html";
const fontawesome = "https://fontawesome.com";
const mysite = "https://qq77le.mimo.run/index.html";
const keyframecss = "https://lyxlsj.mimo.run/index.html";

const home = "index.html";
const projects = "projects.html";
const projects_en = "404.html";
const projects_mysite = "404.html";
const echosmp = "echosmp.html";

const done = 26;

function load() {
  nav.innerHTML = `<div class="navbar bg-base-100 shadow-sm fixed top-0 left-0 z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <i class="fa-solid fa-bars"></i>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="${home}">Home</a></li>
        <li>
          <a href="${projects}">My Projects</a>
          <ul class="p-2">
            <li><a href="${projects_en}">Enchanted Numbers</a></li>
            <li><a href="${projects_mysite}">My Website</a></li>
          </ul>
        </li>
        <li><a href="${echosmp}">EchoSMP <span class="badge badge-soft badge-primary badge-xs">New!</span></a></li>
        <li></li>
        <li><a href="${discord}"><i class="fa-brands fa-discord"></i> Discord</a></li>
        <li><a href="${mysite}"><i class="fa-solid fa-globe"></i> Website</a></li>
        <li><a href="${keyframecss}"><i class="fa-solid fa-diamond"></i> KeyframeCSS</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="${home}">Intense</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="index.html">Home</a></li>
      <li>
        <details>
          <summary>My Projects</summary>
          <ul class="p-2 bg-base-100 w-40 z-1">
            <li><a href="${projects}">Visit all <i class="fa-solid fa-arrow-right"></i></a></li>
            <li><a href="${projects_en}">Enchanted Numbers</a></li>
            <li><a href="${projects_mysite}">My Website</a></li>
          </ul>
        </details>
      </li>
      <li><a href="${echosmp}">EchoSMP <span class="badge badge-soft badge-primary badge-xs">New!</span></a></li>
      <li></li>
      <li><details>
        <summary>Socials</summary>
        <ul class="p-2 bg-base-100 w-40 z-1">
          <li><a href="${discord}"><i class="fa-brands fa-discord"></i> Discord</a></li>
          <li><a href="${mysite}"><i class="fa-solid fa-globe"></i> Website</a></li>
          <li><a href="${keyframecss}"><i class="fa-solod fa-diamond"></i> KeyframeCSS</a></li>
        </ul>
      </details></li>
    </ul>

    
  </div>
  <div class="navbar-end">
    <a class="btn" href="${discord}">Join Discord <i class="fa-brands fa-discord"></i></a>
  </div>
</div>`;

  footer.innerHTML = `<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside>
    <i class="text-5xl fa-solid fa-hashtag"></i>
    <p>
      <span class="text-xl font-bold">Intense</span>
      <br />
      Icons provided by <a href="${fontawesome}" class="font-bold">FontAwesome</a>
    </p>
  </aside>
  <nav>
    <h6 class="footer-title">Socials</h6>
    <div class="grid grid-flow-col gap-4">
      <a href="${mysite}">
        <i class="text-xl fa-solid fa-globe"></i>
      </a>
      <a href="${discord}">
        <i class="text-xl fa-brands fa-discord"></i>
      </a>
      <a href="${keyframecss}">
        <i class="text-xl fa-solid fa-diamond"></i>
      </a>
    </div>

    </div>
  </nav>
</footer>`;
}

load();
