# react-bootstrap-confirmation

[![](https://github.com/nicolas-van/react-bootstrap-confirmation/workflows/Node%20CI/badge.svg)](https://github.com/nicolas-van/react-bootstrap-confirmation/actions) [![npm version](https://img.shields.io/npm/v/react-bootstrap-confirmation.svg)](https://www.npmjs.com/package/react-bootstrap-confirmation)

A library to easily display alerts and confirmations using React and Bootstrap. With react-bootstrap-confirmation
displaying an alert or a confirmation dialog is just as easy as calling a function:

```javascript
import {alert} from 'react-bootstrap-confirmation';

alert('Something very wrong happened!');
```

[See the demo here](https://nicolas-van.github.io/react-bootstrap-confirmation/).

## Installation

```bash
npm install --save react-bootstrap-confirmation
```

## Usage

### `alert(message[, options])`

An asynchronous function that will return once the alert has been dismissed.

#### Example

```javascript
import React, {useState} from 'react';
import {alert} from 'react-bootstrap-confirmation';

const AlertButton = () => {
  const display = async () => {
    await alert('Something very wrong is happening!');
    console.log('The alert has finished displaying');
  };
  return (
    <button type="button" className="btn btn-primary" onClick={display}>
      Display alert
    </button>
  );
};
```

#### Options

| Parameter name | Type | Description | Default |
| -------------- | ---- | ----------- | ------- |
| `title` | `string` | A facultative title to use for the modal. | `undefined` |
| `okText` | `string` | The text of the "OK" button | `"OK"` |
| `okButtonStyle` | `string` | The style of the "OK" button. Must correspond to one of the 6 button styles of Bootstrap. | `"primary"` |

### `confirm(message[, options])`

An asynchronous function that will return `true` if the user clicks the "OK" button and `false` in the other cases.

#### Example

```javascript
import React, {useState} from 'react';
import {confirm} from 'react-bootstrap-confirmation';

const ConfirmButton = () => {
  const display = async () => {
    const result = await alert('Are you really sure?');
    console.log('True if confirmed, false otherwise:', result);
  };
  return (
    <button type="button" className="btn btn-primary" onClick={display}>
      Display alert
    </button>
  );
};
```

#### Options

| Parameter name | Type | Description | Default |
| -------------- | ---- | ----------- | ------- |
| `title` | `string` | A facultative title to use for the modal. | `undefined` |
| `okText` | `string` | The text of the "OK" button | `"OK"` |
| `okButtonStyle` | `string` | The style of the "OK" button. Must correspond to one of the 6 button styles of Bootstrap. | `"primary"` |
| `cancelText` | `string` | The text of the "Cancel" button | `"Cancel"` |
| `cancelButtonStyle` | `string` | The style of the "Cancel" button. Must correspond to one of the 6 button styles of Bootstrap. | `"secondary"` |
