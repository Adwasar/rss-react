import React, { useEffect, useState } from 'react';

import { Data } from '../../types/data-types';

import { Loader } from '../Loader';

import styles from './FilterBoard.module.scss';

export const FilterBoard = (props: { onFilterResult: (value: Data) => void }) => {
  const [inputFind, setInputFind] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedValue = localStorage.getItem('currentInputFindValue');
    if (savedValue) {
      setInputFind(savedValue);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/?name=${inputFind}`)
        .then((response) => response.json())
        .then((data) => props.onFilterResult(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 200);
  }, [inputFind]);

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
    <>
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
      {isLoading && <Loader />}
    </>
  );
};
