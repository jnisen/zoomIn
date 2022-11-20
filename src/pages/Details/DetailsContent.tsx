import type { Film, Character, Planet } from '../../types';

function FilmContent(props: { film: Film }): JSX.Element {
    return (
        <>
            <p className='container__details__director'>
                Director: {props.film.director}
            </p>
            <p className='container__details__producer'>
                Producer: {props.film.producer}
            </p>
            <span className='container__details__release_date'>
                Release Date: {props.film.release_date}
            </span>
            <p className='container__details__label'>Description</p>
            <p className='container__details__abstract'>
                {props.film.opening_crawl}
            </p>
            <p className='container__details__label'>Characters</p>
            <div className='container__details__characters'>
                {props.film.characters.map(
                    (character: Character, index: number) => {
                        return <div key={index}> - {character.name}</div>;
                    }
                )}
            </div>
            <p className='container__details__label'>Planets</p>
            <div className='container__details__planets'>
                {props.film.planets.map((planets: Planet, index: number) => {
                    return <div key={index}> - {planets.name}</div>;
                })}
            </div>
        </>
    );
}

export default FilmContent;
