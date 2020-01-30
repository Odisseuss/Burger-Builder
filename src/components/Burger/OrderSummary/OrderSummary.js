import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientKey, index) => {
      return (
        <li key={index}>
          <span style={{ textTransform: "capitalize" }}>{ingredientKey}: </span>
          {props.ingredients[ingredientKey].length}
        </li>
      );
    }
  );

  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul className={classes.IngredientList}>{ingredientSummary}</ul>
      <p>
        <strong>Total: {props.price.toFixed(2)}$</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
