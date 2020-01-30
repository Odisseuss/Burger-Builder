import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.ingredientLabel}</div>
    <button
      className={classes.Remove}
      onClick={props.removeIngredient}
      disabled={props.disabled}
    >
      Remove
    </button>
    <button className={classes.Add} onClick={props.addIngredient}>
      Add
    </button>
  </div>
);

export default buildControl;
