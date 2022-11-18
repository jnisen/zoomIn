import { Link } from "react-router-dom";
import { useGlobalContext } from '../context/starWarsContext'

const TOC: React.FC = ():JSX.Element => {
        
        const {films} = useGlobalContext()


  return (
   <nav className="toc">
         <Link to={{pathname: `/`}}>Home</Link>
    <ul>
    {films.map((note:any) => (
            <li key = {note.id}>
                    <Link to={{pathname: `film/${note.id}`}}>{note.title}</Link>
            </li>
            ))}
    </ul>
    </nav>
  )
}

export default TOC
