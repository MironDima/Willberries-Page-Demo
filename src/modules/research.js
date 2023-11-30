import getSearch from "./getSearch";
const research = () => {
const searchInput = document.querySelector('.search-block > input');
const searchBtn = document.querySelector('.search-block > button');

try {
	searchBtn.addEventListener('click', () => {
		getSearch(searchInput.value)
	})
} catch (e) {
	console.error(e.message);

}
}
export {research}