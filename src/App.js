import React, { Component } from 'react';
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWFhY2VhMTgxZGYzZjNjNjNiMzM5YmRmMmQ3NzBmZCIsInN1YiI6IjY0ODk5MjZhZTI3MjYwMDEwNzI0NzlkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1_37dwzZ9cHWzlNWIvPWkqigWITSZfSUe-gqLpyUMgU'
//   }
// };
// fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options);
// `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
// fetch(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, options)
// fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options) movie details based on id
// 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
// 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
// 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'