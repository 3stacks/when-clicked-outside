export type Element = string | HTMLElement

export interface IClickedOutsideListener {
    destroy: () => void;
    element: Element
}

export interface ICreateClickedOutsideListenerConfig {
    options?: boolean | AddEventListenerOptions
}

export default function whenClickedOutside(element : Element, callback: (event: MouseEvent) => void, config: ICreateClickedOutsideListenerConfig = {}): IClickedOutsideListener {
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

function verifyElementExists(element: unknown) : HTMLElement {
    if (!(element instanceof HTMLElement)) {
        throw new ReferenceError('Specified element does not exist');
    }

    return element;
}

function verifyClick(element: HTMLElement, callback: (event: MouseEvent) => void, event: any): void {
    if (event.target !== element && !element.contains(event.target)) {
        callback(event);
    }
}