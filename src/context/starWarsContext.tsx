import { createContext, useContext } from 'react';
import { Film } from '../types';
import React from 'react';

export type GlobalContent = {
    films: Array<Film>;
    favorites: any;
    setFavorites: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
};
export const starWarsContext = createContext<GlobalContent>({
    films: [],
    favorites: {},
    setFavorites: () => {},
});

export const useGlobalContext = () => useContext(starWarsContext);
