import { Header } from '../../components/Header/Header';

import { NavTitle } from '../../types/data-types';

const FormPage = (props: NavTitle) => {
  return (
    <>
      <Header title={props.title} />
      <div className="wrapper">
        <h1>Form</h1>
        <p>This will be form</p>
      </div>
    </>
  );
};

export { FormPage };
