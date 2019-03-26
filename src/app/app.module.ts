import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatIconModule,
         MatListModule,
         MatCardModule,
         MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HelloComponent } from './hello/hello.component';
import { BoardComponent } from './board/board.component';
import {DataService} from './data/data.service';

import {AppRouters} from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    AppRouters
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
