import { CardItem } from '../../types/data-types';

import styles from './Card.module.scss';

const Card = (props: CardItem) => {
  return (
    <>
      <div className={styles['card-wrapper']} onClick={props.clickOnCard}>
        <div
          className={styles['card-image']}
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <p className={styles['card-name']}>{props.name}</p>
      </div>
    </>
  );
};

export { Card };
