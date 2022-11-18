import starWars from '../shared/images/star-wars.png';

function Home() {
    return (
        <div className='container'>
            <h1 className='container__text'>Choose a film of your interest</h1>
            <h3 className='container__text'>May the Force be with you</h3>
            <img
                src={starWars}
                alt='star-wars'
                className='container__starWars'
            />
        </div>
    );
}

export default Home;
