# 開発貢献ルール（CONTRIBUTING.md）

## コントリビュートの流れ
1. Issueを立ててから作業を開始してください（Copilot CLI/gh CLI推奨）
2. ブランチは `feature/`, `fix/`, `docs/` など用途ごとに分けてください
3. PRは小さく分割し、CI（テスト・Lint）を通してからレビュー依頼
4. ドキュメント（README, structure.md等）は必ず最新化

## コーディング規約
- TypeScript + ESLint + Prettier 準拠
- UIはTailwind CSS、Storybookでドキュメント化
- テスト必須（Jest/Playwright）

## インフラ・CI/CD
- AWS CDKでIaC管理、GitHub ActionsでCI/CD
- シークレットはGitHub Secrets/AWS IAMで厳重管理

## AI・自動化
- Copilot CLI/gh CLIでIssue・PR自動化を推奨
- Claude CodeやDify連携ワークフローはYAML/JSONで管理

---

「魔法のように可愛い」体験を一緒に作りましょう！
