import { useParams, useSearchParams } from 'react-router-dom';

export const getFilmOnSearchParams = (option) => {
  return searchParams.get(option)? searchParams.get(option) : '';
}
