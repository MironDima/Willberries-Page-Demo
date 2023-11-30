import renderArrayData from "./renderArrayData";
const getPost = (value, category) => {
	 fetch('https://wildberrisjs-default-rtdb.firebaseio.com/db.json')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			const filterArray = category ? data.filter(item => item[category] === value) : data
			localStorage.setItem('key', JSON.stringify(filterArray));

			if (window.location.pathname !== '/goods.html') {
				window.location.href = '/goods.html';
			}else {
				renderArrayData(filterArray);
			}
		});

		// if(localStorage.getItem('key') && window.location.pathname === '/goods.html') {
		// 	renderArrayData(JSON.parse(localStorage.getItem('key')))
		// }
}		
export default getPost