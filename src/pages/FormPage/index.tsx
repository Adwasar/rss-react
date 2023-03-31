import React, { ChangeEvent } from 'react';
import styles from './FormPage.module.scss';

import { Header } from '../../components/Header';
import { FormCard } from '../../components/FormCard';

import {
  NavTitle,
  FormState,
  InputChangeEvent,
  FormCard as FormCardType,
} from '../../types/data-types';

class FormPage extends React.Component<NavTitle, FormState> {
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

  inputNameRef = React.createRef();
  inputSurnameRef = React.createRef();
  inputDateOfBirthRef = React.createRef();
  inputRadioGenderMrRef = React.createRef();
  inputRadioGenderMsRef = React.createRef();
  inputRadioGenderNoRef = React.createRef();
  selectDeliveryRef = React.createRef<HTMLSelectElement>();
  fileInputRef = React.createRef();

  showDoneMassage = () => {
    alert('information saved');
  };

  handleChange = () => {
    this.setState({
      inputName: (this.inputNameRef.current as HTMLInputElement).value,
      inputSurname: (this.inputSurnameRef.current as HTMLInputElement).value,
      inputDateOfBirth: (this.inputDateOfBirthRef.current as HTMLInputElement).value,
    });
  };

  validate = () => {
    let nameError = '';
    let surnameError = '';
    let dateOfBirthError = '';

    function checkFirstLetter(str: string) {
      const pattern = /^[A-Z]/;
      return pattern.test(str);
    }

    if (!checkFirstLetter(this.state.inputName[0])) {
      nameError = 'The first letter must be in uppercase';
    }
    if (!checkFirstLetter(this.state.inputSurname[0])) {
      surnameError = 'The first letter must be in uppercase';
    }
    if (!this.state.inputName) {
      nameError = 'Name not entered';
    }
    if (!this.state.inputSurname) {
      surnameError = 'Surname not entered';
    }
    if (!this.state.inputDateOfBirth) {
      dateOfBirthError = 'Date of birth not selected';
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
        inputDateOfBirthError: '',
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
                ref={this.inputNameRef as React.RefObject<HTMLInputElement>}
                type="text"
                id="name"
                value={this.state.inputName}
                onChange={this.handleChange}
              />
              <p className={styles.error}>{this.state.inputNameError}</p>
            </div>

            <div className={styles['form-input']}>
              <label htmlFor="surname">Surname:</label>
              <br />
              <input
                ref={this.inputSurnameRef as React.RefObject<HTMLInputElement>}
                type="text"
                id="surname"
                value={this.state.inputSurname}
                onChange={this.handleChange}
              />
              <p className={styles.error}>{this.state.inputSurnameError}</p>
            </div>

            <div className={styles['form-input']}>
              <label htmlFor="dateOfBirth">Date of birth:</label>
              <br />
              <input
                ref={this.inputDateOfBirthRef as React.RefObject<HTMLInputElement>}
                type="date"
                id="dateOfBirth"
                onChange={this.handleChange}
                value={this.state.inputDateOfBirth}
              />
              <p className={styles.error}>{this.state.inputDateOfBirthError}</p>
            </div>

            <div>
              {'Gender: (optional)'}
              <label className={styles['gender-radio']}>
                <input
                  ref={this.inputRadioGenderMrRef as React.RefObject<HTMLInputElement>}
                  type="radio"
                  name="gender"
                  value={'Mr'}
                  onClick={this.handleInputGenderChange}
                />
                {' Mr'}
              </label>
              <label className={styles['gender-radio']}>
                <input
                  ref={this.inputRadioGenderMsRef as React.RefObject<HTMLInputElement>}
                  type="radio"
                  name="gender"
                  value={'Ms'}
                  onClick={this.handleInputGenderChange}
                />
                {' Ms'}
              </label>
              <label className={styles['gender-radio']}>
                <input
                  ref={this.inputRadioGenderMsRef as React.RefObject<HTMLInputElement>}
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
                ref={this.selectDeliveryRef}
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
              {'Image: (optional)'}
              <br />
              <input
                ref={this.fileInputRef as React.RefObject<HTMLInputElement>}
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={this.handleImgChange}
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
