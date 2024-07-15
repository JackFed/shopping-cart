
const CartTotals = () => {

    return (
        <div className="cart-totals">
            <h1>Cart Totals</h1>
            <p>No tax included. Sales tax added during checkout.</p>
            <div className="cart-info">
                <p>Subtotal:</p>
                <p>$93.99</p>
            </div>
            <div className="cart-info">
                <p>Quantity:</p>
                <p>1 item(s)</p>
            </div>
            <button className="go-to-checkout">Checkout</button>
        </div>
    );
}

export default CartTotals;