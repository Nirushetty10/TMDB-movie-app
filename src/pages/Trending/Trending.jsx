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
       error : null,
       currentPage : 1
    }
  }
  
  fetchMovieData = async(page = 1) => {
    this.setState({
      loading : true
    })
    try {
      let res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?${page}&api_key=19aacea181df3f3c63b339bdf2d770fd`);
      console.log(res.data);
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
  handlePage = (e,page) => {
    this.fetchMovieData(page)
    this.setState({
      currentPage : page
    })
  }
    componentDidMount() {
       this.fetchMovieData();
    }
  render() {
    const {loading , error ,data} = this.state;
    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>Something went wrong!.</h2>
    return (<div className='trendingPage'>  <div className='container-sec'>
      {data.map(item => {
        if(!item.original_title || !item.release_date ) return;
      return <SingleMovie key={item.id} title={item.original_title} rating={item.vote_average.toFixed(1)} date={item.release_date} poster={item.poster_path} category={item.media_type}/>
  })}
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
