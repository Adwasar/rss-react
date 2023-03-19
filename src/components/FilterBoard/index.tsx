import styles from './FilterBoard.module.scss';

const FilterBoard = () => {
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

export default FilterBoard;
