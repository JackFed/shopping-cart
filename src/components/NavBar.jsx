const NavBar = ({ itemCount }) => {

    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Store</a></li>
                <li className="cart">
                    <a href="#">My Cart</a>
                    <p>({itemCount} Item(s))</p>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;