import { Component } from '@angular/core';

import { Species }    from '../species';

@Component({
  selector: 'app-species-form',
  templateUrl: './species-form.component.html',
  styleUrls: ['./species-form.component.css']
})
export class SpeciesFormComponent {

  model = new Species('Pteridaceae', 'Ceratopteris', 'thalictroides')

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
