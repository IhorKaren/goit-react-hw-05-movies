import axios from 'axios';

const API_KEY = 'ca3ef83497283bd11ad4f2544336ab4a';
const MAIN_URL = 'https://api.themoviedb.org/3';

export default async function fetchMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `${MAIN_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );

    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
}
