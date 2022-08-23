import { useEffect, useState } from 'react';
import { getFilmsByName } from '../../helpers/FetchAPI';
import FilmsGallery from '../common/FilmsGallery';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

function MoviesByNameGallery({ require }) {
  const [films, setFilms] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("filmName") === null){
      return
    }

    getFilmsByName(searchParams.get("filmName")).then(({ data }) => setFilms(data.results));
  }, [searchParams])

  useEffect(() => {
    if (require === '') {
      return;
    }

    setSearchParams({ filmName: require })
    getFilmsByName(require).then(({ data }) => setFilms(data.results));

  }, [require, setSearchParams]);


  return (
    <FilmsGallery films={films} pathName='/movies' />
  );
}

MoviesByNameGallery.propTypes = {
  require: PropTypes.string,
};

export default MoviesByNameGallery;

