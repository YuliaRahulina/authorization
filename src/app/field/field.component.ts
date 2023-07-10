import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() placeholder = '';
  @Input() type = '';
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  handleChange(event: any) {
    const value = event.target.value
      this.valueChange.emit(value)
  }
}
