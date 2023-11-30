import getFilter from "./getFilter";
// import getViews from "./getViews";
const filterLink = () => {
const links = document.querySelectorAll('.navigation-link');
links.forEach(link => {
	link.addEventListener('click',(e) => {
		e.preventDefault()
		const linkValue = link.textContent;
		const dataAtributte = link.dataset.field; //dataset можно получить атрибут
		getFilter(linkValue,dataAtributte);
	})
})
}
export {filterLink}