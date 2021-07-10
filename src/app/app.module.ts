import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './dumbComponents/counter/counter.component';
import { DownComponent } from './layout/pages/down/down.component';
import { ResetComponent } from './layout/pages/reset/reset.component';
import { UpComponent } from './layout/pages/up/up.component';

@NgModule({
  declarations: [
    AppComponent,
    UpComponent,
    DownComponent,
    ResetComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
