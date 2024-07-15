import QuantityBtn from "./QuantityBtn";

const Album = () => {

    return (
        <div className="album">
            <img src="#" alt="Album image" />
            <div className="info">
                <h1>Album Title</h1>
                <h2>Artist(s)</h2>
                <p>Label: Label name</p>
                <p>Release date: July 20, 1929</p>
            </div>
            <div className="tracks">
                <h1>Track List</h1>
                <ul className="track-list">
                    <li>Track 1</li>
                    <li>Track 2</li>
                    <li>Track 3</li>
                </ul>
            </div>
            <div className="order">
                <div className="pricing">$29.99</div>
                <QuantityBtn />
                <div className="add-cart">Add To Cart</div>
            </div>
        </div>
    )
}

export default Album;