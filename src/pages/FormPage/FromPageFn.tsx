import React, { useEffect, useState } from 'react';

import styles from './FormPage.module.scss';

import { Header } from '../../components/Header';
import { FormCard } from '../../components/FormCard';

import { NavTitle, FormCard as FormCardType } from '../../types/data-types';

const FormPageFn = (props: NavTitle) => {
  const [inputName, setInputName] = useState('');
  const [inputSurname, setInputSurname] = useState('');
  const [inputDateOfBirth, setInputDateOfBirth] = useState('');
  const [inputRadioGender, setInputRadioGender] = useState('inputRadioGender');
  const [selectDelivery, setSelectDelivery] = useState('Self');
  const [selectedImg, setSelectedImg] = useState(
    'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png'
  );
  const [cards, setCards] = useState<FormCardType[]>([]);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  function submitForm(event: React.FormEvent) {
    event.preventDefault();

    const newCard = {
      name: inputName,
      surname: inputSurname,
      dateOfBirth: inputDateOfBirth,
      gender: inputRadioGender,
      delivery: selectDelivery,
      avatar: selectedImg,
    };

    setCards((prevCards) => [...prevCards, newCard]);
  }

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
              <input
                type="radio"
                name="gender"
                value={'Mr'}
                onChange={() => setInputRadioGender('Mr')}
              />
              {' Mr'}
            </label>
            <label className={styles['gender-radio']}>
              <input
                type="radio"
                name="gender"
                value={'Ms'}
                onChange={() => setInputRadioGender('Ms')}
              />
              {' Ms'}
            </label>
            <label className={styles['gender-radio']}>
              <input
                type="radio"
                name="gender"
                value={'Prefer not sey'}
                onChange={() => setInputRadioGender('Prefer not sey')}
              />
              {' Prefer not sey'}
            </label>
          </div>

          <label htmlFor="select" className={styles['from-select']}>
            Shipping method:
            <br />
            <select
              name="select"
              id="select"
              value={selectDelivery}
              onChange={(e) => setSelectDelivery(e.target.value)}
            >
              <option value="Self">Self delivery</option>
              <option value="Postal">Postal delivery</option>
              <option value="Courier">Courier delivery</option>
            </select>
          </label>

          <label htmlFor="img" className={styles['form-img']}>
            {'Image: (optional)'}
            <br />
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => {
                    if (typeof reader.result === 'string') {
                      setSelectedImg(reader.result);
                    }
                  };
                }
              }}
            />
          </label>

          <button className={styles['submitBtn']} onClick={submitForm}>
            Create account
          </button>
        </form>

        <div className={styles.cards}>
          {cards.map((card: FormCardType, i) => (
            <FormCard
              key={i}
              name={card.name}
              surname={card.surname}
              dateOfBirth={card.dateOfBirth}
              gender={card.gender}
              delivery={card.delivery}
              avatar={card.avatar}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { FormPageFn };
