import { CardModal } from '../../types/data-types';

import styles from './ModalCard.module.scss';

export const ModalCard = (props: CardModal) => {
  return (
    <div className={styles['over-modal']} onClick={props.clickModalOutside}>
      <div
        className={styles['modal-wrapper']}
        style={{ backgroundImage: `url(${props.image})` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles['close-btn']} onClick={props.closeModalCard}>
          X
        </button>
      </div>
    </div>
  );
};
