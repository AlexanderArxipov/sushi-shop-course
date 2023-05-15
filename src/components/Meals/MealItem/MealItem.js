import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const formatPrice = `${props.price.toFixed(0)} ₽`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      img: props.img,
      name: props.name,
      price: props.price,
      amount: amount
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <img src={props.img} alt="sushi" />
        <h3>{props.name} </h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formatPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
