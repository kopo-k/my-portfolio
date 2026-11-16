// sakuga-vfx に置き換えたあとの動作確認。
//   npm run preview を立ち上げてから  node scripts/check-sakuga.mjs
// 横スクロールの有無、ナビ・テーマ・絞り込み・経歴・動画・フォーム・モバイルメニューを順に触る。
import { chromium } from 'playwright';

const URL = process.env.CHECK_URL || 'http://localhost:4321/my-portfolio/';
const b = await chromium.launch();
const errs = [];
const mk = async (o) => {
  const p = await b.newPage(o);
  p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  return p;
};

for (const w of [320, 390, 430, 768, 1024, 1280, 1920]) {
  const p = await mk({ viewport: { width: w, height: 844 } });
  await p.goto(URL, { waitUntil: 'networkidle' }); await p.waitForTimeout(2600);
  const x = await p.evaluate(() => { window.scrollTo(400, 0); const v = window.scrollX; window.scrollTo(0, 0); return v; });
  console.log(`${w}px 横スクロール量 ${x}`);
  await p.close();
}

const p = await mk({ viewport: { width: 1280, height: 900 } });
await p.goto(URL, { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);

await p.locator('#nav-tabs').click({ position: { x: 400, y: 20 } }); await p.waitForTimeout(1600);
console.log('ナビ値', await p.evaluate(() => document.getElementById('nav-tabs').value));

await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(400);
const tb = await p.locator('#theme-toggle').boundingBox();
await p.mouse.click(tb.x + tb.width / 2, tb.y + tb.height / 2); await p.waitForTimeout(1100);
console.log('夜に切替', await p.evaluate(() => document.documentElement.classList.contains('dark')),
  '保存', await p.evaluate(() => localStorage.theme));
await p.mouse.click(tb.x + tb.width / 2, tb.y + tb.height / 2); await p.waitForTimeout(1100);
console.log('昼に戻す', await p.evaluate(() => !document.documentElement.classList.contains('dark')));

const f = p.locator('#project-filter'); await f.scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
const fb = await f.boundingBox();
await p.mouse.click(fb.x + fb.width * 0.88, fb.y + fb.height / 2); await p.waitForTimeout(1200);
console.log('絞り込み', await p.evaluate(() => document.getElementById('project-filter').value),
  '表示', await p.evaluate(() => [...document.querySelectorAll('.project-item')].filter((e) => !e.classList.contains('hidden')).length), '件');

const ex = p.locator('#exp-toggle'); await ex.scrollIntoViewIfNeeded(); await p.waitForTimeout(400);
const eb = await ex.boundingBox();
await p.mouse.click(eb.x + eb.width / 2, eb.y + eb.height / 2); await p.waitForTimeout(900);
console.log('経歴 展開', await p.evaluate(() => document.getElementById('exp-toggle').getAttribute('aria-expanded')));

const vo = p.locator('.video-open').first(); await vo.scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
await vo.click(); await p.waitForTimeout(900);
console.log('動画ダイアログ', await p.evaluate(() => document.getElementById('video-dialog').open));
await p.locator('#video-close').click(); await p.waitForTimeout(700);
console.log('閉じた', await p.evaluate(() => !document.getElementById('video-dialog').open));

await p.locator('#cf-name').scrollIntoViewIfNeeded(); await p.waitForTimeout(400);
await p.locator('#cf-submit').click(); await p.waitForTimeout(700);
console.log('空欄で送信 →', (await p.locator('#cf-status').textContent()).trim());
await p.locator('#cf-name').click(); await p.keyboard.type('テスト');
await p.locator('#cf-email').click(); await p.keyboard.type('ダメなやつ');
await p.locator('#cf-message').click(); await p.keyboard.type('本文');
await p.locator('#cf-submit').click(); await p.waitForTimeout(700);
console.log('メール不正 →', await p.evaluate(() => !document.getElementById('cf-email-error').classList.contains('hidden')) ? 'エラー表示あり' : '出ない');

const m = await mk({ viewport: { width: 390, height: 844 } });
await m.goto(URL, { waitUntil: 'networkidle' }); await m.waitForTimeout(2600);
await m.locator('#mobile-menu-button').click(); await m.waitForTimeout(500);
console.log('モバイルメニュー', await m.evaluate(() => document.getElementById('mobile-menu-button').getAttribute('aria-expanded')));
await m.locator('#mobile-menu-close').click(); await m.waitForTimeout(500);
console.log('閉じた', await m.evaluate(() => document.getElementById('mobile-menu-button').getAttribute('aria-expanded')));

console.log('--- エラー ---');
console.log(errs.length ? errs.join('\n') : 'なし');
await b.close();
