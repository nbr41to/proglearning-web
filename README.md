# progLearning

## Description

FW: Next.js
CSS: tailwindCSS で作ったサイトです。
DB 定義: `prisma/schema.prisma`

## Todo

- Font を next/font に変更
- Slack を使ったリアルタイムチャット機能
- 一時的なリンクを Slack に通知し Supabase の Realtime DB をつかってもいいかも
- Slack の Question を Supabase に保存
- Notion の PageId を登録したら普通にページになる仕組みを実装

## Rules

- `pages/**`以外で`export default`は使わない
- Component は余白を持たない
- Component は`className`を受け取らない
- ユーザ情報はサーバーサイドで取得する
- フロントエンドでの DB 操作は supabase
- バックエンドでの DB 操作は prisma

## Stripe イベントの受け取り

```sh
stripe login
```

```sh
stripe listen --forward-to localhost:3000/api/webhook
```

（`checkout.session.completed`イベントの場合）

```sh
stripe trigger checkout.session.completed
```

https://stripe.com/docs/stripe-cli/about-events
