import React, { Component } from 'react'
import "./Movies.scss"
import axios from "axios"

export default class Movies extends Component {
  options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWFhY2VhMTgxZGYzZjNjNjNiMzM5YmRmMmQ3NzBmZCIsInN1YiI6IjY0ODk5MjZhZTI3MjYwMDEwNzI0NzlkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1_37dwzZ9cHWzlNWIvPWkqigWITSZfSUe-gqLpyUMgU'
  }
};

fetchMovieData = async() => {
  try {
    let data = await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=en-US', this.options);;
  } catch (error) {
    
  }
}
  componentDidMount() {
     this.fetchMovieData();
  }

  render() {
    return (
      <div className='movies-container'>
      </div>
    )
  }
}
