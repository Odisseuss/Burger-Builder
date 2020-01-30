import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import { render } from "@testing-library/react";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  bread: 0.2
};

const BurgerBuilder = () => {
  const [ingredientsState, setIngredientsState] = useState({
    ingredients: {
      bacon: [],
      salad: [],
      meat: [],
      cheese: [],
      bread: []
    },
    lastIngredientIndex: -1
  });

  const [priceState, setPriceState] = useState(5.2);
  const [purchaseState, setPurchaseState] = useState({
    purchasable: false,
    purchasing: false
  });

  const updatePurchasedState = () => {
    const ingredients = {
      ...ingredientsState.ingredients
    };
    const sum = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey];
      })
      .reduce((sum, elem) => {
        return sum + elem.length;
      }, 0);

    setPurchaseState({
      ...purchaseState,
      purchasable: sum > 0
    });
  };

  const purchaseHandler = () => {
    setPurchaseState({
      ...purchaseState,
      purchasing: true
    });
  };

  const purchaseCancelHandler = () => {
    setPurchaseState({
      ...purchaseState,
      purchasing: false
    });
  };

  const purchaseContinueHandler = () => {
    alert("CONTINUE");
  };

  const addIngredientHandler = type => {
    const oldIngredientIndexes = [...ingredientsState.ingredients[type]];
    const newLastIndex = ingredientsState.lastIngredientIndex + 1;
    const updatedIngredientIndexes = [...oldIngredientIndexes, newLastIndex];

    const updatedIngredients = {
      ...ingredientsState,
      lastIngredientIndex: newLastIndex
    };

    updatedIngredients.ingredients[type] = updatedIngredientIndexes;
    const newPrice = priceState + INGREDIENT_PRICES[type];

    setIngredientsState(updatedIngredients);
    setPriceState(newPrice);
    updatePurchasedState();
  };

  const removeIngredientHandler = type => {
    const updatedIngredientIndexes = [...ingredientsState.ingredients[type]];
    updatedIngredientIndexes.pop();
    const newLastIndex = ingredientsState.lastIngredientIndex - 1;

    const updatedIngredients = {
      ...ingredientsState,
      lastIngredientIndex: newLastIndex
    };

    updatedIngredients.ingredients[type] = updatedIngredientIndexes;
    const newPrice = priceState - INGREDIENT_PRICES[type];

    setIngredientsState(updatedIngredients);
    setPriceState(newPrice);
    updatePurchasedState();
  };

  const disabledInfo = {
    ...ingredientsState.ingredients
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key].length === 0;
  }
  useEffect(() => {}, [ingredientsState.lastIngredientIndex]);

  return (
    <React.Fragment>
      <Modal
        show={purchaseState.purchasing}
        modalClosed={purchaseCancelHandler}
      >
        <OrderSummary
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
          ingredients={ingredientsState.ingredients}
          price={priceState}
        />
      </Modal>
      <Burger ingredients={ingredientsState.ingredients} />
      <BuildControls
        addIngredient={addIngredientHandler}
        removeIngredient={removeIngredientHandler}
        price={priceState}
        disabled={disabledInfo}
        purchasable={purchaseState.purchasable}
        purchase={purchaseHandler}
      />
    </React.Fragment>
  );
};

export default BurgerBuilder;
