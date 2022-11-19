import { API_URL } from './API_URL';
import axios from 'axios';
import { Film, Planet, Character, FilmResponse } from '../../types';

export const getSingleFilm = async (id: string): Promise<Film> => {
    try {
        const response = await axios(`${API_URL}/${id}`);
        const data: FilmResponse = response.data;

        const charactersJson = data.characters.map(async (url: Character) => {
            const json = await axios(url);
            const response = await json;
            return response.data;
        });

        const planetsJson = data.planets.map(async (url: Planet) => {
            const json = await axios(url);
            const response = await json;
            return response.data;
        });

        const characters = await Promise.all(charactersJson);
        const planets = await Promise.all(planetsJson);

        const film = {
            id,
            episode_id: data.episode_id,
            title: data.title,
            opening_crawl: data.opening_crawl,
            director: data.director,
            producer: data.producer,
            release_date: data.release_date,
            characters,
            planets,
        };
        return film;
    } catch (err) {
        throw err;
    }
};
