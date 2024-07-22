import "../styles/NavBar.css"

const NavBar = ({ itemCount }) => {

    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Store</a></li>
                <li>
                    <a href="#">My Cart ({itemCount} Items)</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;