import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-digimon',
  templateUrl: './card-digimon.component.html',
  styleUrls: ['./card-digimon.component.css']
})
export class CardDigimonComponent implements OnInit {

  @Input()
  card !: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.card);
    console.log('this');
  }

}