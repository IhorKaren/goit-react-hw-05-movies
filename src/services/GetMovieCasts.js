import axios from 'axios';

const API_KEY = 'ca3ef83497283bd11ad4f2544336ab4a';
const MAIN_URL = 'https://api.themoviedb.org/3';

export default async function fetchMovieCasts(movieId) {
  try {
    const response = await axios.get(
      `${MAIN_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );

    return response.data.cast;
  } catch (error) {
    throw new Error(error.message);
  }
}
