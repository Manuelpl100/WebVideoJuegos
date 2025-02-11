const BASE_URL = "https://api.rawg.io/api";
const API_KEY = "e107054497d44b2f85b9003c09668cbd"; 

export const getGamesBy = async (queryOrId = "") => {
  try {
      let url;
      if (!queryOrId) {
          url = `${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic&page_size=10&dates=2020-01-01,2024-12-31`;
      } else if (!isNaN(queryOrId)) {
          url = `${BASE_URL}/games/${queryOrId}?key=${API_KEY}`;
      } else {
          url = `${BASE_URL}/games?key=${API_KEY}&genres=${queryOrId}&page_size=20`;
      }

      console.log("Fetching data from:", url);  

      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Error al obtener videojuegos: ${response.statusText}`);
      }
      const data = await response.json();

      return !isNaN(queryOrId) ? data : data.results || [];
  } catch (error) {
      console.error("Error en la petición de videojuegos:", error);
      return !isNaN(queryOrId) ? null : [];
  }
};