import QuantityBtn from "./QuantityBtn";
import "../styles/Album.css";
import { useState } from "react";

const Album = ({ addAlbum }) => {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className="album">
            <img src="#" alt="Album image" />
            <div className="album-info">
                <div className="artist-info">
                    <h1>Album Title</h1>
                    <h2>Artist(s)</h2>
                    <p>Label: Label name</p>
                    <p>Release date: July 20, 1929</p>
                </div>
                <div className="tracks">
                    <h2>Track List</h2>
                    <ul className="track-list">
                        <li>Track 1</li>
                        <li>Track 2</li>
                        <li>Track 3</li>
                    </ul>
                </div>
                <div className="order">
                    <div className="pricing">$29.99</div>
                    <p>Quantity</p>
                    <QuantityBtn quant={quantity} />
                </div>
                <button className="add-cart">Add To Cart</button>
            </div>
        </div>
    )
}

export default Album;