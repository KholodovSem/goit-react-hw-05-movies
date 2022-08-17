import { useEffect, useState } from 'react';
import style from './TrandingFilms.module.css';
import { getTrendingFilms } from '../../helpers/FetchAPI';
import FilmsGallery from '../common/FilmsGallery';


function TrendingFilmsSection() {
  const [films, setFilms] = useState();

  useEffect(() => {
    getTrendingFilms().then(({ data }) => setFilms(data.results));
  }, []);

  return (
    <section className={style.trendingFilmsSection}>
      <FilmsGallery films={films} homePath="true"/>
    </section>
  );
}

export default TrendingFilmsSection;
