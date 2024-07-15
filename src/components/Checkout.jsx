import CheckoutAlbum from "./CheckoutAlbum";

const Checkout = () => {

    return (
        <div className="checkout">
            <div className="info">
                <h1>Your Cart</h1>
            </div>
            <div className="cart-items">
                <CheckoutAlbum />
            </div>
            <div className="cart-totals">
                
            </div>
        </div>
    );
}

export default Checkout;