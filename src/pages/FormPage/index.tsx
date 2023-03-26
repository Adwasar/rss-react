import React, { ChangeEvent } from 'react';
import styles from './FormPage.module.scss';

import { Header } from '../../components/Header/Header';
import { FormCard } from '../../components/FormCard';

import {
  NavTitle,
  FormState,
  InputChangeEvent,
  FormCard as FormCardType,
} from '../../types/data-types';

class FormPage extends React.Component<NavTitle, FormState> {
  fileInputRef = React.createRef();
  state = {
    inputName: '',
    inputSurname: '',
    inputDateOfBirth: '',
    inputRadioGender: 'Prefer not sey',
    selectDelivery: 'Self',
    selectedImg:
      'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png',
    cards: [],
    inputNameError: '',
    inputSurnameError: '',
    inputDateOfBirthError: '',
  };

  showDoneMassage = () => {
    alert('information saved');
  };

  validate = () => {
    let nameError = '';
    let surnameError = '';
    let dateOfBirthError = '';

    if (!this.state.inputName) {
      nameError = 'Name not entered';
    }
    if (!this.state.inputSurname) {
      surnameError = 'Surname not entered';
    }
    if (!this.state.inputDateOfBirth) {
      dateOfBirthError = 'Date of birth not entered';
    }

    if (nameError || surnameError || dateOfBirthError) {
      this.setState({
        inputNameError: nameError,
        inputSurnameError: surnameError,
        inputDateOfBirthError: dateOfBirthError,
      });
      return false;
    }

    return true;
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

  handleImgChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          this.setState({
            selectedImg: reader.result,
          });
        }
      };
    }
  };

  handleCreateAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isValid = this.validate();
    this.validate();
    console.log(isValid);

    if (isValid) {
      this.setState((prevState) => ({
        inputName: '',
        inputSurname: '',
        inputDateOfBirth: '',
        inputRadioGender: 'Prefer not sey',
        selectDelivery: 'Self',
        selectedImg:
          'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png',
        cards: [
          ...prevState.cards,
          {
            name: this.state.inputName,
            surname: this.state.inputSurname,
            dateOfBirth: this.state.inputDateOfBirth,
            gender: this.state.inputRadioGender,
            delivery: this.state.selectDelivery,
            avatar: this.state.selectedImg,
          },
        ],
        inputNameError: '',
        inputSurnameError: '',
      }));

      this.showDoneMassage();

      const fileInput = this.fileInputRef.current as HTMLInputElement;
      if (fileInput.form) {
        fileInput.form.reset();
      }

      //сбрасываем значения радиокнопок:
      const genderRadios = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
      genderRadios.forEach((radio) => {
        radio.checked = false;
      });
    }
  };

  render() {
    return (
      <>
        <Header title={this.props.title} />
        <div className="wrapper">
          <h1>Form</h1>
          <form className={styles.form}>
            <div className={styles['form-input']}>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                id="name"
                value={this.state.inputName}
                onChange={this.handleInputNameChange}
              />
              <p className={styles.error}>{this.state.inputNameError}</p>
            </div>

            <div className={styles['form-input']}>
              <label htmlFor="surname">Surname:</label>
              <br />
              <input
                type="text"
                id="surname"
                value={this.state.inputSurname}
                onChange={this.handleInputSurnameChange}
              />
              <p className={styles.error}>{this.state.inputSurnameError}</p>
            </div>

            <div className={styles['form-input']}>
              <label htmlFor="dateOfBirth">Date of birth:</label>
              <br />
              <input
                type="date"
                id="dateOfBirth"
                onChange={this.handleInputDateOfBirthChange}
                value={this.state.inputDateOfBirth}
              />
              <p className={styles.error}>{this.state.inputDateOfBirthError}</p>
            </div>

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

            <label htmlFor="img" className={styles['form-img']}>
              Image:
              <br />
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={this.handleImgChange}
                ref={this.fileInputRef as React.RefObject<HTMLInputElement>}
              />
            </label>

            <button className={styles['submitBtn']} onClick={this.handleCreateAccount}>
              Create account
            </button>
          </form>

          <div className={styles.cards}>
            {this.state.cards.map((card: FormCardType, i) => (
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
  }
}

export { FormPage };
