import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import type { Film, filmParams, Favourite } from '../../types';
import { getSingleFilm } from '../../shared/api/getSingleFilm';
import { imagesFilms } from '../../helpers/images';
import Loader from '../../shared/components/Loader';
import styled from 'styled-components';

import DetailsContent from './DetailsContent';
import DetailsFavourites from './DetailsFavourites';

const Details: React.FC = (): JSX.Element => {
    const { id } = useParams<filmParams>();

    const [loading, setLoading] = useState<Boolean>(true);
    const [filmDetail, setFilmDetails] = useState<Film>({
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
        const film: Film = await getSingleFilm(id || '');
        setFilmDetails(film);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        const imgFilm: Favourite[] = imagesFilms.filter(
            (img) => String(img.id) === id
        );
        setImage(imgFilm[0].image);
        getFilm();
        return () => {
            setLoading(true);
        };
    }, [id, getFilm]);

    const DetailBackground = styled.div`
        width: 80%;
        position: relative;
        isolation: isolate;
        padding-bottom: 50px;
        margin-left: 20%;

        &:after {
            content: '';
            position: absolute;
            background: white;
            inset: 0;
            z-index: -1;
            opacity: 0.15;
            background-image: url(${image});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        @media only screen and (max-width: 768px) {
            width: 100%;
            margin-left: 0;
        }
    `;

    if (loading) return <Loader />;

    return (
        <DetailBackground>
            <h1 className='details__title'>{filmDetail.title}</h1>
            <DetailsFavourites idFilm={id!} />
            <DetailsContent film={filmDetail} />
        </DetailBackground>
    );
};

export default Details;
