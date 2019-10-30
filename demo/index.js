
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {confirm, alert} from '../dist/bundle';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Example = () => {
  return (
    <div className="container">
      <h1>react-bootstrap-confirmation demo</h1>
      <p>
        This is a demonstration of the{' '}
        <a href="https://github.com/nicolas-van/react-bootstrap-confirmation">react-bootstrap-confirmation</a>
        {' '}
        library, a library to easily display alerts and confirmations using React and Bootstrap.
      </p>
      <ExampleAlert/>
      <ExampleConfirmModal/>
    </div>
  );
};

const ExampleConfirmModal = () => {
  const [result, setResult] = useState();
  const displayConfirm = async () => {
    setResult(await confirm('Are you sure?'));
  };
  return <div className="card">
    <div className="card-body">
      <p>
        <button type="button" className="btn btn-primary" onClick={displayConfirm}>
          Display confirm modal
        </button>
      </p>
      {result !== undefined ? <p>Result: {JSON.stringify(result)}</p> : undefined}
    </div>
  </div>;
};

const ExampleAlert = () => {
  const [result, setResult] = useState();
  const display = async () => {
    await alert('Something is happening!');
    setResult(true);
  };
  return <div className="card">
    <div className="card-body">
      <p>
        <button type="button" className="btn btn-primary" onClick={display}>
          Display alert
        </button>
      </p>
      {result !== undefined ? <p>Alert was displayed</p> : undefined}
    </div>
  </div>;
};

ReactDOM.render(
    <Example/>,
    document.querySelector('#app'),
);
