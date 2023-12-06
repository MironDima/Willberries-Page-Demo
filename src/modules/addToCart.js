const addToCart = (id) => {
	const array = JSON.parse(localStorage.getItem('array'));
	const arrayFind = array.find(item =>  item.id === id);
	const cart = localStorage.getItem('cart') ? 
	JSON.parse(localStorage.getItem('cart')) : [];
	if (cart.some(item => item.id === arrayFind.id)){
		console.log('Необходимо увеличить товар');
		cart.map(item => {
			if(item.id === arrayFind.id){
				item.count++;
			}
			return item
		})
	}else{
		console.log('Необходимо добавить товар в корзину');
		arrayFind.count = 1;
		cart.push(arrayFind);
		console.log(arrayFind);
	}
	localStorage.setItem('cart',JSON.stringify(cart));
}
export { addToCart }
























// Метод массива some() позволяет узнать,
// есть ли в массиве хотя бы один элемент,
//  удовлетворяющий условию в функции-колбэке.
//   Колбэк-функция будет вызываться для каждого элемента
//    массива до тех пор, пока не вернётся true, либо пока
//     не закончатся элементы массива.