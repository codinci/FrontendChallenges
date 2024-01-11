document.addEventListener('DOMContentLoaded', () => {
	console.log('Loaded page')
	const menuBtn = document.getElementById('menuBtn')
	const navList = document.getElementById('navList')
	const closeBtn = document.getElementById('closeBtn')
	const setYear = document.getElementById('copyrightYear')
	menuBtn.addEventListener('click', () => {
		// console.log('open navbar')
		// navList.style.display  = 'block'
 		navList.classList.toggle('show');
	})

	closeBtn.addEventListener('click', () => {
		// navList.style.display  = 'none'
		navList.classList.remove('show');
	})

	setYear.textContent = new Date().getFullYear()
})