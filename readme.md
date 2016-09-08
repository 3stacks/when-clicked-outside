Add a click listener to fire a callback for everywhere on the window except your chosen element. 

# Installation

- run `npm install @lukeboyle/when-clicked-outside`

# Basic Usage

```javascript

// ES6
import whenClickedOutside from '@lukeboyle/when-clicked-outside';
// CommonJs
const whenClickedOutside = require('@lukeboyle/when-clicked-outside');

whenClickedOutside('#element', whenClickedOutsideCallback, {});

function whenClickedOutsideCallback(event) {
    console.log('hello');
}

```

# Advanced Usage

```javascript

// ES6
import whenClickedOutside from '@lukeboyle/when-clicked-outside';
// CommonJs
const whenClickedOutside = require('@lukeboyle/when-clicked-outside');

const listener = whenClickedOutside('#element', whenClickedOutsideCallback, {});

function whenClickedOutsideCallback(event) {
    console.log('hello');
    listener.destroy();
}

```

# API

## whenClickedOutside

### Arguments

#### Element

Type: querySelector String OR HTMLElement

e.g. 'body', '.class-name', '#id', document.getElementById('id')

#### Callback

Type: Function

#### Config

Type: Object

To set the standard addEventListener, add an 'options' element to the config object

### Returns

Returns an object with a reference to your element, and a destroy function to remove the listener.
