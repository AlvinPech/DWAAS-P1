import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cards } from 'src/app/interface/digimon/digimon-cards';
// import { Card } from 'src/app/interface/digimon/digimon-card';
import { DigimonCardsService } from 'src/app/service/digimon/digimon-cards.service';

@Component({
  selector: 'app-digimon-cards',
  templateUrl: './digimon-cards.component.html',
  styleUrls: ['./digimon-cards.component.css']
})
export class DigimonCardsComponent implements OnInit {

 
  isLoading = false;
  cardToSearch : string = "";
  cardsData !: any;
  cardstest !: Array<any>;
  currentPage !: number;

  constructor(
    private cardsService : DigimonCardsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
   }

   ngOnInit(): void {
    this.cardstest = ['1', '2'];
    const page = this.route.snapshot.paramMap.get('pagenumber')!;
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.currentPage = parseInt(page) || 1;
        this.cardToSearch = params.card || '';
      }
    );
    
    this.isLoading = true;
    if(this.cardToSearch === ''){
     this.search(); 
    }
    else{
      this.searchByName();
    }
    this.isLoading = false;  
  }
  
    search = async () => {
      await this.cardsService.searchCards(this.currentPage).then(
        async (response) => {
          this.cardsData = response;
        },
        (error) => {
          alert('error' + error.statusNext);
        }
      );
    }
  
    searchByName = async () => {
      await this.cardsService.searchCardsByName(this.cardToSearch, this.currentPage).then(
        async (response) => {
        this.cardsData = {};
         this.cardsData.cards = response;
         console.log(this.cardsData);
        },
        (error) => {
          alert('error' + error.statusNext);
        }
      );
    }
}


