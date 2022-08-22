import style from './Form.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';


function SearchForm ({onSubmit}) {
  const [searchRequire, setSearchRequire] = useState('');

  const handleChange = (e) => {
    const value = e.currentTarget.value;

    setSearchRequire(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(searchRequire);
  }

  return (
    <form onSubmit={handleSubmit} className={style.searchForm}>
      <input
        type='text'
        value={searchRequire}
        onChange={handleChange}
        className={style.searchInput}
        placeholder='What movie should I find?'
      />
      <button style={{cursor:'pointer', padding:3}}>Find</button>
    </form>
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchForm;

