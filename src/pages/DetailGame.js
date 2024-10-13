import "./DetailGame.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    const gameData = [
        { id: 11, title: "Minecraft", genre: "Sandbox, Survival", description: "A sandbox survival game where players can explore, build, and craft in an open-world made of blocks.", img: "https://upload.wikimedia.org/wikipedia/id/f/f9/Minecraft_cover_%28new%29.jpg" },
        { id: 12, title: "Apex Legend", genre: "Battle Royale, First-Person Shooter", description: "A fast-paced battle royale game with unique characters and team-based gameplay set in a sci-fi universe.", img: "https://upload.wikimedia.org/wikipedia/id/d/db/Apex_legends_cover.jpg" },
        { id: 13, title: "Oppenheimer", genre: "Tactical Shooter, First-Person Shooter", description: "A tactical first-person shooter combining precise gunplay with unique character abilities in 5v5 team-based matches.", img: "https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6" }
    ];

    useEffect(() => {
        const selectedGame = gameData.find((game) => game.id === parseInt(id));
        setGame(selectedGame);
    }, [id]);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            <div className="detail-title">
                <img src={game.img} alt={game.title} />
                <h1>{game.title}</h1>
            </div>
            <p className="detail">{game.description}</p>
            <p className="genre">Genre: {game.genre}</p>
        </div>
    );
}
