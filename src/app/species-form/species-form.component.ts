import { Component } from '@angular/core';

import { Species } from '../species';

@Component({
  selector: 'app-species-form',
  templateUrl: './species-form.component.html',
  styleUrls: ['./species-form.component.css']
})

export class SpeciesFormComponent {

  states = ['Idaho', 'Utah', 'Wyoming'];

  model = new Species(this.states[0], 'Cystopteridaceae', 'Cystopteris', 'fragilis', 'S. P. Kinosian');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newSpecies() {
  	this.model = new Species('', '', '', '', '');
   }

  }

