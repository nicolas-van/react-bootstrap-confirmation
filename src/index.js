import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';
import {confirmable, createConfirmation} from 'react-confirm';

/**
 * A base confirmation class.
 */
class Confirmation extends React.PureComponent {
  /**
   * Handles key down.
   * @param {*} event The event.
   */
  handleKeyDown(event) {
    if (event.target.tagName !== 'BUTTON' && event.keyCode === 13) {
      this.props.proceed();
    }
  }

  /**
   * @override
   */
  render() {
    return (
      <Modal
        size="small"
        show={this.props.show}
        onHide={this.props.cancel}
        backdrop="static"
        keyboard={this.props.enableEscape}
        onKeyDown={(event) => this.handleKeyDown(event)}
        centered
      >
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.confirmation}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.cancel}>
            {this.props.closeText}
          </Button>
          <Button
            variant={this.props.confirmButtonStyle}
            onClick={this.props.proceed}
          >
            {this.props.confirmText}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

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
  enableEscape: PropTypes.bool,
};

Confirmation.defaultProps = {
  title: 'Confirm',
  confirmation: undefined,
  confirmText: 'OK',
  closeText: 'Cancel',
  confirmButtonStyle: 'primary',
  show: undefined,
  proceed: undefined,
  cancel: undefined,
  enableEscape: true,
};

const confirm = createConfirmation(confirmable(Confirmation));

export default (confirmation, options = {}) => {
  return confirm(Object.assign({confirmation}, options));
};
