import { FormCard as FormCardType } from '../../types/data-types';

import styles from './FormCard.module.scss';

const FormCard = (props: FormCardType) => {
  return (
    <div className={styles['card-wrapper']}>
      <h3>FormCard</h3>
      <p>Name: {props.name}</p>
      <p>Surname: {props.surname}</p>
      <p>Date: {props.dateOfBirth}</p>
      <p>Gender: {props.gender}</p>
      <p>Shipping method: {props.delivery}</p>
    </div>
  );
};

export { FormCard };
