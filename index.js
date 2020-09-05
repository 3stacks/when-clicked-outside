'use strict';

function whenClickedOutside(element, callback, config) {
    if (config === void 0) { config = {}; }
    var parsedElement;
    if (typeof element === 'string') {
        parsedElement = verifyElementExists(document.querySelector(element));
    }
    else if (element instanceof HTMLElement) {
        parsedElement = verifyElementExists(element);
    }
    else {
        throw new TypeError('whenClickedOutside was expecting a `string` or `HTMLElement`');
    }
    var listener = verifyClick.bind(null, parsedElement, callback);
    document.addEventListener('click', listener, config.options || {});
    return {
        element: element,
        destroy: function () {
            document.removeEventListener('click', listener, config.options || {});
        }
    };
}
function verifyElementExists(element) {
    if (!(element instanceof HTMLElement)) {
        throw new ReferenceError('Specified element does not exist');
    }
    return element;
}
function verifyClick(element, callback, event) {
    if (event.target !== element && !element.contains(event.target)) {
        callback(event);
    }
}

module.exports = whenClickedOutside;
