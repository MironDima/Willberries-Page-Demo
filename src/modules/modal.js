import { renderCart } from "./renderCart";

const modal = () => {
	const btnCart = document.querySelector('.button-cart');
	const modalCart = document.querySelector('#modal-cart');
	const btnClose = document.querySelector('.modal-close');
	btnCart.addEventListener('click', () => {
		modalCart.style.display = 'flex';
		const cartArray = localStorage.getItem('cart') ? 
		JSON.parse(localStorage.getItem('cart')) : [];
		renderCart(cartArray)
	})
	btnClose.addEventListener('click', () => {
		modalCart.style.display = 'none';
	})
}

export { modal }