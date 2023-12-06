

const plusMinusRemoveCart = (tr) => {
	tr.addEventListener('click', (e) => {
		if (e.target.classList.contains('cart-btn-minus')) {
			console.log('minus');
			
		}
		else if (e.target.classList.contains('cart-btn-plus')) {
			
		}
		else if (e.target.classList.contains('cart-btn-delete')) {
			console.log('delete');
		}
	})
}
export { plusMinusRemoveCart }