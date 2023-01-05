# 概要

https://nextjs.org/

## ■ ファイル構成

- .next  
  npm run build の生成先
- pages  
  各ページのファイル。index.js が TOP。about.js で「/about」になる。
- public  
  静的ファイルの配置場所。画像など。
- styles
  CSS 格納。

## ■Vercel

https://next-js-sample-xi.vercel.app/

# メモ

## ■Sass

```
npm i -D sass
```

以下は Next.js の CSS ルール。

- 「import styles from "./〇〇.module.scss";」で読み込む。
- 「className={styles.test}」でクラス付与。（※実際にデベロッパーツールで表示されるクラス名は違うので注意。規則性あり）  
  ※className に複数のクラスを当てる場合。（そもそも推奨していない？）
  https://abillyz.com/moco/studies/454
- コンポーネントに SCSS を読み込ませる場合、「〇〇.module.scss」という名前にする。module つけないとエラーがです。  
  https://qiita.com/blanket11/items/2c3218a7c5b7de085a77

## ■Zero Config

## ■File-system Routing

## ■Built-in CSS Support
