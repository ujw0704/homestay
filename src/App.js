
import Home from "./Components/Home.js"
import About from "./Components/About.js"
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Header from "./Components/Header.js"
import Contact from "./Components/Contact.js"
import Login from "./Components/Login.js"
import Register from "./Components/Register.js"
import Booking from "./Components/Booking.js"
import Product from "./Components/Product.js"
import Footer from "./Components/Footer.js"
// import { useContext } from "react"



function App() {
return (
    <div className="App">
    <div className="App">
      <BrowserRouter>
      <Header/>
       <Routes>
       <Route path="login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="Register"element={<Register/>}/>
      <Route path="Booking"element={<Booking/>}/>
      <Route path="Product" element={<Product/>}/>

     
      
       </Routes>
       <Footer/>
      </BrowserRouter>
   
    </div>
    </div>
  );
}

export default App;
