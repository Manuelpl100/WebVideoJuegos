// FilmPoster.jsx
import { Link } from "react-router-dom";

function FilmPoster({ id, title, posterUrl }) {
    return (
        <div className="border p-4 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
            <img
                className="w-full h-auto rounded-lg"
                alt={title}
                title={title}
                src={posterUrl}
            />
        </div>
    );
}

export default FilmPoster;