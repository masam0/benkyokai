# benkyokai

## 環境構築

### 各アプリケーションの開発環境構築

#### postgresql の GUI ツールをインストール

1. pgadmin をインストール https://www.pgadmin.org/

#### frontend, backend, graphql の初期設定

1. 各アプリケーションルートに移動する
2. パッケージをインストール `npm ci -d`

#### アプリケーション実行

1. プロジェクトルートで `docker-compose up -d`を実行
2. React と graphql の動作確認
   1. ブラウザを開き、 http://localhost:3000 にアクセスし、React が動作していることを確認する
   2. ブラウザを開き、 http://localhost:4000/api にアクセスし、graphql サーバーが動作していることを確認する
3. postgresql の動作確認
   1. pgAdmin を開く
   2. Servers を右クリック
   3. Register > Server を選択
   4. General タブの Name は任意の値に設定
   5. Connection Host name / address には "localhost"を入力
   6. password には postgres に設定したパスワードを入力
   7. Save をクリック

### Prettier の設定

自動整形ツール Prettier を利用するためには、VSCode の拡張機能をインストールする必要があります。

**手順**

1. VSCode の左側タブから"Extentions"を選択
2. 検索枠に"Prettier"と入力
3. 検索結果上位に現れる Prettier - Code formatter をインストール
4. VSCode を再起動する
