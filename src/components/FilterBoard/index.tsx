import React, { useState } from 'react';

import styles from './FilterBoard.module.scss';

export const FilterBoard = () => {
  const [inputFind, setInputFind] = useState('');

  const handleInputFindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFind(e.target.value);
    localStorage.setItem('inputFind', inputFind);
  };

  const handleInputFindSubmit = () => {
    setInputFind('');
  };

  return (
    <div className={styles['filter-board']}>
      <div className="wrapper">
        <div className={styles['search-wrapper']}>
          <input
            className={styles['search-input']}
            defaultValue={localStorage.getItem('inputFind') || ''}
            onChange={handleInputFindChange}
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
