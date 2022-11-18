export interface Film {
    id: string;
    episode_id: number;
    title: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: Array<string>;
    planets: Array<string>;
    starships?: Array<string>;
    vehicles?: Array<string>;
    species?: Array<string>;
    created?: string;
    edited?: string;
    url?: string;
}

export interface FavouriteFilm {
    id: string;
    favorite: boolean;
}

export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
}
