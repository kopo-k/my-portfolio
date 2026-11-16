// 昼/夜の切り替え。スイッチは sakuga-vfx の <sakuga-toggle>（click ではなく change で拾う）
export function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');

  const setTheme = (mode, save = true) => {
    const dark = mode === 'dark';
    document.documentElement.classList.toggle('dark', dark);
    if (save) { try { localStorage.theme = mode; } catch (e) {} }
    // スイッチの見た目を今の状態にそろえる（change を呼び戻さないよう直接 checked を入れる）
    if (toggle && toggle.checked !== dark) toggle.checked = dark;
  };

  toggle?.addEventListener('change', () => {
    setTheme(toggle.checked ? 'dark' : 'light');
  });

  // 初期テーマは head のスクリプトで決まっている。表示をそろえるだけ（保存はしない）
  const dark = document.documentElement.classList.contains('dark');
  // カスタム要素の定義が届く前に checked を入れても消えないよう、定義を待ってから合わせる
  customElements.whenDefined('sakuga-toggle').then(() => setTheme(dark ? 'dark' : 'light', false));
  setTheme(dark ? 'dark' : 'light', false);
}
