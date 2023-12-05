export default class ToggleMenu {
	constructor() {
		if (!this.variables()) return false
		this.setupEvents()
	}

	variables() {
		this.hamburgerBtn = document.getElementById('hamburgerIcon')
		this.closeBtn = document.getElementById('navCloseIcon')
		this.navHeader = document.getElementById('navHeader')
		return true;
	}

	setupEvents() {
		this.hamburgerBtn.addEventListener('click', () => this.show())
		this.closeBtn.addEventListener('click', () => this.hide())
	}

	show() {
		this.navHeader.classList.add('header__navbar--mobile')
	}

	hide() {
		this.navHeader.classList.remove('header__navbar--mobile')
	}

}