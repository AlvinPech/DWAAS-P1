export enum DeckType {
    Pokemon = 'Pokemon',
    Yugioh = 'Yugioh',
    Magic = 'Magic',
    Digimon = 'Digimon',
}

export interface Card {
    id: string;
    img: string;
    desc: string;
    name: string;
}
export interface Deck {
    data: Array<Card>;
}
