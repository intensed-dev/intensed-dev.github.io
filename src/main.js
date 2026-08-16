const footer = `
<footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
    <h6 class="footer-title">Sites</h6>
    <a class="link link-hover">Home</a>
    <a class="link link-hover">Links</a>
    <a class="link link-hover">???</a>
    <a class="link link-hover">???</a>
  </nav>
  <nav>
    <h6 class="footer-title">Projects</h6>
    <a class="link link-hover">???</a>
    <a class="link link-hover">???</a>
    <a class="link link-hover">???</a>
    <a class="link link-hover">???</a>
  </nav>
  <nav>
    <h6 class="footer-title">???</h6>
    <a class="link link-hover">???</a>
    <a class="link link-hover">???</a>
    <a class="link link-hover">???</a>
  </nav>
</footer>
<footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
  <aside class="grid-flow-col items-center">
    <i class="fa-solid fa-hashtag"></i>
    <p>
      Intensed-Dev
      <br />
      Made with ❤️ by myself.
    </p>
  </aside>
  <nav class="md:place-self-center md:justify-self-end">
    <div class="grid grid-flow-col gap-4">
      <a href="https://github.com/Intensed-Dev"><i class="fa-brands fa-github"></i></a>
      <a>
        
      </a>
      <a>
        
      </a>
    </div>
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

