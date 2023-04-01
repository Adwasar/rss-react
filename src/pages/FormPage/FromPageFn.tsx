import React, { useState } from 'react';

import styles from './FormPage.module.scss';

import { Header } from '../../components/Header';

import { NavTitle } from '../../types/data-types';

const FormPageFn = (props: NavTitle) => {
  const [inputName, setInputName] = useState('');
  const [inputSurname, setInputSurname] = useState('');
  const [inputDateOfBirth, setInputDateOfBirth] = useState('');

  return (
    <>
      <Header title={props.title} />
      <div className="wrapper">
        <h1>Form</h1>
        <form className={styles.form}>
          <div className={styles['form-input']}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <p className={styles.error}></p>
          </div>

          <div className={styles['form-input']}>
            <label htmlFor="surname">Surname:</label>
            <br />
            <input
              type="text"
              id="surname"
              value={inputSurname}
              onChange={(e) => setInputSurname(e.target.value)}
            />
            <p className={styles.error}></p>
          </div>

          <div className={styles['form-input']}>
            <label htmlFor="dateOfBirth">Date of birth:</label>
            <br />
            <input
              type="date"
              id="dateOfBirth"
              value={inputDateOfBirth}
              onChange={(e) => setInputDateOfBirth(e.target.value)}
            />
            <p className={styles.error}></p>
          </div>

          <div>
            {'Gender: (optional)'}
            <label className={styles['gender-radio']}>
              <input type="radio" name="gender" value={'Mr'} />
              {' Mr'}
            </label>
            <label className={styles['gender-radio']}>
              <input type="radio" name="gender" value={'Ms'} />
              {' Ms'}
            </label>
            <label className={styles['gender-radio']}>
              <input type="radio" name="gender" value={'Prefer not sey'} />
              {' Prefer not sey'}
            </label>
          </div>

          <label htmlFor="select" className={styles['from-select']}>
            Shipping method:
            <br />
            <select name="select" id="select">
              <option value="Self">Self delivery</option>
              <option value="Postal">Postal delivery</option>
              <option value="Courier">Courier delivery</option>
            </select>
          </label>

          <label htmlFor="img" className={styles['form-img']}>
            {'Image: (optional)'}
            <br />
            <input type="file" id="img" name="img" accept="image/*" />
          </label>

          <button className={styles['submitBtn']}>Create account</button>
        </form>

        <div className={styles.cards}></div>
      </div>
    </>
  );
};

export { FormPageFn };
