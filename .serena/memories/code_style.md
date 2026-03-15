# コーディング規約

## Astroコンポーネント
- `.astro` ファイルはコンポーネントベースで作成
- フロントマター（`---`）内でTypeScriptを使用
- propsは型定義を行う

## スタイリング
- Tailwind CSSのユーティリティクラスを優先使用
- カスタムカラー: `taiga-blue` (#3b82f6), `taiga-purple` (#8b5cf6)
- ダークモードは `class` 方式で対応（`dark:` プレフィックス）
- ニューモーフィズムデザインを採用

## 多言語対応
- `data-translate` 属性で翻訳対象を指定
- `data-translate-ja` / `data-translate-en` で言語別テキストを設定

## データ管理
- 経験データ: `src/components/Experience/experienceItems.js`
- プロジェクトデータ: `src/components/Projects/projectItems.js`
