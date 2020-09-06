Overview

jsコードをtsコードに移植

## Description

1. eslint/prettierセットアップ
2. e2e/ビジュアル/スナップショットテストコード記述/実行

### テストをまとめて実行
```bash
yarn run test
yarn run test:all
```

### テストを一つずつ実行

```
npx jest ./spec/e2e.spec.js
npx jest ./spec/e2e_mock.spec.js
```

```bash
npx jest ./spec/visual.spec.js

# スナップショット更新
npx jest ./spec/e2e.spec.js --updateSnapshot
```
