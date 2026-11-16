// public/js/themeToggle.js に保存（拡張子は .js に）
export function initThemeToggle() {
  //デバッグ用
  // console.log("✅ initThemeToggle loaded");

  const toggleButton = document.getElementById('theme-toggle');
  const toggleCircle = document.getElementById('toggle-circle');

// ライト or ダークモードの切り替え
const setTheme = (mode, save = true) => {
  // 読み上げソフトにも今の状態を伝える（ボタン名は「ダークモード」、押されている＝ダーク）
  toggleButton?.setAttribute('aria-pressed', String(mode === 'dark'));
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    if (save) { try { localStorage.theme = 'dark'; } catch (e) {} }
    if (toggleCircle) {
      toggleCircle.classList.remove('translate-x-0');
      toggleCircle.classList.add('translate-x-7');
    }
  } else {
    document.documentElement.classList.remove('dark');
    if (save) { try { localStorage.theme = 'light'; } catch (e) {} }
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

  // 初期テーマは head のスクリプトで決まっているので、それに表示をそろえるだけ（保存はしない）
  setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light', false);
}
