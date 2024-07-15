import QuantityBtn from "./QuantityBtn";

const CheckoutAlbum = () => {


    return (
        <div className="album-check">
            <img src="#" alt="Album cover" />
            <div className="title">Album title</div>
            <div className="price">$22.99</div>
            
            <QuantityBtn />            
            <div className="remove">remove</div>
            <div className="total-price">$22.99</div>
        </div>
    )
}

export default CheckoutAlbum;