import style from '../TrandingFilmsSection/TrandingFilms.module.css';
import { useParams, Link } from 'react-router-dom';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';


function FilmsGallery ({ films, homePath=false }) {

  return (
    <ul className={style.filmList}>
      {films && films.map((film) => {
        return (
          <li key={film.id}>
            <div>
              <img className={style.poster} src={IMAGE_PATH + film.poster_path} height='auto' />
              <Link to={homePath? `/movies/${film.id}` :`${film.id}`} className={style.filmTitle}>{film.original_title || film.original_name}</Link>
            </div>
          </li>
        );
      })}
    </ul>
  )
}

export default FilmsGallery;
