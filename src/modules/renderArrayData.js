const renderArrayData = (array) => {
	JSON.parse(localStorage.getItem('key'));
	const containerCard = document.querySelector('.long-goods-list');
	containerCard.innerHTML = ''
	
	array.forEach(item => {
		const cardBlock = document.createElement('div');
		cardBlock.classList.add('col-lg-3');
		cardBlock.classList.add('col-sm-6');

		cardBlock.innerHTML = `
		<div class="goods-card">
			<span class="label ${item.label  ? null : 'd-none'}" >${item.label}</span>
				<img src="db/${item.img}" alt=${item.name} class="goods-image">
				<h3 class="goods-title">${item.name}</h3>
				<p class="goods-description">${item.description}</p>
				<button class="button goods-card-btn add-to-cart" data-id=${item.id}>
			<span class="button-price">$${item.price}</span>
			</button>
			</div>
		`
		console.log(item);
		containerCard.append(cardBlock)
	});
}
export default renderArrayData


// если есть данный  класс то мы скрываем
// ${item.label  ? null : 'd-none'}