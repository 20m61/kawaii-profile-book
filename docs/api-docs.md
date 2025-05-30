# API仕様書（api-docs.md）

## 会員証API
- `POST /api/membership-card`
  - 顔画像アップロード → 特徴量抽出・暗号化トークン生成
  - レスポンス：会員証画像URL、認証トークン

- `POST /api/verify-card`
  - 会員証画像＋顔画像で認証
  - レスポンス：認証結果（成功/失敗）、魔女アバターの音声メッセージ

## プロフィール帳API
- `GET /api/profile/:userId`
  - プロフィールデータ取得
- `POST /api/profile`
  - プロフィール新規作成・更新

## シールAPI
- `POST /api/sticker`
  - シール生成
- `POST /api/exchange`
  - シール交換申請

---

- 認証はJWTまたは画像特徴量トークンで実施
- 全APIはAWS Lambda + API Gatewayでサーバレス提供
- レイテンシ最小化のためエッジ最適化（CloudFront等）

※詳細なリクエスト/レスポンス例は随時追記
