import { useEffect, useState } from 'react';
import { getFilmsByName } from '../../helpers/FetchAPI';
import FilmsGallery from '../common/FilmsGallery';
import PropTypes from 'prop-types';

function MoviesByNameGallery({ require }) {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    if (require === '') {
      return;
    }

    sessionStorage.setItem('require', require);
    getFilmsByName(require).then(({ data }) => setFilms(data.results));

  }, [require]);

  return (
    <FilmsGallery films={films} pathName="/movies"/>
  );
}

MoviesByNameGallery.propTypes = {
  require: PropTypes.string.isRequired
}

export default MoviesByNameGallery;

