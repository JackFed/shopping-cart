import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import Album from "./components/Album"
import Checkout from "./components/Checkout"
import { useState } from "react"

function App() {

  const [cart, setCart] = useState([{quantity: 1, album: {title:"BRAT"}}]);

  console.log(cart)

  const totalItems = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;
  }, 0);

  return (
    <>
      <NavBar itemCount={totalItems}/>
      <HomePage />
      <Album addAlbum={setCart} />
      <Checkout />
    </>
  )
}

export default App
