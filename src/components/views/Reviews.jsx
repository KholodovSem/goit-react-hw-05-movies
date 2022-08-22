import { useMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../../helpers/FetchAPI';
import style from './Rewievs.module.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { pathname } = useMatch('*');
  const filmId = parseInt(pathname.match(/\d+/));

  useEffect(() => {
    getReviews(filmId).then(({data}) => setReviews(data.results));
  }, [filmId]);

  return (
    <ul className={style.reviewList}>
      {reviews && reviews.map((review) => {
        return (
          <li key={review.id}>
            <p style={{fontWeight: 700}}>Author:  {review.author}</p>
            <p>{review.content}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default Reviews;
