import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FieldComponent } from './field/field.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    FieldComponent,
    ButtonComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
