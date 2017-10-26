import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { ExternalDefensesModule } from './external-defenses/external-defenses.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    InternalDefensesModule,
    ExternalDefensesModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
