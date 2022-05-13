import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = ({pizzaInfo}) => {
  const {id, name, price, img} = pizzaInfo
  return (
    <div className={styles.container}>
      <Image
        src={img}
        alt=""
        width="500"
        height="500"
        className={styles.pizzaImg}
      />
      <h1 className={styles.title}>{name}</h1>
      <span className={styles.price}>Rs.{price.medium}/-</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
