import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMagicComponent } from './components/cards/card-magic/card-magic.component';
import { CardPokemonComponent } from './components/cards/card-pokemon/card-pokemon.component';
import { CardYugiohComponent } from './components/cards/card-yugioh/card-yugioh.component';
import { DeckBuilderComponent } from './components/deck-builder/deck-builder.component';
import { DeckSelectorComponent } from './components/deck-selector/deck-selector.component';
import { FormCardSearchComponent } from './components/form-card-search/form-card-search.component';
import { MagicCardComponent } from './components/magic-card/magic-card.component';
import { MagicCardsComponent } from './components/magic-cards/magic-cards.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';
import { SearchCardsComponent } from './components/search-cards/search-cards.component';
import { YugiohCardComponent } from './components/yugioh-card/yugioh-card.component';
import { YugiohCardsComponent } from './components/yugioh-cards/yugioh-cards.component';
import { DeckBuilderService } from './service/builder/deck-builder.service';
import { DeckSelectorService } from './service/deckselector/deck-selector.service';
import { PokemonCardsService } from './service/pokemon/pokemon-cards.service';
import { YugiohCardsService } from './service/yugioh/yugioh-cards.service';
import { DigimonCardComponent } from './components/digimon-card/digimon-card.component';
import { DigimonCardsComponent } from './components/digimon-cards/digimon-cards.component';
import { CardDigimonComponent } from './components/cards/card-digimon/card-digimon.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


//Second iteration
import { QRCodeModule } from 'angular2-qrcode';
import { MyDecksComponent } from './components/my-decks/my-decks.component';

@NgModule({
  declarations: [
    AppComponent,
    CardMagicComponent,
    CardPokemonComponent,
    CardYugiohComponent,
    CardDigimonComponent,
    DeckBuilderComponent,
    DeckSelectorComponent,
    FormCardSearchComponent,
    MagicCardComponent,
    MagicCardsComponent,
    MainComponent,
    PaginationComponent,
    PokemonCardComponent,
    PokemonCardsComponent,
    SearchCardsComponent,
    YugiohCardComponent,
    YugiohCardsComponent,
    PageNotFoundComponent,
    DigimonCardComponent,
    DigimonCardsComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    MyDecksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    QRCodeModule,

  ],
  providers: [YugiohCardsService, PokemonCardsService, DeckSelectorService, DeckBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
