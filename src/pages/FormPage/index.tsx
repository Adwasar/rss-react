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
    cards: [
      { name: 'Vlad', surname: 'Bryl', dateOfBirth: '1996-03-16' },
      { name: 'Artem', surname: 'Mahenko', dateOfBirth: '1993-12-10' },
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

  handleCreateAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState(
      (prevState) => ({
        inputName: '',
        inputSurname: '',
        inputDateOfBirth: '',
        cards: [
          ...prevState.cards,
          {
            name: this.state.inputName,
            surname: this.state.inputSurname,
            dateOfBirth: this.state.inputDateOfBirth,
          },
        ],
      }),
      () => console.log(this.state.cards)
    );
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
            />

            <button className={styles['submitBtn']} onClick={this.handleCreateAccount}>
              Create account
            </button>
          </form>

          {this.state.cards.map((card, i) => (
            <FormCard
              key={i}
              name={card.name}
              surname={card.surname}
              dateOfBirth={card.dateOfBirth}
            />
          ))}
        </div>
      </>
    );
  }
}

export { FormPage };
