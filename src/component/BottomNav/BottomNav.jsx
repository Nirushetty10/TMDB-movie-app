import React, { Component } from "react";
import "./BottomNav.scss";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

export default class BottomNav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value : 0
    }
  }
  handleChange = (event,newValue) => {
    this.setState({value : newValue})

  }

  render() {
    return (
      <div className="bottomNav">
        <BottomNavigation
        className="bottomNavSec"
          value={this.state.value}
          onChange={this.handleChange }
        >
          <Link to="/">
          <BottomNavigationAction
            label="Movies"
            value="movies"
            icon={<MovieIcon />}
            className="bottomNavAction"
          />
          </Link>
          <Link to="/trending">
          <BottomNavigationAction
            label="Trending"
            value="trending"
            icon={<WhatshotIcon />}
            className="bottomNavAction"
          />
          </Link>
          <Link to="/tvseries" className="link">
          <BottomNavigationAction
            label="TV Shows"
            value="tvshows"
            icon={<TvIcon />}
            className="bottomNavAction"
          />
          </Link>
          
          <Link to="/search">
          <BottomNavigationAction
            label="Search"
            value="search"
            icon={<SearchIcon />}
            className="bottomNavAction"
          />
          </Link>
        </BottomNavigation>
      </div>
    );
  }
}
