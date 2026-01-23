const BASE_URL = 'https://api.themoviedb.org'
const TMDB_TOKEN = import.meta.env.TMDB_TOKEN;

export const fetchMoviesTopRated = async () => {
  const response = await fetch(
    `${BASE_URL}/3/movie/top_rated`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TMDB_TOKEN}`,
        'accept': 'application/json'
      }
    }
  );

  const data = await response.json();
  return data.results || [];
}

export const fetchMoviesPopular = async () => {
  const response = await fetch(
    `${BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TMDB_TOKEN}`,
        'accept': 'application/json'
      }
    }
  );

  const data = await response.json();
  return data.results || [];
}

export const fetchSearchMovies = async (search) => {
  const response = await fetch(
    `${BASE_URL}/3/search/movie?query=${search}`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TMDB_TOKEN}`,
        'accept': 'application/json'
      }
    }
  )

  const data = await response.json();
  return data.results || [];
}