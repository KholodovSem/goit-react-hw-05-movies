import { useState } from 'react';
import style from './MovieSection.module.css';
import Form from './Form';
import MoviesByNameGallery from './MoviesByNameGallery';

function MoviesSection() {
  const [searchRequire, setSearchRequire] = useState('');


  const handleSubmit = (require) => {
    setSearchRequire(require);
  };

  return (
    <section className={style.movieSection}>
      <Form onSubmit={handleSubmit} />
      <MoviesByNameGallery require={searchRequire} />
    </section>
  );
}

export default MoviesSection;
