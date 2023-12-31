import React, { Component } from "react";
import SingleMovie from "../../component/SingleMovie/SingleMovie";
import axios from "axios";
import "./Search.scss";
import { Button, TextField } from "@material-ui/core";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
      error: null,
      currentPage: 1,
      searchInput: "",
    };
  }

  fetchMovieData = async (value) => {
    this.setState({
      loading: true,
    });
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=19aacea181df3f3c63b339bdf2d770fd`
      );
      console.log(res.data);
      this.setState({
        data: res.data.results,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error,
        loading: false,
      });
    }
  };
  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchMovieData(this.state.searchInput);
  };

  render() {
    const { loading, error, data } = this.state;
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Something went wrong!.</h2>;
    return (
      <div className="searchPage">
        <div className="searchSection">
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField id="standard-basic" label="Search for movie, tv shows..." style={{width : "20rem"}} onChange={this.handleChange}/>
            <Button type="submit" variant="contained" color="primary">Search</Button>
          </form>
        </div>
        <div className="search-container-sec">
          {(data.length === 0) ? <h2>No results found!</h2> : data.map((item) => {
            if (!item.original_title || !item.release_date || !item.poster_path ) return;
            return (
              <SingleMovie
                key={item.id}
                title={item.original_title}
                rating={item.vote_average.toFixed(1)}
                date={item.release_date}
                poster={item.poster_path}
                category={item.media_type}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
