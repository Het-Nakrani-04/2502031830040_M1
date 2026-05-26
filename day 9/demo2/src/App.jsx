
import './App.css'
import { BrowserRouter,Routes,Route }from "react-router-dom"
import Home from"./Home"
import About from"./About"
import Contact from"./Contact"
import Products from"./Products"
import Laptop from"./Laptop"
import Phone from"./Phone"




function App() {


 

  return (
    <>
    <h1>welcome</h1>
    <a href="/">Home</a>
    <a href="/About">About</a>
    <a href="/Contact">Contact</a>
    <a href="/Products">Products</a>
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/about"element={<About />} />
        <Route path="/contact"element={<Contact />} />
        <Route path="/Products"element={<Products />} >
          <Route path="Phone"element={<Phone />} />
          <Route path="Laptop"element={<Laptop />} />
        </Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
