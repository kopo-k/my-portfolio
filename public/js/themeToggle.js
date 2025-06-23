// public/js/themeToggle.js に保存（拡張子は .js に）
export function initThemeToggle() {
  console.log("✅ initThemeToggle loaded");

  const sunIcon = `...`;  // SVG省略
  const moonIcon = `...`;

  const toggleButton = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const toggleCircle = document.getElementById('toggle-circle');

  const setTheme = (mode) => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
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

  toggleButton?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}
