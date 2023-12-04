import renderArrayData from "./renderArrayData";
const getViews = () => {
	 fetch('https://wildberrisjs-default-rtdb.firebaseio.com/db.json')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			localStorage.setItem('key', JSON.stringify(data));

			if (window.location.pathname !== '/goods.html') {
				window.location.href = '/goods.html';
			}else {
				renderArrayData(data);
			}
		});
}		
export default getViews