import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  uname!: string;

  @Output()
  not:EventEmitter<string>=new EventEmitter<string>();
  passData(){
    this.not.emit("This msg coming from Child Component");
  }

}
