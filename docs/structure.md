# ディレクトリ構成（structure.md）

本プロジェクト「KAWAII PROFILE BOOK」は、以下のモノレポ構成で管理されています。

## ルート直下
- README.md: プロジェクト概要・セットアップ
- turbo.json: Turborepo 設定
- package.json: ルート依存
- docs/: ドキュメント一式

## apps/
- web/: Next.jsアプリ本体（PC/モバイル両対応）
- docs/: ドキュメント用Next.js（将来的な公開用）

## packages/
- ui/: 再利用可能なUIコンポーネント（Tailwind + Storybook）
- api/: サーバレス用エンドポイント定義
- core/: 会員証生成・認証、プロフィールデータ管理ロジック
- avatar/: 魔女アバターのロジック、three-vrm, TTS連携
- typescript-config/: tsconfig共有
- eslint-config/: ESLint共有

## docs/
- structure.md: ディレクトリ構成（このファイル）
- use-cases.md: ユースケース集
- personas.md: 想定ユーザー像
- CONTRIBUTING.md: 開発貢献ルール
- api-docs.md: API仕様書
- faq.md: よくある質問

---

この構成はプロジェクトの進行に合わせて随時アップデートされます。
