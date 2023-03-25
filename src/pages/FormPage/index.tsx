import React from 'react';
import styles from './FormPage.module.scss';

import { Header } from '../../components/Header/Header';
import { FormCard } from '../../components/FormCard';

import { NavTitle, FormState, InputChangeEvent } from '../../types/data-types';

class FormPage extends React.Component<NavTitle, FormState> {
  state = {
    inputName: '',
    inputSurname: '',
    cards: [
      { name: 'Vlad', surname: 'Bryl' },
      { name: 'Artem', surname: 'Mahenko' },
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

  handleCreateAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState(
      (prevState) => ({
        inputName: '',
        inputSurname: '',
        cards: [
          ...prevState.cards,
          { name: this.state.inputName, surname: this.state.inputSurname },
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
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={this.state.inputName}
              onChange={this.handleInputNameChange}
            />
            <br />
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              value={this.state.inputSurname}
              onChange={this.handleInputSurnameChange}
            />

            <button className={styles['submitBtn']} onClick={this.handleCreateAccount}>
              Create account
            </button>
          </form>

          {this.state.cards.map((card, i) => (
            <FormCard key={i} name={card.name} surname={card.surname} />
          ))}
        </div>
      </>
    );
  }
}

export { FormPage };
