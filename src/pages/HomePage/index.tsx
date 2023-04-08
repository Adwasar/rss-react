import { useState, useEffect } from 'react';

import { Data, NavTitle, SelectedCardModal } from '../../types/data-types';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { FilterBoard } from '../../components/FilterBoard';
import { ModalCard } from '../../components/ModalCard';

const HomePage = (props: NavTitle) => {
  const [data, setData] = useState<Data>({
    results: [],
  });
  const [modalCard, setModalCard] = useState(false);
  const [selectedCard, setSelectedApiCard] = useState<SelectedCardModal | null>(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClickOnCard = (index: number) => {
    setModalCard(true);
    fetch(`https://rickandmortyapi.com/api/character/${index + 1}`)
      .then((response) => response.json())
      .then((data) => setSelectedApiCard(data))
      .catch((error) => console.error(error));
  };

  const handleCloseModalCard = () => {
    setModalCard(false);
  };

  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);

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
      {modalCard && selectedCard !== null && (
        <ModalCard
          closeModalCard={handleCloseModalCard}
          image={selectedCard.image}
          name={selectedCard.name}
          species={selectedCard.species}
          status={selectedCard.status}
          gender={selectedCard?.gender}
          location={selectedCard?.location?.name}
          origin={selectedCard?.origin?.name}
        />
      )}
    </>
  );
};

export { HomePage };
