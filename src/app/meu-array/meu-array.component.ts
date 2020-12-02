import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-array',
  templateUrl: './meu-array.component.html',
  styleUrls: ['./meu-array.component.css']
})
export class MeuArrayComponent implements OnInit {

  array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

}
