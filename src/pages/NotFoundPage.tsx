import { Header } from '../components/header';

const NotFoundPage = (props) => {
  return (
    <>
      <Header title={props.title} />
      <div className="wrapper">
        <h1>Not found</h1>
        <p>This page not found</p>
      </div>
    </>
  );
};

export { NotFoundPage };
