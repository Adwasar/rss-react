import { Header } from '../components/Header';
import { Card } from '../components/Card';
import data from '../components/data';
import FilterBoard from '../components/FilterBoard';

import { NavTitle } from '../types/data-types';

const HomePage = (props: NavTitle) => {
  return (
    <>
      <Header title={props.title} />
      <FilterBoard />
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
