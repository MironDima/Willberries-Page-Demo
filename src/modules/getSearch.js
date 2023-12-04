import renderArrayData from "./renderArrayData";
const getSearch = (value) => {
	 fetch('https://wildberrisjs-default-rtdb.firebaseio.com/db.json')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			const filterArray =  data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
			localStorage.setItem('key', JSON.stringify(data));
			if (window.location.pathname !== '/goods.html') {
				window.location.href = '/goods.html';
			}else {
				renderArrayData(filterArray);
			}
		});
}		
export default getSearch