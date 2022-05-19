const tabs = document.querySelectorAll("[data-button]");
const tabContent = document.querySelectorAll("[data-w-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.add("big-button--activated");
    tabContent.forEach((content) => {
      content.classList.remove("active", "active1");
    });
    const target = document.querySelector(tab.dataset.button);
    target.classList.add("active");
    setTimeout(() => {
      target.classList.add("active1");
      tab.classList.remove("big-button--activated");
    }, 100);
  });
});

const revealClasses = document.querySelectorAll(".reveal");
window.addEventListener("scroll", reveal);

function reveal() {
  revealClasses.forEach((item) => {
    let windowHeight = window.innerHeight;
    let revealTop = item.getBoundingClientRect().top;
    let revealPoint = 25;

    if (revealTop < windowHeight - revealPoint) {
      item.classList.add("activeScroll");
    } else {
      // item.classList.remove("activeScroll");
    }
  });
}

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    console.log(button.dataset);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.modal-active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("modal-active");
  overlay.classList.add("active-overlay");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("modal-active");
  overlay.classList.remove("active-overlay");
}
