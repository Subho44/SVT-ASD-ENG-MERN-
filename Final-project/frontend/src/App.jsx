import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Navbar from './components/Navbar';
import Addcourse from './components/Addcourse';
import Coursedetails from './components/Coursedetails';
import Editcourse from './components/Editcourse';
import Register from './components/Register';
import Login from './components/Login';
import Privateroute from './utils/Privateroute';
import Chatrecom from './components/Chatrecom';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route element={<Privateroute />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/add" element={<Addcourse />}></Route>
            <Route path="/course/:id" element={<Coursedetails />}></Route>
            <Route path="/edit/:id" element={<Editcourse />}></Route>
            <Route path="/chat" element={<Chatrecom />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App