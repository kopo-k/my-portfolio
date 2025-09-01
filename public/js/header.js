// public/js/header.js
// console.log("✅ header.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  // ナビゲーションのアクティブ状態管理
  const links = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const allLinks = [...links, ...mobileLinks];
  const sections = Array.from(links).map(link =>
    document.querySelector(`#${link.dataset.section}`)
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        allLinks.forEach(link => {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px"
  });

  sections.forEach(section => {
    if (section) observer.observe(section);
  });

  // モバイルメニューの制御
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");

  function openMobileMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenuOverlay.classList.remove("opacity-0", "invisible");
    document.body.style.overflow = "hidden";

    hamburgerLines[0].style.transform = "rotate(45deg) translate(6px, 6px)";
    hamburgerLines[1].style.opacity = "0";
    hamburgerLines[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
  }

  function closeMobileMenu() {
    mobileMenu.classList.add("translate-x-full");
    mobileMenuOverlay.classList.add("opacity-0", "invisible");
    document.body.style.overflow = "";

    hamburgerLines[0].style.transform = "";
    hamburgerLines[1].style.opacity = "";
    hamburgerLines[2].style.transform = "";
  }

  mobileMenuButton.addEventListener("click", openMobileMenu);
  mobileMenuClose.addEventListener("click", closeMobileMenu);
  mobileMenuOverlay.addEventListener("click", closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeMobileMenu();
    }
  });
});
