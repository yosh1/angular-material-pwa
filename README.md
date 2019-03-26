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
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
```

BrowserAnimationModule,
[MatButtonModule](https://material.angular.io/components/button/overview)、[MatCheckboxModule](https://material.angular.io/components/checkbox/overview)をインポート。
ngModuleには

```
BrowserAnimationsModule,
MatButtonModule,
MatCheckboxModule,
MatSidenavModule,
MatToolbarModule,
MatIconModule,
MatListModule
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

### Angular Flexboxを追加

```
$ npm install @angular/flex-layout rxjs-compat @angular/compiler@7.2.10 ajv@^6.9.1
```

### Angular Flexboxを読み込み

### Normalize.cssをインストール

```
$ npm install normalize.css
```

### Normalize.cssを読み込み
`angular.json`の`styles`で`style.scss`を読み込んでいる部分の上に

```
"node_modules/normalize.css/normalize.css"
```
を追加。


### コンポーネントを作成

コンポーネント `HelloComponent` と `BoardComponent` をアプリケーションに定義する。

```
$ ng g c hello --module app.module
$ ng g c board --module app.module
```

なぜ `--module app.module` をつけるかというと、Angular CLIがターゲットのモジュールを自動的に識別できないようにする`material.module`という別のモジュールがあるため。

### Hello.component.html を編集

```
<div style="text-align:center">
  <h1>Angular Content Management System</h1>
  <p>
    This is a platform for technical writers to manage their blog post contents related to angular.
    <br> Click on Login to get Started!!!
  </p>
</div>
```