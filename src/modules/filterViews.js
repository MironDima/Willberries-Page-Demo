import getViews from "./getViews";
const filterViews = () => {
	const moreBtn = document.querySelector('.more');
	if (moreBtn) { 
		moreBtn.addEventListener('click', (e) => {
			console.log('est');
			e.preventDefault();
			getViews();
		})
	}
}
export { filterViews }