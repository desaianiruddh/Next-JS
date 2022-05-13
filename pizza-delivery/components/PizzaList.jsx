import axios from 'axios';
import { useState, useEffect } from 'react';

import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  const [pizzasInfo, setPizzasInfo] = useState([])
  useEffect(() => async () => {
    const pizzasListData = await axios.get('/api/pizzaInfo');
    setPizzasInfo(pizzasListData.data);
    return console.log('Unmount');
  },[])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA YOU'VE EVER TASTE</h1>
      <div className={styles.desc}>
        What is better than having a crispy melty pizza, you ask?
        <p>Having that crispy and melty pizza in the comfort of your</p>
        <p>own home with the ones you love, we say.</p>
      </div>
      <div className={styles.wrapper}>
        {pizzasInfo.map((pizzaInfo, index) => {
          return <PizzaCard pizzaInfo={pizzaInfo} key={index} />;
        })}
      </div>
    </div>
  );
};

export default PizzaList;
