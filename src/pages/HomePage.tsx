import { Card } from '../components/Card';
import data from '../components/data';

const HomePage = () => {
  return (
    <>
      <div className={'filter-board'}>
        <div className="wrapper">
          <div className={'search-wrapper'}>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="cards">
          {data.map((item, i) => {
            return (
              <Card key={i} price={data[i].price} image={data[i].image} title={data[i].title} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export { HomePage };
