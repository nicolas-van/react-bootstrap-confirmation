import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';
import {confirmable, createConfirmation} from 'react-confirm';

const Confirmation = ({show, proceed, dismiss, cancel, confirmation, title,
  confirmText, closeText, confirmButtonStyle, ...options}) => {
  const header = title ? (
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  ) : undefined;
  return (
    <Modal
      size="small"
      show={show}
      onHide={() => proceed(false)}
      backdrop="static"
      centered
    >
      {header}
      <Modal.Body>{confirmation}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => proceed(false)}>
          {closeText}
        </Button>
        <Button
          variant={confirmButtonStyle}
          onClick={() => proceed(true)}
        >
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

Confirmation.propTypes = {
  /** header title */
  title: PropTypes.string,
  confirmation: PropTypes.string, // arguments of your confirm function
  confirmText: PropTypes.string,
  closeText: PropTypes.string,
  confirmButtonStyle: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info', 'default']),
  show: PropTypes.bool, // from confirmable. indicates if the dialog is shown or not.
  proceed: PropTypes.func, // from confirmable. call to close the dialog with promise resolved.
  cancel: PropTypes.func, // from confirmable. call to close the dialog with promise rejected.
  dismiss: PropTypes.func,
};

Confirmation.defaultProps = {
  title: undefined,
  confirmation: undefined,
  confirmText: 'OK',
  closeText: 'Cancel',
  confirmButtonStyle: 'primary',
  show: undefined,
  proceed: undefined,
  cancel: undefined,
  dismiss: undefined,
};

const confirmLow = createConfirmation(confirmable(Confirmation));

export const confirm = (message, options = {}) => {
  return confirmLow(Object.assign({confirmation: message}, options));
};


const Alert = ({show, proceed, dismiss, cancel, confirmation, title,
  confirmText, confirmButtonStyle, ...options}) => {
  const header = title ? (
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  ) : undefined;
  return (
    <Modal
      size="small"
      show={show}
      onHide={() => proceed()}
      keyboard={true}
      backdrop="static"
      centered
    >
      {header}
      <Modal.Body>{confirmation}</Modal.Body>
      <Modal.Footer>
        <Button
          variant={confirmButtonStyle}
          onClick={() => proceed()}
        >
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

Alert.propTypes = {
  /** header title */
  title: PropTypes.string,
  confirmation: PropTypes.string, // arguments of your confirm function
  confirmText: PropTypes.string,
  closeText: PropTypes.string,
  confirmButtonStyle: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info', 'default']),
  show: PropTypes.bool, // from confirmable. indicates if the dialog is shown or not.
  proceed: PropTypes.func, // from confirmable. call to close the dialog with promise resolved.
  cancel: PropTypes.func, // from confirmable. call to close the dialog with promise rejected.
  dismiss: PropTypes.func,
};

Alert.defaultProps = {
  title: undefined,
  confirmation: undefined,
  confirmText: 'OK',
  confirmButtonStyle: 'primary',
  show: undefined,
  proceed: undefined,
  cancel: undefined,
  dismiss: undefined,
};

const alertLow = createConfirmation(confirmable(Alert));

export const alert = (message, options = {}) => {
  return alertLow(Object.assign({confirmation: message}, options));
};
