import React, { Component } from "react";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import "./Header.scss";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <AppBar position="static" className="nav">
          <Toolbar>
            <MovieFilterIcon className="movie-icon"/>
            <Typography variant="h2">ENTERTAINMENT HUB</Typography>
            <MovieFilterIcon className="movie-icon" />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
