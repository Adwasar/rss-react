import { Header } from '../../components/Header';
import { Form } from '../../components/Form';

import { NavTitle } from '../../types/data-types';

const FormPage = (props: NavTitle) => {
  return (
    <>
      <Header title={props.title} />
      <div className="wrapper">
        <Form />
      </div>
    </>
  );
};

export { FormPage };
