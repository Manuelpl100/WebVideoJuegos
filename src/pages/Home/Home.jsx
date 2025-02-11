import { useEffect, useState } from "react";
import { getMoviesBy } from '../../services/films.js';
import { Carousel } from 'flowbite-react';
import { Link } from "react-router-dom";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);

  // Obtener los videojuegos
  useEffect(() => {
    const fetchFilms = async () => {
      const results = await getMoviesBy("action"); // Puedes cambiar "action" por otros términos
      setFilms(results.slice(0, 5));  // Limita a 5 resultados para el carrusel
      setIsLoading(false);
    };

    fetchFilms();
  }, []);

  return (
    <>
      <section
        className="w-full mb-6 py-12 md:py-24 lg:py-32 xl:py-48"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/453554783/es/foto/pantalla-de-cine-vac%C3%ADo-con-el-p%C3%BAblico.jpg?s=612x612&w=0&k=20&c=M-B8enkywO3DyyODvX1NtWBkzxnYjjVZqU2U-AMushk=')",
          backgroundSize: "cover",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl text-gray-500 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Bienvenido a <span className='text-primary-200'>VideoGames</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-400">
                Vive la magia de los videojuegos como nunca antes
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary-200 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-200/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                to="/films"
              >
                Mira los mejores videojuegos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className='font-rubiksh text-3xl text-gray-200 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>Mejores Videojuegos</h1>
        <div className="h-96 mb-2 mt-6 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={2000} className='mb-3 mt-3'>
            {isLoading ? (
              <div>Cargando...</div>
            ) : (
              films.map((film) => (
                <div key={film.id} className="relative">
                  <Link to={`/films/${film.id}`}>
                    <img src={film.background_image} alt={film.name} className="w-full h-full object-cover rounded-md" />
                    <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                      <h3 className="text-lg">{film.name}</h3>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Home;