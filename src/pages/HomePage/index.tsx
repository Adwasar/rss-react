import { useState, useEffect } from 'react';

import { Data, NavTitle, SelectedCardModal, Results } from '../../types/data-types';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { FilterBoard } from '../../components/FilterBoard';
import { ModalCard } from '../../components/ModalCard';
import { Loader } from '../../components/Loader';

const HomePage = (props: NavTitle) => {
  const [data, setData] = useState<Data>({
    results: [],
  });
  const [modalCard, setModalCard] = useState(false);
  const [selectedCard, setSelectedApiCard] = useState<SelectedCardModal | null>(null);
  const [filterResult, setFilterResult] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleFilterResult = (value: Data) => {
    setFilterResult(value);
  };

  const handleClickOnCard = (id: number) => {
    setModalCard(true);
    setIsLoading(true);
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => setSelectedApiCard(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, 300);
  };

  const handleCloseModalCard = () => {
    setModalCard(false);
    setSelectedApiCard(null);
  };

  return (
    <>
      <Header title={props.title} />
      <FilterBoard onFilterResult={handleFilterResult} />
      <div className="wrapper">
        <div className="cards">
          {filterResult.results &&
            filterResult.results.map((card: Results, i) => {
              return (
                <Card
                  key={filterResult.results[i].id}
                  image={filterResult.results[i].image}
                  name={filterResult.results[i].name}
                  clickOnCard={() => handleClickOnCard(card.id)}
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
      {isLoading && <Loader />}
    </>
  );
};

export { HomePage };
