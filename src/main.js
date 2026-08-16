const footer = `
<footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>
      <span class="title">Intensed-Dev</span>
      <br />
      Made with ❤️ by myself.
    </p>
  </aside>
  <nav>
    <h6 class="footer-title title">Projects</h6>
    <a class="link link-hover">KeyframeCSS</a>
    <a class="link link-hover">Devinsbadges-Customs</a>
    <a class="link link-hover">???</a>
    <a class="link link-hover">???</a>
  </nav>
  <nav>
    <h6 class="footer-title title">Sites</h6>
    <a class="link link-hover">Home</a>
    <a class="link link-hover">Links</a>
    <a class="link link-hover">???</a>
    <a class="link link-hover">???</a>
  </nav>
  <nav>
    <h6 class="footer-title title">Social</h6>
    <a class="link link-hover">GitHub</a>
    <a class="link link-hover">Modrinth</a>
    <a class="link link-hover">NRC</a>
  </nav>
</footer>
`;

const header = `
<div class="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" class="peer hidden" type="checkbox" />
  <label for="navbar-1-toggle" class="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div class="collapse-title navbar">
    <div class="navbar-start">
      <label for="navbar-1-toggle" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button class="btn btn-ghost text-xl">Intensed-Dev</button>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><button>Item 1</button></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2 bg-base-100 w-40 z-1">
              <li><button>Submenu 1</button></li>
              <li><button>Submenu 2</button></li>
            </ul>
          </details>
        </li>
        <li><button>Item 3</button></li>
      </ul>
    </div>
    <div class="navbar-end">
      <label class="input">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" class="grow" placeholder="Search" />
        <kbd class="kbd kbd-sm">⌘</kbd>
        <kbd class="kbd kbd-sm">K</kbd>
      </label>
    </div>
  </div>

  <div class="collapse-content lg:hidden z-1">
    <ul class="menu">
      <li><button>Item 1</button></li>
      <li>
        <button>Parent</button>
        <ul>
          <li><button>Submenu 1</button></li>
          <li><button>Submenu 2</button></li>
        </ul>
      </li>
      <li><button>Item 3</button></li>
    </ul>
  </div>
</div>
`;


function load() {
  document.getElementById("footer").innerHTML = footer;
  document.getElementById("header").innerHTML = header;
}

load();

