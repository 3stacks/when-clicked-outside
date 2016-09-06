/**
 * @param {String | HTMLElement} element
 * @param {Function} callback
 * @param {Object} config
 */
export function whenClickedOutside(element, callback, config = {}) {
    let parsedElement;
    if (typeof element === 'string') {
        parsedElement = document.querySelector(element);
    } else {
        parsedElement = element;
    }

    const listener = verifyClick.bind(event, parsedElement, callback);
    document.addEventListener('click', listener, config.options || {});

    return {
        element: element,
        destroy() {
            document.removeEventListener('click', listener, config.options || {});
        }
    }
}

function verifyClick(element, callback) {
    if (event.target !== element && !element.contains(event.target)) {
        callback(event);
    }
}