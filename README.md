# Angular PWA

---

## 手順
### Angularをグローバルインストール

```
$ npm install -g @angular/cli
```

### プロジェクトを作成

```
$ ng new {project_name} --routing
$ cd {project_name}
```

###  [Angular Material](https://material.angular.io/)をインストール

```
$ npm install --save @angular/material \
@angular/cdk \
@angular/animations
```

### Angular Materialをインポート

`./src/app/app.module.ts` に

```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
```

BrowserAnimationModule,
[MatButtonModule](https://material.angular.io/components/button/overview)、[MatCheckboxModule](https://material.angular.io/components/checkbox/overview)をインポート。
ngModuleには

```
BrowserAnimationsModule,
MatButtonModule,
MatCheckboxModule
```

を追加。

### CSSをインポート

`./src/styles.scss` に
```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

を追加。

[prebuilt-themes](https://material.angular.io/guide/theming#defining-a-custom-theme)から選ぶことも、自分でテーマをビルドすることもできる。

### [Hammer.js](http://hammerjs.github.io/) をインストール

```
$ npm install --save hammerjs
```

### Hammer.jsをインポート

これは `./src/app/app.module.ts` ではなく、 `./src/main.ts` に

```
import 'hammerjs';
```

を追加。

### マテリアルアイコンを読み込み

`./src/index.html` にMaterial IconをCDNで読み込む。

```:CSS
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
