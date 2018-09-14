import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

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

}
  
