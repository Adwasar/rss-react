import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card';
import { FilterBoard } from '../../components/FilterBoard';

import data from '../../components/data';

import { NavTitle } from '../../types/data-types';

const HomePage = (props: NavTitle) => {
  return (
    <>
      <Header title={props.title} />
      <FilterBoard />
      <div className="wrapper">
        <div className="cards">
          {data.map((_, i) => {
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
