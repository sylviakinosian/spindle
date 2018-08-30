import { Component } from '@angular/core';

export type EditorType = 'form' | 'table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'form';

  get showFormEditor() {
    return this.editor === 'form';
  }

  get showTable() {
    return this.editor === 'table';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
