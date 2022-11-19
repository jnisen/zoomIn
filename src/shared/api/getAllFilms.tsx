import { API_URL } from './API_URL';
import axios from 'axios';
import type { Film, FilmsResponse } from '../../types';

export const getAllFilms = async (): Promise<Film[]> => {
    try {
        const json = await axios(API_URL);
        const response = await json;
        const data: FilmsResponse = response.data;
        const dataWithId = data.results.map((film: Film, index: number) =>
            Object.assign({}, { id: index + 1 }, film)
        );
        return dataWithId;
    } catch (err) {
        throw err;
    }
};
