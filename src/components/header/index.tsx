import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

export const Header = (props) => {
  return (
    <header className={styles['head-wrapper']}>
      <div className="wrapper">
        <div className={styles['head-content']}>
          <div style={{ color: 'red' }}>{props.title}</div>
          <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
