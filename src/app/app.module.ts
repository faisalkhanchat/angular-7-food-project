import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './modules/shared/shared.module';
import { LoaderModule } from './components/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoaderModule,
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
