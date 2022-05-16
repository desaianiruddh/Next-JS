import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useSelector } from "react-redux";
const Navbar = () => {
  const {quantity} = useSelector((state) => state.cart);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>800 055 5577</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
          <Link href='/'> Home </Link>
          
          </li>
          <li className={styles.listItem}>Products</li>
          <Image src="/img/logo.png" alt="logo" width="90px" height="69px" />
          <li className={styles.listItem}>Signup</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href='/cart'>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
