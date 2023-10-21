import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sport from './pages/Sport.tsx'
import Main from './pages/Main.tsx'
import Music from './pages/Music.tsx'
import Movies from './pages/Movies.tsx'
import TVShows from './pages/TV-Shows.tsx'
import News from './pages/News.tsx'
import Blogs from './pages/Blogs.tsx'
import Wildlife from './pages/Wildlife.tsx'
import Livestreams from './pages/Livestreams.tsx'
import Reviews from './pages/Reviews.tsx'
import Trends from './pages/Trends.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/sport' element={<Sport/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/tv-shows' element={<TVShows/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/wildlife' element={<Wildlife/>}/>
        <Route path='/livestreams' element={<Livestreams/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/trends' element={<Trends/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
