import React, { Component } from "react";
import "./SingleMovie.scss";
import Typography from "@material-ui/core/Typography";
import { Badge } from "@material-ui/core";

export default class SingleMovie extends Component {
  render() {
    const {title,date,poster,rating,category} = this.props;
    return (
      <div className="card">
        <div className="rating">{rating}</div>
        
        <img
          src = {`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`}
          alt="movie-poster"
        />
        <h1 className="title">{title}</h1>
        <div className="bottomSec">
          <span>{category}</span>
          <span>{date}</span>
        </div>
      </div>
    );
  }
}
