import { useEffect, useState } from "react";
import { getMoviesBy } from "../../services/films";
import { Link } from "react-router-dom"; // 🔗 Importamos Link
import FilmPoster from "../../components/FilmPoster";

function Films() {
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMoviesBy(""); // Llamamos con un término de búsqueda (ejemplo: 'the')
        console.log("🎬 Películas obtenidas:", movies);
        setFilms(movies);
      } catch (error) {
        console.error("❌ Error al obtener datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    console.log("🌍 Cargando datos de la API...");
    fetchMovies();
  }, []);

  return (
    <section className="p-6">
      <h1 className="font-rubiksh text-gray-200 font-extrabold text-4xl mb-3">
        Videojuegos
      </h1>

      {isLoading ? (
        <p className="text-gray-400">Cargando...</p>
      ) : films.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {films.map((film) => (
            <Link key={film.id} to={`/films/${film.id}`}> {/* 🔗 Enlace a detalles */}
              <FilmPoster
                id={film.id}
                title={film.name}
                posterUrl={film.background_image || "https://via.placeholder.com/300"}
              />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No se encontraron videojuegos</p>
      )}
    </section>
  );
}

export default Films;