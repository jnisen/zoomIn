import notFound from '../shared/images/not-found.png';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='not-found'>
            <img src={notFound} alt='not found page' width={400} />
            <p style={{ textAlign: 'center' }}>
                <Link to='/'>Go to Home </Link>
            </p>
        </div>
    );
}
