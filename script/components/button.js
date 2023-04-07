import { addCart } from "../pajes/cart.js";

export const addButton = (item, className) => {
    let button = document.createElement('button');
    button.classList.add(className);
    button.innerText = 'Add to cart';
    button.addEventListener('click', () => {
        addCart(item);
    });

    return button;
}