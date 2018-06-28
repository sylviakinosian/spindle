import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesFormComponent } from './species-form/species-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesComponent,
    SpeciesFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
