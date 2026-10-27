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

  // 画面の縦方向の中央付近にあるセクションを「今いる場所」とする。
  // （threshold で割合を見る方式だと、画面より何倍も長いセクションで一度も条件を満たさず、
  //   ハイライトが前のセクションのまま止まってしまうため）
  const setActive = (id) => {
    allLinks.forEach(link => {
      const on = link.dataset.section === id;
      link.classList.toggle("active", on);
      if (on) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, {
    threshold: 0,
    rootMargin: "-45% 0px -54% 0px"
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

  let hideTimer = null;
  function openMobileMenu() {
    clearTimeout(hideTimer);
    mobileMenu.classList.remove("invisible");
    // invisible を外してから動かす（スライドのアニメーションを効かせるため）
    requestAnimationFrame(() => {
      mobileMenu.classList.remove("translate-x-full", "pointer-events-none");
    });
    mobileMenuOverlay.classList.remove("opacity-0", "invisible", "pointer-events-none");
    document.body.style.overflow = "hidden";
    mobileMenuButton.setAttribute("aria-expanded", "true");

    hamburgerLines[0].style.transform = "rotate(45deg) translate(6px, 6px)";
    hamburgerLines[1].style.opacity = "0";
    hamburgerLines[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
    mobileMenuClose.focus();
  }

  function closeMobileMenu({ restoreFocus = true } = {}) {
    if (mobileMenuButton.getAttribute("aria-expanded") !== "true") return;
    mobileMenu.classList.add("translate-x-full", "pointer-events-none");
    mobileMenuOverlay.classList.add("opacity-0", "invisible", "pointer-events-none");
    document.body.style.overflow = "";
    mobileMenuButton.setAttribute("aria-expanded", "false");
    // スライドし終わってから完全に隠す（閉じている間に影が画面端に見えないように）
    hideTimer = setTimeout(() => mobileMenu.classList.add("invisible"), 300);

    hamburgerLines[0].style.transform = "";
    hamburgerLines[1].style.opacity = "";
    hamburgerLines[2].style.transform = "";
    if (restoreFocus) mobileMenuButton.focus();
  }

  mobileMenuButton.addEventListener("click", () => {
    if (mobileMenuButton.getAttribute("aria-expanded") === "true") closeMobileMenu();
    else openMobileMenu();
  });
  mobileMenuClose.addEventListener("click", () => closeMobileMenu());
  mobileMenuOverlay.addEventListener("click", () => closeMobileMenu());

  mobileLinks.forEach(link => {
    // リンク先へ移動するので、フォーカスはボタンに戻さない
    link.addEventListener("click", () => closeMobileMenu({ restoreFocus: false }));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeMobileMenu({ restoreFocus: false });
    }
  });
});
