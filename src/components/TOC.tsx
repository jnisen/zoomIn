import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context/starWarsContext';
import type { Film } from '../types';

const TOC: React.FC = (): JSX.Element => {
    const { films, favorites } = useGlobalContext();

    let location = useLocation();

    if (location.pathname === '/404') {
        return <></>;
    }

    return (
        <div className='container__toc'>
            <header>
                <Link to={{ pathname: `/` }} className='container__toc__link'>
                    Home
                </Link>
            </header>
            <ul>
                {films.map((film: Film) => (
                    <li key={film.id}>
                        <span className='container__toc__episode'>
                            Episode: {film.episode_id}
                        </span>
                        <Link
                            to={{ pathname: `film/${film.id}` }}
                            className='container__toc__link'
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
