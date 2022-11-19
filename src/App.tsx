import { useEffect, useState } from 'react';
import { starWarsContext } from '../src/context/starWarsContext';

import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import Details from '../src/pages/Details/Details';
import TOC from './components/TOC';
import Home from './pages/Home';
import Loader from '../src/shared/components/Loader';
import NotFound from '../src/pages/NotFound';

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
                        <Route path='/404' element={<NotFound />} />
                        <Route
                            path='*'
                            element={<Navigate replace to='/404' />}
                        />
                    </Routes>
                </Router>
            </div>
        </starWarsContext.Provider>
    );
}

export default App;
