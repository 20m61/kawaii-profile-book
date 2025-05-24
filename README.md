# kawaii-profile-book

**かわいくて、たのしくて、魔法みたいなプロフィール帳。**  
魔女カワとおしゃべりしながら、ときめく自分だけのプロフページや会員証、  
シール帳を作って、お友達と交換＆交流できるWebアプリです！

---

## ✨ なにができるの？

- 魔女カワとのチャットで自分のプロフィールを作成
- 顔写真をかわいくデコって、鬼カワ会員証を自動生成
- NFCやカメラで「かざすだけ」で本人認証！
- スマホからはサイン帳・シール帳が使えるよ
- お友達と“かわいい”を交換してもっと仲良くなれる！

---

## 📱 想定ユーザー

- 10〜20代のかわいいUIやデコ体験が大好きな女の子たち
- 本物のサイン帳みたいな体験をスマホで楽しみたい子
- 魔法・AI・シール・自己紹介が大好きなあなた！

---

## 🛠 使用技術スタック

| 分野 | 技術 |
|------|------|
| フロント | Next.js (App Router), React, Tailwind CSS |
| バックエンド | AWS Lambda, API Gateway, CDK |
| 会話AI | Dify（Claude/GPTなど） |
| 画像生成・特徴量 | Stable Diffusion, CLIP |
| 音声認識/合成 | Web Speech API, Amazon Polly |
| インフラ管理 | GitHub Actions, Turborepo, CDK |
| 認証方式 | 画像認識（特徴量ベース）、NFC連携 |

---

## 🚀 セットアップ手順

```bash
# 1. クローン
git clone https://github.com/20m61/kawaii-profile-book.git
cd kawaii-profile-book

# 2. 依存インストール
yarn install  # または npm install

# 3. 開発サーバ起動
yarn dev --filter=web
```

---

## 🌱 ライセンス・貢献

- このリポジトリは MIT ライセンスです。
- かわいい魔法を一緒に作りたいコントリビューター大歓迎！
  - 詳しくは [`CONTRIBUTING.md`](./CONTRIBUTING.md) をご覧ください！

---

## ✉️ お問い合わせ

プロジェクトに関するご質問やコラボのご相談は  
[GitHub Issues](https://github.com/20m61/kawaii-profile-book/issues) にてご連絡ください。

---

> “自分だけのかわいい魔法”、一緒につくりませんか？
