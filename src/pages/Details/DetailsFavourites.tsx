import React from 'react';

import { useGlobalContext } from '../../context/starWarsContext';

function DetailsFavourites(props: { idFilm: string }) {
    const { favorites, setFavorites } = useGlobalContext();

    const handleToggle = () => {
        const idS = String(props.idFilm);
        setFavorites({
            ...favorites,
            [idS]: !favorites[idS],
        });
    };
    return (
        <h4 style={{ textAlign: 'center' }}>
            Favourite Film:{' '}
            <i
                className={`${
                    favorites[String(props.idFilm)]
                        ? 'fa fa-heart heart'
                        : 'fa fa-heart-o heart'
                }`}
                aria-hidden='true'
                onClick={handleToggle}
                style={{ color: favorites[String(props.idFilm)] ? 'red' : '' }}
            />
        </h4>
    );
}

export default DetailsFavourites;
