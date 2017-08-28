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

# Changelog

## 2.0.4

- fix: remove reference to window.event to address a bug in firefox

## 2.0.3

- fix: add explicit reference to the `MouseEvent` in click verification function

## 2.0.2

- docs: update the readme with commonJs require

## 2.0.1

- fix: build issue when publishing

## 2.0.0

- breaking change: Export whenClickedOutside by default

## 1.0.2

- refactor: tidy verifyElementExists function

## 1.0.1

- fix: add error handling for incorrect types
- fix: add error handling for non-existent elements