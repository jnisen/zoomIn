import { createContext, useContext } from 'react';
import type { Film } from '../types';
import React from 'react';

export type GlobalContent = {
    films: Array<Film>;
    favorites: Record<string, boolean>;
    setFavorites: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
};
export const starWarsContext = createContext<GlobalContent>({
    films: [],
    favorites: {},
    setFavorites: () => {},
});

export const useGlobalContext = () => useContext(starWarsContext);
