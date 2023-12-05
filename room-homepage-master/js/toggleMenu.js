export default class ToggleMenu {
	constructor() {
		if (!this.variables()) return false
		this.setupEvents()
	}

	variables() {
		this.hamburgerBtn = document.getElementById('hamburgerIcon')
		this.closeBtn = document.getElementById('navCloseIcon')
		this.navHeader = document.getElementById('navHeader')
		this.navLinks = document.getElementById('navLinks')
		this.logo = document.getElementById('headerLogo')
		return true;
	}

	setupEvents() {
		this.hamburgerBtn.addEventListener('click', () => this.show())
		this.closeBtn.addEventListener('click', () => this.hide())
	}

	// show() {
	// 	this.navHeader.style.display = 'flex'
	// 	this.navLinks.style.display = 'flex'
	// }

	// hide() {
	// 	this.navHeader.style.display = 'none'
	// 	this.navLinks.style.display = 'none'
	// }

}