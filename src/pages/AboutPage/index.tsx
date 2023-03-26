import { Header } from '../../components/Header';

import { NavTitle } from '../../types/data-types';

const AboutPage = (props: NavTitle) => {
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
