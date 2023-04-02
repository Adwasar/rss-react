import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Card } from './components/Card';
import { AboutPage } from './pages/AboutPage';

const data = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 6499,
    image: './img/sneakers/1.png',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 6499,
    image: './img/sneakers/2.png',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 4199,
    image: './img/sneakers/3.png',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 4599,
    image: './img/sneakers/4.png',
  },
];

describe('Cards components', () => {
  it('List renders', () => {
    render(<Card price={data[0].price} image={data[0].image} title={data[0].title} />);
    expect(screen.getByText(/кроссовки/i)).toBeInTheDocument();
  });

  it('List renders', () => {
    render(<Card price={data[1].price} image={data[1].image} title={data[1].title} />);
    expect(screen.getByText(/кроссовки/i)).toBeInTheDocument();
  });

  it('List renders', () => {
    render(<Card price={data[2].price} image={data[2].image} title={data[2].title} />);
    expect(screen.getByText(/кроссовки/i)).toBeInTheDocument();
  });

  it('List renders', () => {
    render(<Card price={data[3].price} image={data[3].image} title={data[3].title} />);
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
