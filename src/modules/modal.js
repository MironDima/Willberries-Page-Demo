const modal = () => {
	const btnCart = document.querySelector('.button-cart');
	const modalCart = document.querySelector('#modal-cart');
	const btnClose = document.querySelector('.modal-close');
	btnCart.addEventListener('click', () => {
		modalCart.style.display = 'block';
	})
	btnClose.addEventListener('click', () => {
		modalCart.style.display = 'none';
	})
}

export { modal }