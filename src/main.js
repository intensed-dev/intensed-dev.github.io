function load() {
  document.body.innerHTML += `
<!-- Open the modal using ID.showModal() method -->
<dialog id="external_link" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">External Link</h3>
    <p class="py-4">Looks like you've clicked on an external link. Are you sure you want to open it?</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button class="btn btn-primary">Cancel</button>
  </form>
</dialog>
  `;
}

load();
