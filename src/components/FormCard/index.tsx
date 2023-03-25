import { FormCard as FormCardType } from '../../types/data-types';

import styles from './FormCard.module.scss';

const FormCard = (props: FormCardType) => {
  return (
    <div className={styles['card-wrapper']}>
      <h3>FormCard</h3>
      <p>Name: {props.name}</p>
      <p>Surname: {props.surname}</p>
    </div>
  );
};

export { FormCard };
