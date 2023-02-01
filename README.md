# progLearning

## Description

- FW: Next.js
- CSS: tailwindCSS
- UI Library: Mantine UI
- Auth & DB: Supabase
- DB 定義: Prisma（`prisma/schema.prisma`）
- Others: Stripe / Slack / Notion / Vercel / Docker / Axios / SWR / ~~Recoil~~ /
  Storybook / React Hook Form / Zod / ESlint / Prettier / Husky / lint-staged /

### 用語

- **User**...Supabase の Auth で管理されるユーザー
- **Account**...Supabase の DB で管理されるアカウント情報

### Rules

- `pages/**`以外で`export default`は使わない
- Component は外側に余白を持たない
- Component は`className`を受け取らない
- フロントエンドでの DB 操作は RLS 付きの supabase
- バックエンドでの DB 操作は prisma
- 認証関連は Supabase の Helper を使用する

## Todo

- Font を next/font に変更
- Slack を使ったリアルタイムチャット機能（一時的なリンクを Slack に通知し Supabase の Realtime DB をつかってもいいかも）
- Slack の Question を Supabase に保存
- Lessons での質問が Slack の Question に投稿される DB にも保存される
- Notion の PageId を登録したら普通にページになる仕組みを実装
- ローカルの環境では Docker で立ち上げた Postgres に接続するようにする
- 興味タグの DB を追加 自己紹介に使用できるように
- 自己紹介と目標の確認画面のち Slack に通知
- 目標は 1 ヶ月ごとに更新を促す（1 週間毎にも変更可能に）

## 操作手順など

### 環境構築

```sh
yarn install
```

DB の起動

※ Docker Desktop のインストールが必要

```sh
supabase start
```

勝手に Docker が立ち上がる

DB の停止

```sh
supabase stop
```

Supabase Studio URL: http://localhost:54323

### local での Stripe イベントの受け取り

```sh
stripe login
```

```sh
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

（`checkout.session.completed`イベントの場合）

```sh
stripe trigger checkout.session.completed
```

https://stripe.com/docs/stripe-cli/about-events

## 依存関係の説明

- dotenv-cli...prisma や supabase/config.toml で環境変数を読み込むために使用
