import { useEffect, useState } from "react";
import { getMoviesBy } from "../../services/films"; // Asegúrate de que esta función esté correctamente configurada
import { useParams } from "react-router-dom"; // Para acceder a los parámetros de la URL

const FilmDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const movieDetails = await getMoviesBy(id);
        console.log("🎬 Detalles de la película:", movieDetails); // Verifica los datos
        setFilm(movieDetails[0]);
      } catch (error) {
        console.error("❌ Error al obtener detalles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilmDetails();
  }, [id]);

  if (isLoading) return <p>Cargando detalles...</p>;
  if (!film) return <p>No se encontró el videojuego</p>;

  return (
    <section className="p-6">
      <h1 className="text-gray-200 font-extrabold text-4xl mb-3">{film.name}</h1>
      <img src={film.background_image} alt={film.name} className="w-full rounded-lg" />
      <p className="text-gray-400 mt-4">{film.description_raw}</p>


      <div className="mt-5">
        <h3 className="text-xl font-semibold">Géneros</h3>
        <ul>
          {film.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FilmDetails;