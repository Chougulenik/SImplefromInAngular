import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-simple-from',
  templateUrl: './simple-from.component.html',
  styleUrls: ['./simple-from.component.css']
})
export class SimpleFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getValue(value:any) {
    console.log(value);
  }

}
