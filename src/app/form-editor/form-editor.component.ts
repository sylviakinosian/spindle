import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})

export class FormEditorComponent implements OnInit {

  speciesForm: FormGroup;
  post: any;
  titleAlert:string = 'This field is required';
  flora: string= '';
  family: string= '';
  genus: string= '';
  species: string= '';
  other: string= '';
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
	this.speciesForm = this.fb.group({
	  'flora': [null, Validators.required],
          'info': this.fb.array([])
	})

  }

  get formInfo() {
       return this.speciesForm.get('info') as FormArray
  }

  addSpecies() {
       const speciesInfo = this.fb.group({
          'family' : [null],
	  'genus' : [null, Validators.required],
	  'species' : [null],
	  'other' : [null],
	  'country' : [null],
	  'state' : [null],
	  'locality' : [null, Validators.required],
	  'coord' : [null],
	  'elevation' : [null],
	  'ecology' : [null],
	  'otherSp' : [null],
	  'description' : [null],
	  'voucher': [null],
	  'collector' : [null, Validators.required],
	  'party' : [null],
	  'colNumber' : [null, Validators.required],
	  'date' : [null, Validators.required]
       })
       
       this.formInfo.push(speciesInfo);
  }

  deleteSpecies(i) {
  	this.formInfo.removeAt(i)
  }

  addPost(post){
    this.flora = post.flora;
    this.family = post.family;
    this.genus = post.genus;
    this.species = post.species;
    this.other = post.other;
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
  
