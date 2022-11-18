import { API_URL } from './API_URL';
import axios from 'axios';
export const getAllFilms = async () => {
    const json = await axios(API_URL);
    const response = await json;
    let data = response.data.results;
    data = data.map((film: any, index: number) =>
        Object.assign({}, { id: index + 1 }, film)
    );
    return data;
};
