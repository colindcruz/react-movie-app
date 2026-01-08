import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './assets/components/pages/Home'
import {Routes, Route} from "react-router-dom"
import Favorites from './assets/components/pages/Favorites'
/*import MovieCard from './assets/components/MovieCard'
import Favorite from './assets/components/pages/Favorites'*/
import Navbar from './assets/components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      </main>
   </MovieProvider>
  );
}


export default App;
