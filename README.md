# progLearning

## Description

- FW: Next.js
- CSS: tailwindCSS
- UI Library: Mantine UI
- DB 定義: `prisma/schema.prisma`

## Todo

- Font を next/font に変更
- Slack を使ったリアルタイムチャット機能
- 一時的なリンクを Slack に通知し Supabase の Realtime DB をつかってもいいかも
- Slack の Question を Supabase に保存
- Lessons での質問が Slack の Question に投稿される DB にも保存される
- Notion の PageId を登録したら普通にページになる仕組みを実装
- ローカルの環境では Docker で立ち上げた Postgres に接続するようにする

## Rules

- `pages/**`以外で`export default`は使わない
- Component は余白を持たない
- Component は`className`を受け取らない
- ユーザ情報はサーバーサイドで取得する
- フロントエンドでの DB 操作は RLS 付きの supabase
- バックエンドでの DB 操作は prisma
- 認証関連は Supabase の Helper を使う

## Stripe イベントの受け取り

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
