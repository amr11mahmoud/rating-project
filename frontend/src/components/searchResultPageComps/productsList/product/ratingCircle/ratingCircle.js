import React from "react";
import classes from "./ratingCircle.module.scss";

export default class ratingCircle extends React.Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }
  render() {
    const { radius, stroke, progress } = this.props;
    let rating = parseFloat(this.props.rating * 2.0);
    const strokeDashoffset =
      this.circumference - (progress / 100) * this.circumference;

    return (
      <div className={classes.ratingCircle}>
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#c5c5c5"
            fill="transparent"
            strokeWidth={stroke}
            r={this.normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            className={classes.circle}
            stroke="#fadb21"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={this.circumference + " " + this.circumference}
            style={{ strokeDashoffset }}
            r={this.normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <h2 className={classes.ratingText}>{rating.toFixed(1)}</h2>
        <p className={classes.paragrah} style={{fontSize:'20px'}}>out of 10</p>
      </div>
    );
  }
}
