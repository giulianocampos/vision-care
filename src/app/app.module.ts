import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './routes/home/home.module';

import { AppComponent } from './app.component';
import { MainControllerComponent } from './components/main-controller/main-controller.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AssetsModule } from './routes/assets/assets.module';

@NgModule({
  declarations: [
    AppComponent,
    MainControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HomeModule,
    AssetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
