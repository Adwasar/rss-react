import { useState } from 'react';

import styles from './FilterBoard.module.scss';

export const FilterBoard = () => {
  const [inputFind, setInputFind] = useState('');

  const handleInputFindSubmit = () => {
    setInputFind('');
    localStorage.setItem('inputFind', inputFind);
  };

  return (
    <div className={styles['filter-board']}>
      <div className="wrapper">
        <div className={styles['search-wrapper']}>
          <input
            className={styles['search-input']}
            value={inputFind}
            onChange={(e) => setInputFind(e.target.value)}
            type="text"
          />
          <button className={styles['search-btn']} onClick={handleInputFindSubmit}>
            <img src="./icons/find.svg" alt="#" className={styles.test} />
          </button>
        </div>
      </div>
    </div>
  );
};
