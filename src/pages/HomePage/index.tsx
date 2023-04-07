import { useState, useEffect } from 'react';

import { Data, NavTitle } from '../../types/data-types';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { FilterBoard } from '../../components/FilterBoard';
import { ModalCard } from '../../components/ModalCard';

const HomePage = (props: NavTitle) => {
  const [data, setData] = useState<Data>({
    results: [],
  });
  const [modalCard, setModalCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClickOnCard = (index: number) => {
    setModalCard(true);
    setSelectedCard(index);
  };

  const handleCloseModalCard = () => {
    setModalCard(false);
  };

  const handleClickModalOutside = () => {
    setModalCard(false);
  };

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
                  clickOnCard={() => handleClickOnCard(i)}
                />
              );
            })}
        </div>
      </div>
      {modalCard && (
        <ModalCard
          closeModalCard={handleCloseModalCard}
          clickModalOutside={handleClickModalOutside}
          image={data.results[selectedCard].image}
          name={data.results[selectedCard].name}
          species={data.results[selectedCard].species}
          status={data.results[selectedCard].status}
          location={data.results[selectedCard].location.name}
          origin={data.results[selectedCard].origin.name}
          gender={data.results[selectedCard].gender}
        />
      )}
    </>
  );
};

export { HomePage };
