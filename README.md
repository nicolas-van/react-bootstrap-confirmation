# react-bootstrap-confirmation

[![](https://github.com/nicolas-van/react-bootstrap-confirmation/workflows/Node%20CI/badge.svg)](https://github.com/nicolas-van/react-bootstrap-confirmation/actions) [![npm version](https://img.shields.io/npm/v/react-bootstrap-confirmation.svg)](https://www.npmjs.com/package/react-bootstrap-confirmation)

A library to easily display alerts and confirmations using React and Bootstrap. With react-bootstrap-confirmation
display an alert or a confirmation dialog is just as easy as calling a function:

```javascript
import React, {useState} from 'react';
import {alert} from 'react-bootstrap-confirmation';

const AlertButton = () => {
  const display = async () => {
    await alert('Something very wrong is happening!');
  };
  return (
    <button type="button" className="btn btn-primary" onClick={display}>
      Display alert
    </button>
  );
};
```

## Installation

```bash
npm install --save react-bootstrap-confirmation
```

## Usage

### `alert(message[, options])`

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

### `confirm(message[, options])`

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
