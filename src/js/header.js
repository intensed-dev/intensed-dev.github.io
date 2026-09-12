export const HeaderTemplate = `
<div class="navbar bg-base-100/30 backdrop-blur-md fixed top-0">
  <div class="flex-none">
    <a class="btn btn-square btn-ghost" href="index.html">
      <i class="fa-brands fa-apple text-xl"></i>
    </a>
  </div>
  <div class="flex-1 md:hidden flex"></div>

  <div class="hidden md:flex flex-1 justify-center">
  
    <div class="megamenu max-sm:megamenu-vertical megamenu-full" id="products" popover>
      <span class="megamenu-active"></span>

      <button popovertarget="d1">Test</button>
      <div id="d1" popover>
        <div class="flex max-sm:flex-col items-start">
          <ul class="menu w-full md:menu-horizontal gap-20">
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Help me!</a></li>
                <li><a>Security</a></li>
                <li><a>Guidelines</a></li>
              </ul>
            </li>
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Help me!</a></li>
                <li><a>Security</a></li>
                <li><a>Guidelines</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <button popovertarget="d2">Test</button>
      <div id="d2" popover>
        <div class="flex max-sm:flex-col items-start">
          <ul class="menu w-full md:menu-horizontal gap-20">
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Help me!</a></li>
                <li><a>Security</a></li>
                <li><a>Guidelines</a></li>
              </ul>
            </li>
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Help me!</a></li>
                <li><a>Security</a></li>
                <li><a>Guidelines</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <button popovertarget="d3">Test</button>
      <div id="d3" popover>
        <div class="flex max-sm:flex-col items-start">
          <ul class="menu w-full md:menu-horizontal gap-20">
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Help me!</a></li>
                <li><a>Security</a></li>
                <li><a>Guidelines</a></li>
              </ul>
            </li>
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Help me!</a></li>
                <li><a>Security</a></li>
                <li><a>Guidelines</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>

  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <i class="fa-brands fa-codepen"></i>
    </button>
  </div>
</div>
`;