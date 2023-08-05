import React, { Component } from "react";
import "./SingleMovie.scss";
import Typography from "@material-ui/core/Typography";
import { Badge } from "@material-ui/core";

export default class SingleMovie extends Component {
  render() {
    const {title,date,poster,rating,category} = this.props;
    const backGroundColor = (rating >=7.5) ? "#06cc13" : (rating >=5.5) ? "#f6fa02" : "#fa3c11" ;
    return (
      <div className="card">
        {/* <Badge badgeContent={4} color="secondary" className="rating"> */}
        <div className="rating" style={{backgroundColor : backGroundColor}}>{rating}</div>
        {/* </Badge> */}
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
