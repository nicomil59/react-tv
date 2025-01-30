const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getSeriesApiUrl = (search) => {
  const endpoint = search
    ? `/search/tv?query=${encodeURIComponent(search)}&language=fr-FR`
    : `/trending/tv/day?language=fr-FR`;

  return `${BASE_URL}${endpoint}&api_key=${API_KEY}`;
};