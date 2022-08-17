import axios from 'axios';

const AUTH_KEY = "fc2da78951ef629dde551fb1c9e58ef8";

const TrendingURL = "https://api.themoviedb.org/3/trending/all/day";
const SearchURL = 'https://api.themoviedb.org/3/search/movie';
const findURL = "https://api.themoviedb.org/3/movie";

function getTrendingFilms () {
  return axios.get(`${TrendingURL}?api_key=${AUTH_KEY}&page=1`)
}

function getFilmsByName (require) {
  return axios.get(`${SearchURL}?api_key=${AUTH_KEY}&page=1&query=${require}`)
}

function getFilmById (id) {
  return axios.get(`${findURL}/${id}?api_key=${AUTH_KEY}&language=en-US`)
}

function getReviews (id) {
  return axios.get(`${findURL}/${id}/reviews?api_key=${AUTH_KEY}&language=en-US&page=1`)
}

function getCredits (id) {
  return axios.get(`${findURL}/${id}/credits?api_key=${AUTH_KEY}&language=en-US`)
}

export { getTrendingFilms, getFilmsByName, getFilmById, getReviews, getCredits };
