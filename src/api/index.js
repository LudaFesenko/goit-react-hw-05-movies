import axios from 'axios';

const API_KEY = 'ece71aad9171ec15880a13ae16940cc4';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export async function fetchTrending() {
  const response = await axios.get('/3/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
}

export async function fetchMoviesBySearchString(searchString, controller) {
  const response = await axios.get('/3/search/movie', {
    signal: controller.signal,
    params: {
      api_key: API_KEY,
      query: searchString,
      page: 1,
    },
  });
  return response.data;
}

export async function fetchMovieDetails(movieId, controller) {
  const response = await axios.get(`/3/movie/${movieId}`, {
    signal: controller.signal,
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

export async function fetchMovieCredits(movieId) {
  const response = await axios.get(`/3/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`/3/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}
