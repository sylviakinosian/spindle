import { Component } from '@angular/core';

import { Species } from '../species';

@Component({
  selector: 'app-species-form',
  templateUrl: './species-form.component.html',
  styleUrls: ['./species-form.component.css']
})

export class SpeciesFormComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }
}
