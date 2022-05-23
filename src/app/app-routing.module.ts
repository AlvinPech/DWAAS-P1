import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckBuilderComponent } from './components/deck-builder/deck-builder.component';
import { DeckSelectorComponent } from './components/deck-selector/deck-selector.component';
import { MagicCardComponent } from './components/magic-card/magic-card.component';
import { MagicCardsComponent } from './components/magic-cards/magic-cards.component';
import { MainComponent } from './components/main/main.component';
//import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';
import { SearchCardsComponent } from './components/search-cards/search-cards.component';
import { YugiohCardComponent } from './components/yugioh-card/yugioh-card.component';
import { YugiohCardsComponent } from './components/yugioh-cards/yugioh-cards.component';
import { DigimonCardComponent } from './components/digimon-card/digimon-card.component';
import { DigimonCardsComponent } from './components/digimon-cards/digimon-cards.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { AdminComponent } from './components/admin/admin.component';
import { IsAdminGuard } from './guards/is-admin.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'magic', component: MagicCardsComponent },
  { path: 'magic/:pagenumber', component: MagicCardsComponent },
  { path: 'magic/card/:card-name', component: MagicCardComponent },
  { path: 'pokemon', component: PokemonCardsComponent },
  { path: 'pokemon/:pagenumber', component: PokemonCardsComponent },
  { path: 'pokemon/card/:card-name', component: PokemonCardComponent },
  { path: 'yugioh', component: YugiohCardsComponent },
  { path: 'yugioh/:pagenumber', component: YugiohCardsComponent },
  { path: 'yugioh/card/:card-name', component: YugiohCardComponent },
  { path: 'digimon', component: DigimonCardsComponent },
  { path: 'digimon/card/:card-name', component: DigimonCardComponent },
  { path: 'deckselector', component: DeckSelectorComponent , canActivate: [IsAuthenticatedGuard],},
  { path: 'search', component: SearchCardsComponent , canActivate: [IsAuthenticatedGuard],},
  { path: 'builder/:cardType', component: DeckBuilderComponent , canActivate: [IsAuthenticatedGuard],},
  //{ path: '**', component: PageNotFoundComponent},
  {path: 'admin', component: AdminComponent, canActivate: [IsAuthenticatedGuard, IsAdminGuard],},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
