import { Header } from '../components/header';

import { NavTitle } from '../types/data-types';

const AboutPage = (props: NavTitle) => {
  console.log(props);
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
