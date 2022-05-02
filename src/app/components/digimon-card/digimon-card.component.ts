import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Card_Data } from 'src/app/interface/digimon/digimon-card';
import { ActivatedRoute, Router } from '@angular/router';
import { DigimonCardsService } from 'src/app/service/digimon/digimon-cards.service';

@Component({
  selector: 'app-digimon-card',
  templateUrl: './digimon-card.component.html',
  styleUrls: ['./digimon-card.component.css']
})
export class DigimonCardComponent implements OnInit {

  isLoading = false;
  cardData !: Card_Data;
  
  constructor(
    private cardsService : DigimonCardsService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  async ngOnInit() {
    const cardName = this.route.snapshot.paramMap.get('card-name')!;
    console.log(cardName);
    
    this.isLoading = true;
    await this.cardsService.searchCard(cardName).then(
      async (response) => {
       this.cardData = response;
      },
      (error) => {
        console.log(error)
      }
    );
    this.isLoading = false;
  }

  back(): void {
    this.location.back()
  }

}
 