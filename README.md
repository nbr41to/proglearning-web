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

### Scripts

| no  | do                   | script                  | note              |
| --- | -------------------- | ----------------------- | ----------------- |
| 1   | 依存関係の install   | yarn install            |                   |
| 2   | DB を起動            | yarn supabase-start     | Docker が起動する |
| 3   | DB を終了            | yarn supabase-stop      |                   |
| 4   | DB を終了して初期化  | yarn supabase-remove    |                   |
| 5   | DB の table を作成   | yarn prisma db push     |                   |
| 6   | DB の seeds を作成   | yarn prisma db seed     |                   |
| 7   | DB の migrate を作成 | yarn prisma migrate dev |                   |

### Rules

- `pages/**`以外で`export default`は使わない
- Component は外側に余白を持たない
- Component は`className`を受け取らない
- フロントエンドでの DB 操作は RLS 付きの supabase
- バックエンドでの DB 操作は prisma
- 認証関連は Supabase の Helper を使用する
- Icon は[react-icons](https://react-icons.github.io/react-icons)から使用する

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

1. `.env`ファイルを用意する
2. **Scripts** を 1 -> 2 -> 5 -> 6 の順に実行する

Supabase Studio URL: http://localhost:54323

### local での Stripe イベントの受け取り

Google ログインで新規作成したアカウントなどで検証する

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
