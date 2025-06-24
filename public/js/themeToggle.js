// public/js/themeToggle.js に保存（拡張子は .js に）
export function initThemeToggle() {
  //デバッグ用
  console.log("✅ initThemeToggle loaded");

  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;  // SVG省略
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

  const toggleButton = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const toggleCircle = document.getElementById('toggle-circle');

// ライト or ダークモードの切り替え
  const setTheme = (mode) => {
    // mode に 'dark' か 'light' を指定
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      // dark: クラスが適用
      localStorage.theme = 'dark';
      if (themeIcon) themeIcon.innerHTML = moonIcon;
      if (toggleCircle) toggleCircle.classList.add('translate-x-7');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      if (themeIcon) themeIcon.innerHTML = sunIcon;
      if (toggleCircle) toggleCircle.classList.remove('translate-x-7');
    }
  };
  // ダークモードかどうか
  toggleButton?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });

  //初期テーマの判定
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}
