import renderArrayData from "./renderArrayData";
const getViews = () => {
	 fetch('https://wildberrisjs-default-rtdb.firebaseio.com/db.json')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			const filterArray =  data
			localStorage.setItem('key', JSON.stringify(data));

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
export default getViews