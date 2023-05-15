import React from "react";
import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>
        Суши-магазин онлайн
        <p>В нашем магазине можно заказать любые суши и ролы</p>
        <p>Приготовим и доставим за 1 час</p>
      </h2>
    </section>
  );
};

export default PromoText;
