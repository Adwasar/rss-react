export type CardItem = {
  title: string;
  price: number;
  image: string;
};

export type NavTitle = {
  title: string;
};

export type FormState = {
  inputName: string;
  inputSurname: string;
  inputDateOfBirth: string;
  inputRadioGender: string;
  selectDelivery: string;
  selectedImg: string;
  cards: FormCard[] | [];
  inputNameError: string;
};

export type FormCard = {
  name: string;
  surname: string;
  dateOfBirth: string;
  gender: string;
  delivery: string;
  avatar: string;
};

export type InputChangeEvent = {
  target: {
    value: string;
  };
};
