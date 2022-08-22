import { useMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCredits } from '../../helpers/FetchAPI';
import style from './Rewievs.module.css';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

function Cast () {
  const [casts, setCasts] = useState([]);
  const { pathname } = useMatch('*');
  const filmId = parseInt(pathname.match(/\d+/));

  useEffect(() => {
    getCredits(filmId).then(({ data }) => setCasts(data.cast));
  }, [filmId]);

  return (
    <ul className={style.reviewList}>
      {casts && casts.map((cast) => {
        return (
          <li key={cast.id}>
            <img src={IMAGE_PATH + cast.profile_path} alt="actor"/>
            <p style={{fontWeight: 700}}>Actor Name:  {cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default Cast;
