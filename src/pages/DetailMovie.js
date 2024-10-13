import "./DetailMovie.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const moviesData = [
        { id: 1, title: "John Wick: Chapter 4", genre: "Action, Crime", description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.", img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg" },
        { id: 2, title: "Oppenheimer", genre: "Biography, Drama, History", description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg" }
    ];

    useEffect(() => {
        const selectedMovie = moviesData.find((movie) => movie.id === parseInt(id));
        setMovie(selectedMovie);
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            <div className="detail-title">
                <img src={movie.img} alt={movie.title} />
                <h1>{movie.title}</h1>
            </div>
            <p className="detail">{movie.description}</p>
            <p className="genre">Genre: {movie.genre}</p>
        </div>
    );
}
