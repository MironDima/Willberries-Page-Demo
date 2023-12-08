const sendForm = (formData, cartArray) => {
	const modalCart = document.querySelector('#modal-cart');
	const inputs = document.querySelectorAll('.modal-input');
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			cart: cartArray,
			name: formData.nameCustomer,
			phone: formData.phoneCustomer,
			total: formData.card_table__total
		}),
		headers: {
			'Content-Type': 'application/json'
		},
		})
		.then(res => res.json())
		.then(formData => {
			console.log(formData);
			modalCart.style.display = '';
			inputs.forEach(input => {
				input.value = ''
			})
			localStorage.removeItem('cart');
		})
}
export { sendForm }