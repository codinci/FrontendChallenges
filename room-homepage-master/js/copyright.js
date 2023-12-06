export default class Copyright {
	constructor() {
		if(!this.variables()) return false
		this.setup()
	}

	variables() {
		this.setYear = document.getElementById('copyrightYear')
		return true
	}

	setup() {
		this.date = new Date().getFullYear();
		this.setYear.textContent = this.date;
	}
}