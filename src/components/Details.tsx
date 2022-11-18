import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { Film } from '../types';
import { getSingleFilm } from '../shared/api/getSingleFilm';
import { imagesFilms } from './images';

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
    const [image, setImage] = useState('');

    const getFilm = useCallback(async () => {
        const film: any = await getSingleFilm(id);
        setMovieDetail(film);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        const imgFilm: any = imagesFilms.filter((img) => String(img.id) === id);
        setImage(imgFilm[0].image);
        getFilm();
        return () => {
            setLoading(true);
        };
    }, [id, getFilm]);

    // const styles = {
    //     header: {
    //         backgroundImage: `url(${image})`,
    //         backgroundPosition: 'center',
    //         backgroundSize: 'cover',
    //         backgroundRepeat: 'no-repeat',
    //         height: '100vh',
    //     },
    // };

    if (loading) return <p>Loading...</p>;

    return (
        <div className='details'>
            <h1 className='details__title'>{movieDetail.title}</h1>
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
