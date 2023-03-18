import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{ color: 'red' }}>current page</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </header>
  );
};
