import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sprite from './drawerItems/Sprite';
import Jackdaneils from './drawerItems/Jackdaneils';
import Cocacola from './drawerItems/Cocacola';
import Pepsi from './drawerItems/Pepsi';
import Fanta from './drawerItems/Fanta';
import {Routes, Route,BrowserRouter} from "react-router-dom"
 
function App() {
  return (
    <>
    <div className='app'>
         <img className='app-bg'
      src='https://wallpapercave.com/wp/VYGMAH5.jpg'
      alt='background'
      />
      <Navbar/>
      
         

      {/* <img className='app-bg'
      src='https://wallpapercave.com/wp/VYGMAH5.jpg'
      alt='background'
      />
      <img className='app-bg'
      src='https://wallpapercave.com/wp/VYGMAH5.jpg'
      alt='background'
      />
      <img className='app-bg'
      src='https://wallpapercave.com/wp/VYGMAH5.jpg'
      alt='background'
      /> */}
    </div>

    <div>
    <BrowserRouter>
      <Routes>
                <Route exact path='sprite' element={<Sprite/>}/>
                <Route exact path='fanta' element={<Fanta/>}/>
                <Route exact path='pepsi' element={<Pepsi/>}/>
                <Route exact path='jack daniels' element={<Jackdaneils/>}/>
                <Route exact path='cocacola' element={<Cocacola/>}/>
              </Routes>
            </BrowserRouter>
    </div>

    </>
   
  );
}

export default App;
