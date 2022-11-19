import React from 'react';
import type { Film, Character, Planet } from '../../types';

function FilmContent(props: { film: Film }): JSX.Element {
    return (
        <>
            <p className='details__director'>Director: {props.film.director}</p>
            <p className='details__director'>Producer: {props.film.producer}</p>
            <span className='details__director'>
                Release Date: {props.film.release_date}
            </span>
            <p className='details__description'>Description</p>
            <p className='details__abstract'>{props.film.opening_crawl}</p>
            <p className='details__description'>Characters</p>
            <div className='details__characters'>
                {props.film.characters.map(
                    (character: Character, index: number) => {
                        return <div key={index}> - {character.name}</div>;
                    }
                )}
            </div>
            <p className='details__description'>Planets</p>
            <div className='details__characters'>
                {props.film.planets.map((planets: Planet, index: number) => {
                    return <div key={index}> - {planets.name}</div>;
                })}
            </div>
        </>
    );
}

export default FilmContent;
