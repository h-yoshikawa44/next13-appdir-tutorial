# next13-appdir-tutorial
個人勉強用リポジトリ。

教材出典：[新しいNext.jsの入門 ─ App DirectoryによるWeb開発をハンズオンで理解しよう](https://github.com/h-yoshikawa44/next13-appdir-tutorial)

## 環境
- TypeScript：5.1.6
- Node.js：18.15.0
- Next.js：13.4.19

## 環境構築
ライブラリインストール
```bash
npm install
```

DB マイグレーション
```bash
npx prisma migrate dev --name init
```

seed データ投入
```bash
npx prisma db seed
```

## 開発環境立ち上げ
```bash
npm run dev
```
