import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cards } from 'src/app/interface/pokemon/pokemon-cards';
import { PokemonCardsService } from 'src/app/service/pokemon/pokemon-cards.service';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit {


  isLoading = false;
  cardToSearch : string = "";
  cardsData !: Cards;
  currentPage !: number;

  constructor(
    private cardsService : PokemonCardsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
   }

  ngOnInit(): void {
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
       this.cardsData = response;
      },
      (error) => {
        alert('error' + error.statusNext);
      }
    );
  }

  move = (shift: number) => {
    this.router.navigate([`/pokemon/${this.currentPage + shift}`], {
      queryParams: { 
        card: this.cardToSearch,
      },
    });
  }

}
