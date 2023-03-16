import styles from './Card.module.scss';

const Card = (props) => {
  return (
    <>
      <div className={styles['card-wrapper']}>
        <div
          className={styles['card-image']}
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <p className={styles['card-title']}>{props.title}</p>
        <span className={styles['card-cost']}>ЦЕНА:</span>
        <br />
        <span className={styles['card-price']}>{props.price} грн</span>
      </div>
    </>
  );
};

export { Card };
