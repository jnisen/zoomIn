import axios from 'axios';
import {useEffect, useState} from 'react';
import {Film} from '../src/types'
import './App.css';
import TOC from './components/TOC'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './components/Details';

const URL_API = 'https://swapi.dev/api/films'


const addIdOnData = (data:Array<Film>) => {
  return  data = data.map((film:Film, index:number) => Object.assign({}, {id: index+1}, film))
}


function App() {
  const [films, setFilms] = useState<Array<Film>>([])
  const [loading, setLoading] = useState<Boolean>(true)

  const getFilms = async () => {
    const json = await axios(URL_API)
    const response = await json
    let data = response.data.results
    const dataWithId = addIdOnData(data)
    setFilms(dataWithId)
  }
  

  useEffect(() => {
    getFilms()
    setLoading(false)
  }, [])


  if (films.length === 0)  return <p>Loading</p>;

  return (
    <div className="separate">
   <Router>
      <TOC films={films}/>
    <Routes>
      <Route path="/film/:id" element = {<Details films={films}/>}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
