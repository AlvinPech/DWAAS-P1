export interface Card {
    name: string;
    type: string;
    color: string;
    stage: string;
    digi_type: string;
    attribute: string;
    level: number;
    play_cost: number;
    evolution_cost: number;
    cardrarity: string;
    artist: string;
    dp: number;
    cardnumber: string;
    maineffect: string;
    soureeffect: string;
    set_name: string;
    card_sets: Array<{
        card_set: string;
    }>;
    image_url: string;

}

export interface Card_Data{
    data: {
        name: string;
        type: string;
        color: string;
        stage: string;
        digi_type: string;
        attribute: string;
        level: number;
        play_cost: number;
        evolution_cost: number;
        cardrarity: string;
        artist: string;
        dp: number;
        cardnumber: string;
        maineffect: string;
        soureeffect: string;
        set_name: string;
        card_sets: Array<{
            card_set: string;
        }>;
        image_url: string;
    }
}
