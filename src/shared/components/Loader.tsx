import { ReactComponent as LoaderLogo } from '../icon/loader.svg';

function Loader() {
    return (
        <div className='loader'>
            <LoaderLogo className='loader--logo' />
            <p className='loading--data'>Loading data..</p>
        </div>
    );
}

export default Loader;
