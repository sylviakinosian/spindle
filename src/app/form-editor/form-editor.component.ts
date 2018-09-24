import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

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
  success = false;

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
       const speciesInfos = this.fb.group({
          'family' : [this.family],
	  'genus' : [this.genus, Validators.required],
	  'species' : [this.species],
	  'other' : [this.other],
	  'country' : [this.country],
	  'state' : [this.state],
	  'locality' : [this.locality, Validators.required],
	  'coord' : [this.coord],
	  'elevation' : [this.elevation],
	  'ecology' : [this.ecology],
	  'otherSp' : [this.otherSp],
	  'description' : [this.description],
	  'voucher': [this.voucher],
	  'collector' : [this.collector, Validators.required],
	  'party' : [this.party],
	  'colNumber' : [this.colNumber, Validators.required],
	  'date' : [this.date, Validators.required]
       })
       
       this.formInfo.push(speciesInfos);
  }

  deleteSpecies(i) {
  	this.formInfo.removeAt(i);
  }

  onSubmit(){
        console.log(this.speciesForm.value);
	this.success = true;
  }

  goBack() {
        this.success = false;
  }

  goTo(i) {
  	this.formInfo.at(i);
  }

  exportCsv() {
  	new Angular5Csv(this.speciesForm, 'herbarium_data')
  }

}
  
