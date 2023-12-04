const modal = () => {
	const btnCart = document.querySelector('.button-cart');
	const modalCart = document.querySelector('#modal-cart');
	const btnClose = document.querySelector('.modal-close');
	const goodLogCards = document.querySelector('.long-goods-list');
	btnCart.addEventListener('click', () => {
		modalCart.style.display = 'block';
	})
	btnClose.addEventListener('click', () => {
		modalCart.style.display = 'none';
	})

	if(goodLogCards) {
		goodLogCards.addEventListener('click', (e) => {
			if(e.target.closest('.add-to-cart')) {
				const btnCard = e.target.closest('.add-to-cart');
				const btnId = btnCard.dataset.id;
				const array = JSON.parse(localStorage.getItem('key'));
				const clickedArray = array.find(item => item.id === btnId);
				console.log(clickedArray);
			}
		})
	} 
}

export { modal }