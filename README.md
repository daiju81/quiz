Overview

jsコードをtsコードに移植

## Description

1. eslint/prettierセットアップ
2. e2eテストコード記述/実行

```
npx jest ./spec/e2e.spec.js
```

3. ビジュアルテストコード/実行

```bash
npx jest ./spec/visual.spec.js

# スナップショット更新
npx jest ./spec/e2e.spec.js --updateSnapshot
```