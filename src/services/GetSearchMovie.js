import axios from 'axios';

const API_KEY = 'ca3ef83497283bd11ad4f2544336ab4a';
const MAIN_URL = 'https://api.themoviedb.org/3';

export default async function fetchSearchMovies(movie) {
  try {
    const response = await axios.get(
      `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${movie}&language=en-US`
    );

    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
}
