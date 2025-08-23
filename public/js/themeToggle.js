// public/js/themeToggle.js に保存（拡張子は .js に）
export function initThemeToggle() {
  //デバッグ用
  // console.log("✅ initThemeToggle loaded");

  const toggleButton = document.getElementById('theme-toggle');
  const toggleCircle = document.getElementById('toggle-circle');

// ライト or ダークモードの切り替え
const setTheme = (mode) => {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    if (toggleCircle) {
      toggleCircle.classList.remove('translate-x-0');
      toggleCircle.classList.add('translate-x-7');
    }
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    if (toggleCircle) {
      toggleCircle.classList.remove('translate-x-7');
      toggleCircle.classList.add('translate-x-0');
    }
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
