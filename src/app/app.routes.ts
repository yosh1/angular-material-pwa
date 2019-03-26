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