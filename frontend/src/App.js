import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import {Container} from 'react-bootstrap'
import Home from './Screens/Home'
import ProductScreen from './Screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header />
    <Container>
      <h1>welcome to my shop</h1>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/product/:id' element={<ProductScreen/>}/>  
     </Routes>
     </Container>
      <Footer />
    </Router>
     
    
  );
}

export default App;
