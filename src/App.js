import React, { Component } from 'react';
import "./App.css";
import Header from './component/Header/Header';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Trending from './pages/Trending/Trending';
import TVSeries from './pages/TV series/TVSeries';
import BottomNav from './component/BottomNav/BottomNav';

export default class App extends Component {
  render() {
    return (
      <div className='layout'>
        <BrowserRouter>
        <Header />
        <div className='page-sec'>
        <Routes>
          <Route path='/' element={<Movies />}/>
          <Route path='/Search' element={<Search />}/>
          <Route path='/trending' element={<Trending />}/>
          <Route path='/tvseries' element={<TVSeries />}/>
        </Routes>
        </div>
        <BottomNav />
        </BrowserRouter>
      </div>
    )
  }
}



// `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
// fetch(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, options)
// fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options) movie details based on id
// 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
// 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
// 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'