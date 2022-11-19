import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/starWarsContext';
import type { Film } from '../types';

const TOC: React.FC = (): JSX.Element => {
    const { films, favorites } = useGlobalContext();

    return (
        <div className='toc'>
            <header>
                <Link to={{ pathname: `/` }} className='toc__link'>
                    Home
                </Link>
            </header>
            <ul>
                {films.map((film: Film) => (
                    <li key={film.id}>
                        <span className='pepe'>Episode: {film.episode_id}</span>
                        <Link
                            to={{ pathname: `film/${film.id}` }}
                            className='toc__link'
                        >
                            <i
                                className={`${
                                    favorites[String(film.id)]
                                        ? 'fa fa-heart heart'
                                        : null
                                }`}
                                aria-hidden='true'
                                style={{
                                    color: favorites[String(film.id)]
                                        ? 'red'
                                        : '',
                                }}
                            />
                            {'    '} {film.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TOC;
