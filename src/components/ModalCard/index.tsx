import { useState, useEffect } from 'react';

import { CardModal } from '../../types/data-types';

import styles from './ModalCard.module.scss';

export const ModalCard = (props: CardModal) => {
  const [color, setColor] = useState('grey');

  useEffect(() => {
    if (props.status === 'Alive') {
      setColor('green');
    } else if (props.status === 'Dead') {
      setColor('red');
    }
  }, [props.status]);

  return (
    <div className={styles['over-modal']} onClick={props.clickModalOutside}>
      <div className={styles['modal-wrapper']} onClick={(e) => e.stopPropagation()}>
        <img className={styles['modal-img']} src={props.image} alt="character" />
        <div className={styles['modal-info']}>
          <p className={styles['character-name']}>{props.name}</p>
          <p className={styles['character-species']}>{props.species}</p>
          <span> - </span>
          <p className={styles['character-status']}>{props.status}</p>
          <div
            className={styles['character-status-marker']}
            style={{ backgroundColor: color }}
          ></div>
          <div className={styles['character-gender']}>
            <p className={styles['character-gender-title']}>Gender: </p>
            <p className={styles['character-gender-value']}>{props.gender}</p>
          </div>
          <div className={styles['character-status-location']}>
            <p className={styles['character-status-location-title']}>Last known location: </p>
            <p className={styles['character-status-location-value']}>{props.location}</p>
          </div>
          <div className={styles['character-status-origin']}>
            <p className={styles['character-status-origin-title']}>Origin: </p>
            <p className={styles['character-status-origin-value']}>{props.origin}</p>
          </div>
        </div>

        <button className={styles['close-btn']} onClick={props.closeModalCard}>
          <img className={styles['modal-xmark']} src="./icons/xmark-solid.svg" alt="close" />
        </button>
      </div>
    </div>
  );
};
