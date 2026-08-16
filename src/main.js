let external_link_url;

function load() {
  document.body.innerHTML += `
<!-- Open the modal using ID.showModal() method -->
<dialog id="external_link" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">External Link</h3>
    <p class="py-4">Looks like you've clicked on an external link.</p>
    <p class="py-4" id="external_link_url_shower"></p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>Cancel</button>
    <button class="btn-error" onclick="openExternalLink()">Open</button>
  </form>
</dialog>
  `;
}

function link(url) {
  external_link_url = url;
  external_link.showModal();
  const url_shower = document.getElementById("external_link_url_shower");
  url_shower.innerText = `Are you sure you want to open ${url}?`;
}

function openExternalLink() {
  window.location.href = external_link_url;
}

load();
