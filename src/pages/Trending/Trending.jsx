import React, { Component } from 'react'
import SingleMovie from '../../component/SingleMovie/SingleMovie';
import Pagination from '@material-ui/lab/Pagination';
import "./Trending.scss"
import axios from 'axios';

export default class Trending extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       data : [],
       loading : false,
       error : null
    }
  }
  
  fetchMovieData = async() => {
    this.setState({
      loading : true
    })
    try {
      let res = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=19aacea181df3f3c63b339bdf2d770fd");
      this.setState({
        data : res.data.results, 
        loading : false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        error,
        loading : false
      })
    }
  }
    componentDidMount() {
       this.fetchMovieData();
    }
  render() {
    const {loading , error ,data} = this.state;
    if(loading) <h2>Loading...</h2>
    if(error) <h2>Something went wrong!.</h2>
    return (<div className='trendingPage'>  <div className='container-sec'>
      {data.map(item => <SingleMovie key={item.id} title={item.original_title} rating={item.vote_average.toFixed(1)} date={item.release_date} poster={item.poster_path} category={item.media_type}/>)}
      </div>
      <div className="paginationSec">
      <Pagination
            className="pagination"
            count={10}
            page={this.state.currentPage}
            onChange={this.handlePage}
            variant="outlined"
            shape="rounded"
          />
          </div>
      </div>
    )
   
  }
}
