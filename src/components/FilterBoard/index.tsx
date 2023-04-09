import styles from './FilterBoard.module.scss';

export const FilterBoard = () => {
  return (
    <div className={styles['filter-board']}>
      <div className="wrapper">
        <div className={styles['search-wrapper']}>
          <input className={styles['search-input']} type="text" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};
