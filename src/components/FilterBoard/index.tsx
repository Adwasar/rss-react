import React, { useEffect, useState } from 'react';

import styles from './FilterBoard.module.scss';

export const FilterBoard = () => {
  const [inputFind, setInputFind] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('currentInputFindValue');
    if (savedValue) {
      setInputFind(savedValue);
    }
  }, []);

  const handleInputFindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFind(e.target.value);
    localStorage.setItem('currentInputFindValue', e.target.value);
  };

  const handleInputFindSubmit = () => {
    localStorage.setItem('currentInputFindValue', '');
    localStorage.setItem('submitedInputFindValue', inputFind);
    setInputFind('');
  };

  return (
    <div className={styles['filter-board']}>
      <div className="wrapper">
        <div className={styles['search-wrapper']}>
          <input
            className={styles['search-input']}
            value={inputFind}
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
