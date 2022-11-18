import axios from 'axios';
export const getDataProperties = async (prop: any) => {
    try {
        const resProperties = prop.map(async (url: any) => {
            const json = await axios(url);
            const response = await json;
            return response.data;
        });
        const properties = await Promise.all(resProperties);
        return properties;
    } catch (err) {
        console.error(err);
    }
};
