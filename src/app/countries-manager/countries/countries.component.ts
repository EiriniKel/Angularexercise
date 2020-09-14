import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  title = 'Countries list';
  countries : Country[];

  constructor(private countryService : CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }

}
