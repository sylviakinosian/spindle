import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  speciesForm: FormGroup;
  post: any;
  flora: string= '';
  family: string= '';
  titleAlert:string = 'This field is required';
  genus: string= '';
  species: string= '';
  country: string= '';
  state: string= '';
  locality: string= '';
  coord: string= '';
  elevation: string='';
  ecology: string='';
  otherSp: string='';
  description: string='';
  voucher: string='';
  collector: string= '';
  party: string= '';
  colNumber: string= '';
  date: string= '';

  constructor(private fb: FormBuilder) {

	this.speciesForm = fb.group({
	  'flora' : [null, Validators.required],
	  'family' : [null, Validators.required],
	  'genus' : [null],
	  'species' : [null],
	  'country' : [null],
	  'state' : [null],
	  'locality' : [null],
	  'coord' : [null],
	  'elevation' : [null],
	  'ecology' : [null],
	  'otherSp' : [null],
	  'description' : [null],
	  'voucher': [null],
	  'collector' : [null],
	  'party' : [null],
	  'colNumber' : [null],
	  'date' : [null]
	})
  }
  
  addPost(post) {
    this.flora = post.flora;
    this.family = post.family;
    this.genus = post.genus;
    this.species = post.species;
    this.country = post.country;
    this.state = post.state;
    this.locality = post.locality;
    this.coord = post.coord;
    this.elevation = post.elevation;
    this.ecology = post.ecology;
    this.otherSp = post.otherSp;
    this.description = post.description;
    this.voucher = post.voucher;
    this.collector = post.collector;
    this.party = post.party;
    this.colNumber = post.colNumber;
    this.date = post.date;
  } 
 
}
