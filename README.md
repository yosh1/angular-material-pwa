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

###  Angular Materialをインストール

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
  <h1>Hi!</h1>
  <p>
    This is the HelloComponent!
  </p>
</div>
```

### ルートを作成

複数のコンポーネントにアクセスできるように、ルートを定義する必要がある。

`src/app` に `app.routes.ts` を作成し、

```
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'board', component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}
```

を追加する。

ここでは`HelloComponent`,`BoardComponent`を定義している。

これにより、`http://localhost:4200`にアクセスすると`HelloComponent`を表示し、`http://localhost:4200/board`にアクセスすると`BoardComponent`を表示する。

### `app.component.html` からコンポーネントへのリンクを追加

```
<mat-sidenav-container>
  <mat-sidenav  #sidenav role="navigation">
   <mat-nav-list>
    <a mat-list-item>
      <mat-icon class="icon">input</mat-icon>
      <span class="label">Login</span>
    </a>
    <a mat-list-item
        routerLink="/">
      <mat-icon class="icon">home</mat-icon>
        <span class="label">Home</span>
    </a>
    <a mat-list-item
      routerLink="/dashboard">
      <mat-icon class="icon">dashboard</mat-icon>
      <span class="label">Dashboard</span>
    </a>
    <a  mat-list-item
        type="button">
      <mat-icon class="icon">input</mat-icon>
      <span class="label">LogOut</span>
    </a>
    </mat-nav-list>
  </mat-sidenav>
  <mat-sidenav-content>
    <mat-toolbar color="primary">
     <div fxHide.gt-xs>
       <button mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
    </div>
     <div>
       <a routerLink="/">
          Material Blog
       </a>
     </div>
     <div fxFlex fxLayout fxLayoutAlign="flex-end"  fxHide.xs>
        <ul fxLayout fxLayoutGap="20px" class="navigation-items">
            <li>
                <a>
                  <mat-icon class="icon">input</mat-icon>
                  <span  class="label">Login</span>
                 </a>
            </li>
            <li>
              <a
                routerLink="/">
                  <mat-icon class="icon">home</mat-icon>
                  <span class="label">Home</span>
              </a>
            </li>
            <li>
                <a
                  routerLink="/dashboard">
                    <mat-icon class="icon">dashboard</mat-icon>
                    <span class="label">Dashboard</span>
                </a>
              </li>
            <li>
                <a>
                  <mat-icon class="icon">input</mat-icon>
                  <span class="label">LogOut</span>
                 </a>
            </li>
        </ul>
     </div>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  </mat-sidenav-content>
</mat-sidenav-container>
```