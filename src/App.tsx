import { useEffect, useState } from 'react';
import { starWarsContext } from '../src/context/starWarsContext';

import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Details from './components/Details';
import TOC from './components/TOC';
import Home from './components/Home';
import Loader from '../src/shared/components/Loader';

import { Film } from '../src/types';

import { getAllFilms } from '../src/shared/api/getAllFilms';

function App() {
    const [films, setFilms] = useState<Array<Film>>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const [favorites, setFavorites] = useState<Record<string, boolean>>(
        JSON.parse(localStorage.getItem('favorites') || '{}')
    );

    const getFilms = async () => {
        const allFilms = await getAllFilms();
        setFilms(allFilms);
    };

    useEffect(() => {
        getFilms();
        setLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const value = {
        films,
        favorites,
        setFavorites,
    };

    if (films.length === 0) return <Loader />;

    return (
        <starWarsContext.Provider value={value}>
            <div className='wrapper'>
                <Router>
                    <TOC />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/film/:id' element={<Details />} />
                    </Routes>
                </Router>
            </div>
        </starWarsContext.Provider>
    );
}

export default App;
