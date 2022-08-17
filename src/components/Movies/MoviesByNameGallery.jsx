import { useEffect, useState } from 'react';
import { getFilmsByName } from '../../helpers/FetchAPI';
import FilmsGallery from '../common/FilmsGallery';

function MoviesByNameGallery({ require }) {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    if (require === '') {
      return;
    }

    getFilmsByName(require).then(({ data }) => setFilms(data.results));

  }, [require]);

  return (
    <FilmsGallery films={films} pathName="/movies"/>
  );
}

export default MoviesByNameGallery;
