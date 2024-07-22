import QuantityBtn from "./QuantityBtn";
import "../styles/Album.css";
import { useState } from "react";

const Album = ({ addAlbum }) => {

    const [quantity, setQuantity] = useState(1);
    const newAlbum = {title: "BRAT"};

    const handleAddAlbum = () => {
        addAlbum((prevCart) => {
            const albumIndex = prevCart.findIndex(item => item.album.title === newAlbum.title);
            if (albumIndex > -1) {
                // Album already in the cart, update the quantity
                const updatedCart = [...prevCart];
                updatedCart[albumIndex].quantity += quantity;
                return updatedCart;
            } else {
                return [...prevCart, newAlbum];
            }
        });
    };

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
                    <QuantityBtn quant={quantity} setQuant={setQuantity} />
                </div>
                <button className="add-cart" onClick={handleAddAlbum}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Album;