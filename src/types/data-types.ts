export type Data = {
  results: Results[];
  info?: Info;
};

export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: number;
};

export type Results = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CardItem = {
  name: string;
  image: string;
  species?: string;
  clickOnCard: () => void;
};

export type CardModal = {
  closeModalCard: () => void;
  clickModalOutside: () => void;
  image: string;
  name: string;
  species: string;
  status: string;
  location: string;
  origin: string;
  gender: string;
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
  inputSurnameError: string;
  inputDateOfBirthError: string;
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
