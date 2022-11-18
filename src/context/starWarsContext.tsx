import { createContext, useContext} from 'react';
import {Film} from '../types'
export type GlobalContent = {
    films: Array<Film>
  }
export const starWarsContext = createContext<GlobalContent>({
    films: []
})

export const useGlobalContext = () => useContext(starWarsContext)
