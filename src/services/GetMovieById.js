import axios from 'axios';

const API_KEY = 'ca3ef83497283bd11ad4f2544336ab4a';
const MAIN_URL = 'https://api.themoviedb.org/3';

export default async function fetchMovieByID(movieId) {
  try {
    const response = await axios.get(
      `${MAIN_URL}/movie/${movieId}?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
