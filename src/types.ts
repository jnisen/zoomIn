export interface Film {
    id?: string;
    episode_id: number | undefined;
    title: string | undefined;
    opening_crawl: string | undefined;
    director: string | undefined;
    producer: string | undefined;
    release_date: string;
    characters: Array<Character>;
    planets: Array<Planet>;
    starships?: Array<string>;
    vehicles?: Array<string>;
    species?: Array<string>;
}
export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export type filmParams = {
    id: string;
};

export interface Favourite {
    id: number;
    image: string;
}

export type FilmsResponse = {
    count: number;
    next: number | null;
    previos: number | null;
    results: FilmResponse[];
};

export type FilmResponse = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: Array<Character>;
    planets: Array<Planet>;
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
};
