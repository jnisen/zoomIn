import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import type { Film, FavouriteFilm } from '../types';
import { getSingleFilm } from '../shared/api/getSingleFilm';
import { imagesFilms } from './images';
import Loader from '../shared/components/Loader';

type filmParams = {
    id: string;
};

const Details: React.FC = (): JSX.Element => {
    const { id } = useParams<filmParams>();
    const [loading, setLoading] = useState<Boolean>(true);
    const [movieDetail, setMovieDetail] = useState<Film>({
        id: '',
        episode_id: 0,
        title: '',
        opening_crawl: '',
        director: '',
        producer: '',
        release_date: '',
        characters: [],
        planets: [],
    });

    const [favorites, setFavorites] = useState<Record<Film['id'], boolean>>(
        JSON.parse(localStorage.getItem('favorites') || '{}') //lazy initialization
    );

    const [image, setImage] = useState('');

    console.log(favorites[String(id)]);
    const getFilm = useCallback(async () => {
        const film: any = await getSingleFilm(id);
        setMovieDetail(film);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        const imgFilm: any = imagesFilms.filter((img) => String(img.id) === id);
        setImage(imgFilm[0].image);
        getFilm();
        return () => {
            setLoading(true);
        };
    }, [id, getFilm]);

    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            opacity: 0.6,
        },
    };

    const handleToggle = () => {
        const idS = String(id);
        setFavorites({
            ...favorites,
            [idS]: !favorites[idS],
        });
    };

    if (loading) return <Loader />;

    return (
        <div className='details' style={styles.header}>
            <h1 className='details__title'>
                {movieDetail.title}
                <i
                    className={`${
                        favorites[String(id)] ? 'fa fa-heart' : 'fa fa-heart-o'
                    }`}
                    aria-hidden='true'
                    onClick={handleToggle}
                    style={{ color: favorites[String(id)] ? 'red' : '' }}
                />
            </h1>
            <p className='details__director'>
                Director: {movieDetail.director}
            </p>
            <p className='details__director'>
                Producer: {movieDetail.producer}
            </p>
            <p className='details__description'>Description</p>
            <p className='details__abstract'>{movieDetail.opening_crawl}</p>

            <p className='details__description'>Characters</p>
            <div className='details__characters'>
                {movieDetail.characters.map((character: any) => {
                    return <div key={character.name}> - {character.name}</div>;
                })}
            </div>
            <p className='details__description'>Planets</p>
            <div className='details__characters'>
                {movieDetail.planets.map((planets: any) => {
                    return <div key={planets.name}> - {planets.name}</div>;
                })}
            </div>
        </div>
    );
};

export default Details;
