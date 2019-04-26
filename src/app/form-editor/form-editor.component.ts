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
  titleAlert: string = 'This field is required';
  day: string= '';
  month: string= '';
  year: string= '';
  collector: string= '';
  party: string= '';
  country: string= '';
  state: string= '';
  locality: string= '';
  coord: string= '';
  datum: string= '';
  uncertainty: string= '';
  colArea: string= ''; 
  otherSp: string='';
  substrate: string= '';
  colNumber: string= '';
  family: string= '';
  genus: string= '';
  species: string= '';
  other: string= '';
  habitat: string= '';
  description: string='';
  notes: string='';
  success = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
          this.speciesForm = this.fb.group({
	  'day': [this.day, Validators.required],
          'month': [this.month, Validators.required],
          'year': [this.year, Validators.required],
          'collector': [this.collector, Validators.required],
          'party': [this.party],
          'country': [this.country],
          'state': [this.state],
          'locality': [this.locality, Validators.required],
	  'coord': [this.coord],
	  'datum': [this.datum],
	  'uncertainty': [this.uncertainty],
	  'colArea': [this.colArea],
          'habitat': [this.habitat], 
          'otherSp': [this.otherSp],
          'substrate': [this.substrate],	
          'info': this.fb.array([])
	})

  }

  get formInfo() {
       return this.speciesForm.get('info') as FormArray
  }

  addSpecies() {
       const speciesInfo = this.fb.group({ 
	  'colNumber' : [this.colNumber, Validators.required],
          'family' : [this.family],
	  'genus' : [this.genus],
	  'species' : [this.species],
	  'other' : [this.other],
	  'habitat' : [this.habitat],
	  'description' : [this.description],
	  'notes' : [this.notes]
       })
       
       this.formInfo.push(speciesInfo);
  }

  deleteSpecies(i) {
  	this.formInfo.removeAt(i);
  }

  onSubmit(){
        console.log(this.speciesForm.value);
	console.log(this.speciesForm);
	this.success = true;
  }

  goBack() {
        this.success = false;
  }

  goTo(i) {
  	this.formInfo.at(i);
  }

  exportCsv() {

        var options = {
              fieldSpearator: ',',
              showLabels: true, 
              headers: ["Day", "Month", "Year", "Collector", "Additional Collectors", "Country", "State", "Locality", "Coordinates", "Datum", "Uncertainty", "Collection Area", "Associated Species", "Substrate", "Collection Number", "Family", "Genus", "Species", "Sub-species or Variety", "Habitat", "Description", "Notes"]
        };

  	new Angular5Csv(this.speciesForm.value.info, 'herbarium_data', options)
  }

}
  
