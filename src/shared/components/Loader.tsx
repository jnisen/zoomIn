import { ReactComponent as LoaderLogo } from '../icon/loader.svg';
import { useGlobalContext } from '../../context/starWarsContext';
function Loader() {
    const { films } = useGlobalContext();
    return (
        <div
            className={`${
                films.length === 0 ? 'loader' : 'loader loader-films'
            }`}
        >
            <LoaderLogo className='loader--logo' />
            <p className='loading--data'>Loading data..</p>
        </div>
    );
}

export default Loader;
