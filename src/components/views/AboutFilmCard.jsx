import { lazy, useEffect, useState, Suspense } from 'react';
import { NavLink, useParams, Route, Routes } from 'react-router-dom';
import { getFilmById } from '../../helpers/FetchAPI';
import style from './AboutFilmCard.module.css';

const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

function AboutFilmCard() {
  const [film, setFilm] = useState();
  const { filmById } = useParams();

  useEffect(() => {
    getFilmById(filmById).then(({ data }) => setFilm(data));
  }, [filmById]);

  return (
    <>
      {film && <div className={style.filmCard}>
        <img src={IMAGE_PATH + film.poster_path} className={style.poster} alt='Film Poster'/>
        <ul>
          <li>
            <h2>{film.original_title}</h2>
          </li>
          <li>
            <p><span className={style.largeText}>User Score:</span> {film.vote_average}</p>
          </li>
          <li>
            <p className={style.largeText}>Overview</p>
          </li>
          <li>
            <p>{film.overview}</p>
          </li>
          <li>
            <p className={style.largeText}>Genres</p>
          </li>
          <li className={style.genresList}>
            {film.genres.map((genre) => {
              return (
                <p className={style.genre} key={genre.name}>{genre.name}</p>
              );
            })}
          </li>
        </ul>
      </div>}
      <hr />
      <ul className={style.additionalInfo}>
        <h2>Additional information</h2>
        <li>
          <NavLink to='cast' className={isActive =>
            (isActive.isActive ? style.activeLink : style.link)}>Cast</NavLink>
        </li>
        <li>
          <NavLink to='reviews' className={isActive =>
            (isActive.isActive ? style.activeLink : style.link)}>Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<h1 style={{ textAlign: 'center' }}>Загрузка</h1>}>
        <Routes>
          <Route path='reviews' element={<Reviews />} />
          <Route path='cast' element={<Cast />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default AboutFilmCard;
