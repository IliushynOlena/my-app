
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Privacy } from './components/Privacy';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header >
        <h1>Hello React</h1>  
        <Menu/>      
      </header>
      <main>               
          {/* <Routes>
                <Route path="/" element={<Home />}>
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />              
              </Route>
         </Routes>    */}
         <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
           </Routes>       
      </main>
    </div>
  );
}

export default App;
