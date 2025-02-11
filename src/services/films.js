const BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = "e107054497d44b2f85b9003c09668cbd"; 

export const getMoviesBy = async (query) => {
  let allMovies = [];
  let page = 1;
  let hasMoreResults = true;
  let maxPages = 3;  

  try {
    while (hasMoreResults && page <= maxPages) {
      const url = `${BASE_URL}?key=${API_KEY}&page_size=20&page=${page}&search=${query}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener películas: ${response.statusText}`);
      }

      const data = await response.json();
      allMovies = [...allMovies, ...data.results];

      hasMoreResults = !!data.next;
      page++;
    }
    
    return allMovies;
  } catch (error) {
    console.error("❌ Error en la petición:", error);
    return [];  // Devuelve un array vacío en caso de error
  }
};
