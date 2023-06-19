import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'c';
  username:string="John smith"
  pass!: string;
  parentMethod(as: string){
    this.pass=as;
  }
}
