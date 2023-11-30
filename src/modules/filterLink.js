import getPost from "./getPost"
const filterLink = () => {
const links = document.querySelectorAll('.navigation-link');
links.forEach(link => {
	link.addEventListener('click',(e) => {
		e.preventDefault()
		const linkValue = link.textContent;
		const dataAtributte = link.dataset.field; //dataset можно получить атрибут
		getPost(linkValue,dataAtributte);
	})
})
}
export {filterLink}