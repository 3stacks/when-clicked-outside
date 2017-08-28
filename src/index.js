/**
 * @param {String | HTMLElement} element
 * @param {Function} callback
 * @param {Object} config
 */
export default function whenClickedOutside(element, callback, config = {}) {
    let parsedElement;

    if (typeof element === 'string') {
        parsedElement = verifyElementExists(document.querySelector(element));
    } else if (element instanceof HTMLElement) {
        parsedElement = verifyElementExists(element);
    } else {
        throw new TypeError('whenClickedOutside was expecting a `string` or `HTMLElement`')
    }

    const listener = verifyClick.bind(null, parsedElement, callback);

    document.addEventListener('click', listener, config.options || {});

    return {
        element: element,
        destroy() {
            document.removeEventListener('click', listener, config.options || {});
        }
    }
}

/**
 *
 * @param {HTMLElement} element
 * @returns {HTMLElement|ReferenceError}
 */
function verifyElementExists(element) {
    if (element instanceof HTMLElement === false) {
        throw new ReferenceError('Specified element does not exist');
    } else {
        return element;
    }
}

/**
 *
 * @param {HTMLElement} element
 * @param {Function} callback
 * @param {MouseEvent} event
 */
function verifyClick(element, callback, event) {
    if (event.target !== element && !element.contains(event.target)) {
        callback(event);
    }
}