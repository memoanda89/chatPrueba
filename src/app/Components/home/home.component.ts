import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  User={
    name:''
  }
  constructor() { }

  //obtioene numero  random para adjunta un username generico
   getRandomInt= (max: number) =>{
    return Math.floor(Math.random() * Math.floor(max));
  }
  ngOnInit(): void {
    //genera el userName genrico
    this.User.name="User"+this.getRandomInt(10000);
  }

}
