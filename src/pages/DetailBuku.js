import "./DetailGame.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
    const { id } = useParams();
    const [buku, setBuku] = useState(null);

    const bukuData = [
        { id: 21, title: "Mein Kampf", genre: "Non Fiction", description: "Mein Kampf by Adolf Hitler presents his autobiographical narrative and outlines his political ideology, including his vision for German nationalism, anti-Semitism, and totalitarianism.", img: "https://m.media-amazon.com/images/I/81wqtqoXSQL._SY522_.jpg" },
        { id: 22, title: "Le fascisme", genre: "Non Fiction", description: "Le Fascisme by Benito Mussolini outlines the principles and ideology of fascism, emphasizing authoritarianism, nationalism, and the rejection of liberal democracy.", img: "https://m.media-amazon.com/images/I/61VJREdiBmL._SY522_.jpg" },
        { id: 23, title: "The Communist Manifesto", genre: "Non Fiction", description: "The Communist Manifesto by Karl Marx and Friedrich Engels advocates for the abolition of capitalist societies and class structures, calling for a revolution to establish a classless, communist society based on collective ownership of resources.", img: "https://m.media-amazon.com/images/I/61EVngyUfJL._SY522_.jpg" }
    ];

    useEffect(() => {
        const selectedBuku = bukuData.find((buku) => buku.id === parseInt(id));
        setBuku(selectedBuku);
    }, [id]);

    if (!buku) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            <div className="detail-title">
                <img src={buku.img} alt={buku.title} />
                <h1>{buku.title}</h1>
            </div>
            <p className="detail">{buku.description}</p>
            <p className="genre">Genre: {buku.genre}</p>
        </div>
    );
}
