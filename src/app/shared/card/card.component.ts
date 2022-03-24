import { Component, Input, OnInit } from '@angular/core';
import { PopularMoviesItems } from 'src/app/shared-class/shared-class';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item:PopularMoviesItems;

  constructor() { }

  ngOnInit(): void {
  }

}
