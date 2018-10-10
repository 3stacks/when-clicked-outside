declare function whenClickedOutside(element : HTMLElement, callback : (event : MouseEvent) => any) : {
    element : HTMLElement,
    destroy : () => void
};

export default whenClickedOutside;