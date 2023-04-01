import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

import { NavTitle } from '../../types/data-types';

export const Header = (props: NavTitle) => {
  return (
    <header className={styles['head-wrapper']}>
      <div className="wrapper">
        <div className={styles['head-content']}>
          <div style={{ color: 'red' }}>{props.title}</div>
          <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/formFn">FormFn</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
