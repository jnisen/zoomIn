import {useParams} from 'react-router-dom';
import {useEffect, useState, useCallback} from 'react'
import {Film} from '../types'
import {getSingleFilm} from '../shared/api/getSingleFilm'

type filmParams = {
  id: string
}

const Details: React.FC = ():JSX.Element => {
  const { id } = useParams<filmParams>();
  const [loading, setLoading] = useState<Boolean>(true)
  const [movieDetail, setMovieDetail] = useState<Film>({
      id: "",
      episode_id: 0,
      title: "",
      opening_crawl: "",
      director: "",
      producer: "",
      release_date: "",
      characters: [],
      planets: [],
  })


  const getFilm = useCallback(async () => {
    const film:any = await getSingleFilm(id)
      setMovieDetail(film)
      setLoading(false)
  },[id])

  useEffect(() => {
    getFilm();
    return () => {
      setLoading(true)
    };
  }, [id, getFilm])
  
  if (loading) return <p>Loading...</p>

  return (
    <div>
     <h1>{movieDetail.title}</h1>
     {movieDetail.characters.map((character:any)=>{
        return (
            <div key={character.name}>{character.name}</div>
          )
      })}
      <p>Planets</p>
      {movieDetail.planets.map((planets:any)=>{
        return (
            <div key={planets.name}>{planets.name}</div>
          )
      })}  
    </div>
  )
}

export default Details
