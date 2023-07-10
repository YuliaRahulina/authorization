import { Component, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter();

  actionClick(){
    this.onClick.emit()
  }
}
