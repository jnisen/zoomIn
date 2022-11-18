import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/starWarsContext';

const TOC: React.FC = (): JSX.Element => {
    const { films } = useGlobalContext();

    return (
        <div className='toc'>
            <header>
                <Link to={{ pathname: `/` }} className='toc__link'>
                    Home
                </Link>
            </header>
            <ul>
                {films.map((note: any) => (
                    <li key={note.id}>
                        <span className='pepe'>Episode: {note.episode_id}</span>
                        <Link
                            to={{ pathname: `film/${note.id}` }}
                            className='toc__link'
                        >
                            {note.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TOC;
