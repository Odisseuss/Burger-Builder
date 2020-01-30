import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  let parsedIngredients = [];
  Object.keys(props.ingredients).forEach(ingredient => {
    props.ingredients[ingredient].forEach(index => {
      parsedIngredients[index] = (
        <BurgerIngredient key={ingredient + index} type={ingredient} />
      );
    });
  });
  parsedIngredients = parsedIngredients.reverse();
  if (parsedIngredients.length === 0) {
    parsedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {parsedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
