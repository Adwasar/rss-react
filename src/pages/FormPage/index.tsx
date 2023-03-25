import React from 'react';

import { Header } from '../../components/Header/Header';

import { NavTitle } from '../../types/data-types';

class FormPage extends React.Component<NavTitle> {
  render() {
    return (
      <>
        <Header title={this.props.title} />
        <div className="wrapper">
          <h1>Form</h1>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
            <br />
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" />
          </form>
        </div>
      </>
    );
  }
}

export { FormPage };
