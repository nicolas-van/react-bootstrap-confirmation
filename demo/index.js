
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import confirm from '../dist/bundle';

ReactDOM.render(
    <ExampleConfirmModal/>,
    document.querySelector('#app'),
);

/**
 * Do stuff
 * @param {*} confirmButtonStyle the style
 */
function displayModal(confirmButtonStyle) {
  confirm('Are you sure ?', {
    title: 'Confirm',
    confirmText: 'Delete',
    closeText: 'Cancel',
    confirmButtonStyle,
  }).then(
      () => {
        alert('onConfirm callback');
      },
      () => {
        alert('onCancel callback');
      },
  );
}

/**
 * Example
 * @return {*} stuff
 */
function ExampleConfirmModal() {
  return (
    <div className="container">
      <h1>Examples</h1>
      <p>
        <button type="button" className="btn btn-primary" onClick={() => displayModal('danger')}>
          Display Confirm Modal red style
        </button>
      </p>
      <p>
        <button type="button" className="btn btn-primary" onClick={() => displayModal('primary')}>
          Display Confirm Modal blue style
        </button>
      </p>
    </div>
  );
}
