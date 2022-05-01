import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card_Data } from 'src/app/interface/digimon/digimon-card';
import { Cards } from 'src/app/interface/digimon/digimon-cards';

@Injectable({
  providedIn: 'root'
})
export class DigimonCardsService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  searchCards = (page: number): Promise<Cards> => {
    let promise = new Promise<Cards>((resolve, reject) => {

      this.http
        .get('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc')
        .toPromise()
        .then(
          (response) => {
            resolve(response as Cards);
          },
          (error) => {
            reject(error);
          }
        );
    });
    return promise;
  };

  searchCard = (cardName: string): Promise<Card_Data> => {
    let promise = new Promise<Card_Data>((resolve, reject) => {

      this.http
        .get('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc')
        .toPromise()
        .then(
          (response) => {
            resolve(response as Card_Data);
          },
          (error) => {
            reject(error);
          }
        );
    });
    return promise;
  };

  searchCardsByName = (name: string, page: number): Promise<Cards> => {

    console.log(name);

    let promise = new Promise<Cards>((resolve, reject) => {

      this.http
        .get('https://digimoncard.io/api-public/search.php?n=' + name)
        .toPromise()
        .then(
          (response) => {
            resolve(response as Cards);
          },
          (error) => {
            reject(error);
          }
        );
    });
    return promise;
  };
}
