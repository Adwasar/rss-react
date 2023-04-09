import { FormCard } from './index';

import { render, screen } from '@testing-library/react';

describe('formCards components', () => {
  it('render formCard', () => {
    render(
      <FormCard
        name="Vlad"
        surname="Bryl"
        dateOfBirth="1996-12-01"
        gender="Mr"
        delivery="Self"
        avatar=""
      />
    );
    expect(screen.getByText(/Vlad/i)).toBeInTheDocument();
    expect(screen.getByText(/Bryl/i)).toBeInTheDocument();
    expect(screen.getByText(/Mr/i)).toBeInTheDocument();
    expect(screen.getByText(/Self/i)).toBeInTheDocument();
  });
  it('render formCard', () => {
    render(
      <FormCard
        name="John"
        surname="Wick"
        dateOfBirth="1996-12-01"
        gender="Mr"
        delivery="Post"
        avatar=""
      />
    );
    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/Wick/i)).toBeInTheDocument();
    expect(screen.getByText(/Mr/i)).toBeInTheDocument();
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });
});
