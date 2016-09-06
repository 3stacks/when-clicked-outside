'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @param {String | HTMLElement} element
 * @param {Function} callback
 * @param {Object} config
 */
function whenClickedOutside(element, callback) {
    var config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var parsedElement = void 0;
    if (typeof element === 'string') {
        parsedElement = document.querySelector(element);
    } else {
        parsedElement = element;
    }

    var listener = verifyClick.bind(event, parsedElement, callback);
    document.addEventListener('click', listener, config.options || {});

    return {
        element: element,
        destroy: function destroy() {
            document.removeEventListener('click', listener, config.options || {});
        }
    };
}

function verifyClick(element, callback) {
    if (event.target !== element && !element.contains(event.target)) {
        callback(event);
    }
}

exports.whenClickedOutside = whenClickedOutside;