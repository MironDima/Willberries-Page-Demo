import renderArrayData from "./renderArrayData";
const getFilter = (value, category) => {
	 fetch('https://wildberrisjs-default-rtdb.firebaseio.com/db.json')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			const filterArray = category ? data.filter(item => item[category] === value) : data;
			localStorage.setItem('key', JSON.stringify(filterArray));
			if (window.location.pathname !== '/goods.html') {
				window.location.href = '/goods.html';
			}else {
				renderArrayData(filterArray);
			}
		});
}		
export default getFilter