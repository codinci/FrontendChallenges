window.addEventListener('load', () => {
	const loader = document.getElementById('loader')
	const header = document.getElementById('header')
	const main = document.getElementById('main')
	const footer = document.getElementById('footer')
	loader.style.display = 'none'
	header.style.display = 'flex'
	main.style.display = 'grid'
	footer.style.display = 'flex'
})

document.addEventListener('DOMContentLoaded', () => {
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