import { Link } from "react-router-dom";
import {Film} from '../../src/types';

function TOC(films:any) {
  return (
   <nav className="toc">
    <ul>
    {films.films.map((note:any) => (
            <li key = {note.id}>
                    <Link to={{pathname: `film/${note.id}`}}>{note.title}</Link>
            </li>
            ))}
    </ul>
    </nav>
  )
}

export default TOC
