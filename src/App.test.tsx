import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Card } from './components/Card';
import { AboutPage } from './pages/AboutPage';

const data = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    image: './img/sneakers/1.png',
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    image: './img/sneakers/2.png',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    image: './img/sneakers/3.png',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    image: './img/sneakers/4.png',
  },
];

describe('Cards components', () => {
  it('List renders', () => {
    render(
      <Card
        image={data[0].image}
        name={data[0].name}
        clickOnCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/кроссовки/i)).toBeInTheDocument();
  });

  it('List renders', () => {
    render(
      <Card
        image={data[1].image}
        name={data[1].name}
        clickOnCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/кроссовки/i)).toBeInTheDocument();
  });

  it('List renders', () => {
    render(
      <Card
        image={data[2].image}
        name={data[2].name}
        clickOnCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/кроссовки/i)).toBeInTheDocument();
  });

  it('List renders', () => {
    render(
      <Card
        image={data[3].image}
        name={data[3].name}
        clickOnCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/кроссовки/i)).toBeInTheDocument();
  });
});

describe('About us', () => {
  it('AboutPage hes specific text', () => {
    render(
      <MemoryRouter>
        <AboutPage title={''} />
      </MemoryRouter>
    );
    expect(screen.getByText(/some content about us/i)).toBeInTheDocument();
  });
});
