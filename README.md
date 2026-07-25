# notte-tax.github.io

税理士法人notte 公式サイト(`https://notte-tax.com`)のソースリポジトリ。GitHub Pagesでホスティングしている。

## 構成

- フラットな静的HTML(`*.html`)がルート直下に並ぶ。テンプレートエンジン・ビルドステップは無い
- 各ページのヘッダー/フッターはページごとにインライン記述されている(共通化されていないため、全ページ共通要素の変更は複数ファイルへの編集が必要)
- `style.css`: サイト全体で共有するスタイルシート
- `images/`: 一部ページ専用の画像(トップ直下の画像はページごとの`*.jpg`)
- `CNAME`: GitHub Pagesのカスタムドメイン設定(`notte-tax.com`)
- `sitemap.xml`: 検索エンジン向けサイトマップ

## 更新方法

このリポジトリへの直接の`git commit`がそのまま本番反映の対象になる。通常の更新は以下のClaude Codeスキル経由で行う:

- **お知らせの追加**: `notte-news`スキル
- **既存ページの文言・数値の小修正**: `notte-hp-edit`スキル

手動で編集する場合も、対象ファイルを明示指定して`git add`し(`git add -A`は使わない)、変更内容が想定通りであることを`git status --short`で確認してからコミットすること。

## 補足

- このリポジトリの作業ツリーはGoogle Drive上(`H:\マイドライブ\50_Vault\Spaces_活動\areas\公式HP\`)に置かれているが、gitの実体(`objects`/`refs`)は`C:\Users\siwas\notte-git-data\notte-tax-github-io.git`にseparate-git-dir方式で分離配置されている。Google Drive同期による`.git`破損を防ぐための構成のため、作業ツリー直下の`.git`(ポインタファイル)を削除・上書きしないこと
- Firebase Hostingは過去に検討されたが本番では未使用(2026-07時点でGitHub Pagesのみが実際の本番)
