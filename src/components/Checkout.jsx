import CartTotals from "./CartTotals";
import CheckoutAlbum from "./CheckoutAlbum";

const Checkout = () => {

    return (
        <div className="checkout">
            <div className="info">
                <h1>Your Cart</h1>
            </div>
            <div className="cart-items">
                <div className="table">
                    <p>Album</p>
                    <p>Price</p>
                    <p>Amount</p>
                    <p>Total</p>
                </div>
                <CheckoutAlbum /> {/* Use map to iterate over all albums within the cart*/}
            </div>
            <CartTotals />
        </div>
    );
}

export default Checkout;