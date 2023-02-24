# progLearning

## Overview

- FW: Next.js
- CSS FW: tailwindCSS
- UI Library: Mantine UI
- Auth & DB: Supabase
- DB 定義: `prisma/schema.prisma` に記載
- Others: Stripe / Slack / Notion / Vercel / Docker / Axios / SWR / ~~Recoil~~ / Rive /
  Storybook / React Hook Form / Zod / ESlint / Prettier / Husky / lint-staged / Jest / React Testing Library / Faker /

### Scripts

| no  | action               | script                            | note                                 |
| --- | -------------------- | --------------------------------- | ------------------------------------ |
| 1   | 依存関係の install   | yarn install                      |                                      |
| 2   | DB を起動            | yarn supabase-start               | Docker が起動する                    |
| 3   | DB を終了            | yarn supabase-stop                | DB の状態を保持して終了              |
| 4   | DB を終了して初期化  | yarn supabase-remove              | DB を初期化したいときに使用          |
| 5   | DB の table を作成   | yarn prisma db push               | DB に Table を作成                   |
| 6   | DB の seeds を作成   | yarn prisma db seed               | DB に Seeds を挿入                   |
| 7   | DB の migrate を更新 | yarn prisma migrate dev -n {name} | migrate の差分がある場合にそれを反映 |
| 8   | DB の migrate を確認 | yarn prisma migrate deploy        | migrate の差分がある場合にそれを反映 |
| 9   | Storybook の起動     | yarn storybook                    |                                      |
| 10  | test の実行          | yarn test                         |                                      |
| 11  | test の監視を実行    | yarn test --watch                 |                                      |

### 用語定義

- **User**...Supabase の Auth で管理されるユーザーを指す
- **Account**...Supabase の DB で管理されるユーザーを指す
- **Dev 環境**...develop ブランチの環境を指す

### Development Rules（※8 つ以上書かない）

- `export default` は必要でなければ使わない
- Component は`className`を受け取らない
- Component の外側には余白を作らない
- CRUD 処理はバックエンドで Prisma 使った DB 操作のみ
- Icon は[react-icons](https://react-icons.github.io/react-icons)から使用する

## 開発手順など

### 環境構築

1. `.env` ファイルの作成

   ```sh
   cp .env.sample .env
   ```

   `.env` の内容は Notion の Development > 環境変数のページのものを貼り付ける

2. Docker Desktop をインストール（※Docker が起動している状態であれば良い）

   Windows でうまく行かない場合は[こちら](https://www.notion.so/nobco/Windows-Docker-Desktop-bbf9906bb7eb4076ba792f1510a97d2c?pvs=4)を参考

3. 上記にある **Scripts** を 1 -> 2 -> 5 -> 6 の順に実行する
4. 依存関係の install

   ```sh
   yarn install
   ```

5. アプリを起動する

   ```sh
   yarn dev
   ```

備考

- Docker を停止したい場合は開発時は Scripts の 3.を再起動は 2.を
- ログインの不要な開発の場合は 2. 3. は不要

### Supabase Studio

Supabase Studio は ユーザ管理や DB の操作を行うためのツール

[http://localhost:54323](http://localhost:54323) からアクセス可能（環境構築の 4.の手順後）

### Storybook

Storybook はコンポーネントの確認やテストを行うためのツール

[http://localhost:6006](http://localhost:6006) からアクセス可能

Dev 環境は [https://proglearning-web-storybook.vercel.app/](https://proglearning-web-storybook.vercel.app/) に公開される

### DB の変更手順

1. `prisma/schema.prisma` に変更を加える
2. `yarn prisma db push` を実行する
3. 最後に`yarn prod-db-push` で本番環境の DB に反映する（`.env.production` が必要）
<!-- 3. `yarn prisma migrate dev -n {name}` を実行する -->

## その他の特記事項

- dotenv-cli...prisma や supabase/config.toml で環境変数を読み込むために使用
