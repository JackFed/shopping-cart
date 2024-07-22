import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import Album from "./components/Album"
import Checkout from "./components/Checkout"
import { useState } from "react"

function App() {

  const [cart, setCart] = useState([{item: 0}]);


  return (
    <>
      <NavBar itemCount={cart.length}/>
      <HomePage />
      <Album addAlbum={setCart}/>
      <Checkout />
    </>
  )
}

export default App
