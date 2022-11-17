import axios from 'axios'
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react'
import {Character} from '../types'

type filmParams = {
  id: string
}

function Details(films:any) {
  const { id } = useParams<filmParams>();
  const [characters, setCharacters] = useState<Array<Character>>([])


  const getCharacter = async (film:any) => {
      const charactersFilm = await Promise.all(film[0].characters.map(async (film:any) => {
        const json = await axios(film)
        const response = await json
        return response.data
      }))
      setCharacters(charactersFilm)
  }

  useEffect(() => {
    const film = films.films.filter((film:any) => String(film.id) === id)
    getCharacter(film)
  }, [id])

  return (
    <div>
     {films.films.filter((film:any) => String(film.id) === id).map((film:any) => (
      <div key={film.id}>
         <h1>{film.title}</h1>
         <p>{film.opening_crawl}</p>
         <p>Episode: {film.episode_id}</p>
         <p>Director: {film.director}</p>
         <p>Producer: {film.producer}</p>
         <p>Release Date: {film.release_date}</p>
         <div className="grid"><h2>Characters</h2>
         {characters.map((character)=>{
  return (
    <div key={character.name}>{character.name}</div>
  )
})}</div>
      </div>
))}
</div>
  )
}

export default Details
