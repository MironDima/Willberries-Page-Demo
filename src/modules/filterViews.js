import getViews from "./getViews";
const filterViews = () => {
	const moreBtn = document.querySelector('.more');
	try {
		moreBtn.addEventListener('click', (e) => {
			e.preventDefault()
			getViews()
		})

	} catch (e) {
		console.error(e.message);
	}
}
export { filterViews }