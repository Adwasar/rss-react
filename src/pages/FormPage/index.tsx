import React from 'react';
import styles from './FormPage.module.scss';

import { Header } from '../../components/Header/Header';
import { FormCard } from '../../components/FormCard';

import { NavTitle, FormState, InputChangeEvent } from '../../types/data-types';

class FormPage extends React.Component<NavTitle, FormState> {
  state = {
    inputName: '',
    inputSurname: '',
    inputDateOfBirth: '',
    inputRadioGender: 'Prefer not sey',
    selectDelivery: 'Self',
    cards: [
      { name: 'Vlad', surname: 'Bryl', dateOfBirth: '1996-03-16', gender: 'Mr', delivery: 'Self' },
    ],
  };

  handleInputNameChange = ({ target: { value } }: InputChangeEvent) => {
    this.setState({
      inputName: value,
    });
  };

  handleInputSurnameChange = ({ target: { value } }: InputChangeEvent) => {
    this.setState({
      inputSurname: value,
    });
  };

  handleInputDateOfBirthChange = ({ target: { value } }: InputChangeEvent) => {
    this.setState({
      inputDateOfBirth: value,
    });
  };

  handleInputGenderChange: React.MouseEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    this.setState({
      inputRadioGender: input.value,
    });
  };

  handleSelectShippingMethod = ({ target: { value } }: InputChangeEvent) => {
    this.setState({
      selectDelivery: value,
    });
  };

  handleCreateAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState((prevState) => ({
      inputName: '',
      inputSurname: '',
      inputDateOfBirth: '',
      inputRadioGender: 'Prefer not sey',
      selectDelivery: 'Self',
      cards: [
        ...prevState.cards,
        {
          name: this.state.inputName,
          surname: this.state.inputSurname,
          dateOfBirth: this.state.inputDateOfBirth,
          gender: this.state.inputRadioGender,
          delivery: this.state.selectDelivery,
        },
      ],
    }));

    //сбрасываем значения радиокнопок:
    const genderRadios = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
    genderRadios.forEach((radio) => {
      radio.checked = false;
    });
  };

  render() {
    return (
      <>
        <Header title={this.props.title} />
        <div className="wrapper">
          <h1>Form</h1>
          <form className={styles.form}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={this.state.inputName}
              onChange={this.handleInputNameChange}
              className={styles['form-input']}
            />
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              value={this.state.inputSurname}
              onChange={this.handleInputSurnameChange}
              className={styles['form-input']}
            />

            <label htmlFor="dateOfBirth">Date of birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              className={styles['form-input']}
              onChange={this.handleInputDateOfBirthChange}
              value={this.state.inputDateOfBirth}
            />

            <div>
              Gender:
              <label className={styles['gender-radio']}>
                <input
                  id="genderMr"
                  type="radio"
                  name="gender"
                  value={'Mr'}
                  onClick={this.handleInputGenderChange}
                />
                {' Mr'}
              </label>
              <label className={styles['gender-radio']}>
                <input
                  id="genderMs"
                  type="radio"
                  name="gender"
                  value={'Ms'}
                  onClick={this.handleInputGenderChange}
                />
                {' Ms'}
              </label>
              <label className={styles['gender-radio']}>
                <input
                  id="genderNo"
                  type="radio"
                  name="gender"
                  value={'Prefer not sey'}
                  onClick={this.handleInputGenderChange}
                />
                {' Prefer not sey'}
              </label>
            </div>

            <label htmlFor="select" className={styles['from-select']}>
              Shipping method:
              <br />
              <select
                value={this.state.selectDelivery}
                name="select"
                id="select"
                onChange={this.handleSelectShippingMethod}
              >
                <option value="Self">Self delivery</option>
                <option value="Postal">Postal delivery</option>
                <option value="Courier">Courier delivery</option>
              </select>
            </label>

            <button className={styles['submitBtn']} onClick={this.handleCreateAccount}>
              Create account
            </button>
          </form>

          <div className={styles.cards}>
            {this.state.cards.map((card, i) => (
              <FormCard
                key={i}
                name={card.name}
                surname={card.surname}
                dateOfBirth={card.dateOfBirth}
                gender={card.gender}
                delivery={card.delivery}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export { FormPage };
