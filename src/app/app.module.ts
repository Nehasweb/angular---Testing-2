import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalComponent } from './capital/capital.component';
import { PasswordComponent } from './password/password.component';
import { ArrayAddComponent } from './array-add/array-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalComponent,
    PasswordComponent,
    ArrayAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
