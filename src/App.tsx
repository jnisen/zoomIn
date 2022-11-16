import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';

const URL_API = 'https://swapi.dev/api/films'

function App() {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)

  const getFilms = async () => {
    const json = await axios(URL_API)
    const response = await json
    const data = response.data.results
    setFilms(data)
  }
  

  useEffect(() => {
    getFilms()
    setLoading(false)
  }, [])


  if (loading)  return <p>Loading</p>;

  return (
    <pre>
    {JSON.stringify(films, null, 2)}
   </pre>
  );
}

export default App;
