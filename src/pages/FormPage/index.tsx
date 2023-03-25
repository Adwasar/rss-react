import React from 'react';

import { Header } from '../../components/Header/Header';

import { NavTitle, FormState, InputChangeEvent } from '../../types/data-types';

class FormPage extends React.Component<NavTitle, FormState> {
  state = {
    inputName: 'name',
    inputSurname: 'surname',
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
          </form>
        </div>
      </>
    );
  }
}

export { FormPage };
