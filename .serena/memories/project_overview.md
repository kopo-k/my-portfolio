# Portfolio Site プロジェクト概要

## 目的
個人ポートフォリオサイト（kopo-k / 大石大雅）

## 技術スタック
- **フレームワーク**: Astro 5.x
- **言語**: TypeScript / JavaScript
- **スタイリング**: Tailwind CSS 3.x
- **アイコン**: lucide-astro
- **デプロイ先**: GitHub Pages

## ディレクトリ構造
```
src/
├── pages/          # ページコンポーネント（index.astro）
├── layouts/        # レイアウトテンプレート（BaseLayout.astro）
├── components/     # 再利用可能なコンポーネント
│   ├── Header.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Experience.astro / Experience/
│   ├── Projects.astro / Projects/
│   ├── Skills.astro
│   └── Contact/ (ContactSection, ContactForm, ContactInfo)
└── styles/         # グローバルスタイル（global.css）
public/
└── images/         # 静的画像ファイル
```

## baseパス
`/my-portfolio/` に設定済み（astro.config.mjs）
