import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Game.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();

    const poster = [
        { title: "Minecraft", id: 11, rate: 4, genre: "Sandbox, Survival", img: "https://upload.wikimedia.org/wikipedia/id/f/f9/Minecraft_cover_%28new%29.jpg" },
        { title: "Apex Legend", id: 12, rate: 4, genre: "Battle Royale, First-Person Shooter", img: "https://upload.wikimedia.org/wikipedia/id/d/db/Apex_legends_cover.jpg" },
        { title: "Valorant", id: 13, rate: 4, genre: "Tactical Shooter, First-Person Shooter", img: "https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6" },
    ];

    const data = [
        { title: "Minecraft", id: 11, rate: 4, genre: "adventure", img: "https://upload.wikimedia.org/wikipedia/id/f/f9/Minecraft_cover_%28new%29.jpg" },
        { title: "Apex Legend", id: 12, rate: 4, genre: "adventure", img: "https://upload.wikimedia.org/wikipedia/id/d/db/Apex_legends_cover.jpg" },
        { title: "Valorant", id: 13, rate: 4, genre: "adventure", img: "https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6" },
    ];

    const handleClick = (id) => {
        navigate(`/detailgame/${id}`);
    };

    return (
        <>
            <p id="movies">Top Games</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            onClick={() => handleClick(item.id)}
                        />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>

            <div className="rowcoba">
                <div className="column">
                    <p id="games">All Games</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                onClick={() => handleClick(item.id)}
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>

                <div className="column">
                    <p id="games">All Games</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                onClick={() => handleClick(item.id)}
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
