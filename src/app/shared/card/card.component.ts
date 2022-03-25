import { Component, Input } from '@angular/core';
import { PopularMoviesItems } from 'src/app/shared-class/shared-class';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input() item:PopularMoviesItems;

  constructor() { }
}
