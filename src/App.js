import React from 'react';

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar';

const App = () => {
  return (
   
   <Router>
   <Navbar/>
      <Routes>
      
          <Route path= "/" element={<Home/>}/>
          <Route path= "/About" element={<About/>}/>
          <Route path= "/Contact" element={<Contact/>}/>
       
      </Routes>
  
   </Router>
   
  );
}

export default App;
