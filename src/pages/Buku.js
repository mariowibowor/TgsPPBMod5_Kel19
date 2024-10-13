import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Buku.css";

export default function Buku() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();

    const poster = [
        { title: "Mein Kampf", id: 21, rate: 5, genre: "Non Fiction", img: "https://m.media-amazon.com/images/I/81wqtqoXSQL._SY522_.jpg" },
        { title: "Le fascisme", id: 22, rate: 5, genre: "Non Fiction", img: "https://m.media-amazon.com/images/I/61VJREdiBmL._SY522_.jpg" },
        { title: "The Communist Manifesto", id: 23, rate: 5, genre: "Non Fiction", img: "https://m.media-amazon.com/images/I/61EVngyUfJL._SY522_.jpg" },
    ];

    const data = [
        { title: "Mein Kampf", id: 21, rate: 5, genre: "Non Fiction", img: "https://m.media-amazon.com/images/I/81wqtqoXSQL._SY522_.jpg" },
        { title: "Le fascisme", id: 22, rate: 5, genre: "Non Fiction", img: "https://m.media-amazon.com/images/I/61VJREdiBmL._SY522_.jpg" },
        { title: "The Communist Manifesto", id: 23, rate: 5, genre: "Non Fiction", img: "https://m.media-amazon.com/images/I/61EVngyUfJL._SY522_.jpg" },
    ];

    const handleClick = (id) => {
        navigate(`/detailbuku/${id}`);
    };

    return (
        <>
            <p id="bukus">Top Books</p>
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
                    <p id="bukus">All Books</p>
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
                    <p id="bukus">All Books</p>
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
