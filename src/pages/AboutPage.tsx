import { Header } from '../components/header';

const AboutPage = (props) => {
  return (
    <>
      <Header title={props.title} />
      <div className="wrapper">
        <h1>About us</h1>
        <p>some content about us</p>
      </div>
    </>
  );
};

export { AboutPage };
