import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';



@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule
  ],
  exports: [CountriesComponent]
})
export class CountriesManagerModule { }
