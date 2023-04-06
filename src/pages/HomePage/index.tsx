import { useState, useEffect } from 'react';

import { Data, NavTitle } from '../../types/data-types';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { FilterBoard } from '../../components/FilterBoard';

const HomePage = (props: NavTitle) => {
  const [data, setData] = useState<Data>({
    results: [],
  });

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log(data.results);
  }, [data]);

  return (
    <>
      <Header title={props.title} />
      <FilterBoard />
      <div className="wrapper">
        <div className="cards">
          {data.results &&
            data.results.map((_, i) => {
              return (
                <Card
                  key={data.results[i].id}
                  image={data.results[i].image}
                  name={data.results[i].name}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export { HomePage };
