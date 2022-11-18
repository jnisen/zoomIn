import { API_URL } from './API_URL';
import axios from 'axios';
import { getDataProperties } from './getDataProperties';

export const getSingleFilm = async (id: any) => {
    try {
        const response = await axios(`${API_URL}/${id}`);
        const data = response.data;

        const characters = await getDataProperties(data.characters);
        const planets = await getDataProperties(data.planets);

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
        console.error(err);
    }
};
