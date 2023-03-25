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
};

export type InputChangeEvent = {
  target: {
    value: string;
  };
};
