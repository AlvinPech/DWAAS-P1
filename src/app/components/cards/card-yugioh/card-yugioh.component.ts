import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/interface/yugioh/card';

@Component({
  selector: 'app-card',
  templateUrl: './card-yugioh.component.html',
  styleUrls: ['./card-yugioh.component.css']
})
export class CardYugiohComponent implements OnInit {

  @Input()
  card !: any;


  constructor() { }

  ngOnInit(): void {
    console.log(this.card.name);
    
  }

}
