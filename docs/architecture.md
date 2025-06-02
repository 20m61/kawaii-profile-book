# 🏗️ Kawaii Profile Book – システムアーキテクチャ設計

このドキュメントでは、「Kawaii Profile Book」における技術構成およびアーキテクチャ設計の全体像を整理します。会話体験とスマホ操作を融合したサービスの構築に向けて、各要素の関係性や使用技術を明確化します。

---

## 🎯 コンセプト設計

* 会話体験は PC / iPad 専用の「魔法の部屋」で提供（Dify × Claude）
* スマホではシール交換・プロフィール閲覧をスワイプやタップで直感的に操作可能
* AWSを活用したサーバレス構成 + CDKによるコード管理で運用性と拡張性を確保

---

## 🔧 システム構成図（全体フロー）

```mermaid
graph TD
  subgraph 会話体験（PC/iPad専用）
    User1[ユーザー] --> DifyChat[Dify Chat Flow]
    DifyChat -->|プロフィール生成| LambdaGen[Lambda: generateCard]
    LambdaGen --> Bedrock[Bedrock Nova Canvas]
    LambdaGen --> S3[S3: 画像保存]
    LambdaGen --> DynamoDB[DynamoDB: プロフィール保存]
  end

  subgraph モバイルUX（スマホ）
    User2[ユーザー] --> CameraUI[📷 カメラ認証画面]
    CameraUI --> LambdaVerify[Lambda: verifyCard]
    LambdaVerify --> Rekognition[Amazon Rekognition Custom Labels]
    LambdaVerify --> DynamoDB

    User2 --> SwipeUI[🧷 コレクション画面（スワイプUI）]
    SwipeUI --> S3
    SwipeUI --> DynamoDB
  end
```

---

## 🧱 使用技術スタック

| レイヤー        | 技術構成                              | 補足説明                      |
| -------------- | ------------------------------------ | ---------------------------- |
| フロントエンド   | Next.js, Tailwind CSS, Swiper.js    | スマホ向けUI（コレクション、交換） |
| 会話UI         | Dify + Claude + Bedrock Nova Canvas  | 魔法の部屋（PC/iPad）専用体験設計 |
| バックエンドAPI | AWS Lambda + API Gateway             | プロフィール生成／認証／交換処理等  |
| ストレージ      | Amazon S3, DynamoDB                  | 会員証画像とユーザーデータの保存    |
| 画像認証        | Amazon Rekognition Custom Labels     | テンプレートベースの画像分類認証    |
| インフラ        | AWS CDK + GitHub Actions             | インフラ管理、CI/CDの自動化       |

---

## 🔐 設計ポリシーと運用制約

| 要件                   | 対応方針                                                   |
| ---------------------- | --------------------------------------------------------- |
| 魔女との会話は大画面に限定 | User-Agent と画面幅でチャット画面へのアクセスを制御          |
| 個人を特定しない画像認証   | Nova Canvasによる画像生成＋Rekognitionで分類、顔認証は不使用 |
| 個人情報は保存しない      | 登録画像の保存は任意かつマスキング済、識別子はランダムID管理  |

---

## 📱 機能別マッピング

| 機能               | 使用技術                  | 対応画面              |
| ------------------ | ------------------------ | -------------------- |
| プロフィール作成    | Dify + Bedrock + Lambda  | 魔法の部屋（PC/iPad） |
| 会員証認証         | Lambda + Rekognition     | カメラ画面（スマホ）   |
| シール・プロフ閲覧  | S3 + DynamoDB + Next.js  | コレクション画面（スマホ） |
| シール交換処理     | Lambda + UI制御          | シール交換画面（スマホ） |

---