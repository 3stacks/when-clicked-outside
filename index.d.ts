export interface ClickedOutsideListener {
    element : HTMLElement,
    destroy : () => void
}

declare function whenClickedOutside(element : HTMLElement, callback : (event : MouseEvent) => any) : ClickedOutsideListener;

export default whenClickedOutside;