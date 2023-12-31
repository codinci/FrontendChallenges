export default class Slider {
	constructor() {
		if (!this.variables()) return false;
		this.setupEvents()
		this.keyBoardInput()
	}

	variables() {
		this.slides = [
			{
				title: `Discover innovative ways to decorate`,
				description: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
			},
			{
				title: `We are available all across the globe`,
				description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
			},
			{
				title: `Manufactured with the best materials`,
				description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
			}
		]

		this.heroImage1 = document.getElementById('heroImage1')
		this.heroImage2 = document.getElementById('heroImage2')
		this.heroImage3 = document.getElementById('heroImage3')
		this.slideText = document.getElementById('slideText')
		this.slideHeader = document.getElementById('slideHeader')
		this.slideBtns = document.getElementsByClassName('hero-slide-buttons')

		this.index = 0

		return true
	}

	setupEvents() {
		Array.from(this.slideBtns).forEach(btn => {
			btn.addEventListener('click', (e) => this.slideSetup(e, null))
		})
	}

	//keyboard input
	keyBoardInput() {
		document.addEventListener('keydown', (event) => {
				switch (event.key) {
					case 'ArrowLeft':
						this.slideSetup(null, 'prev')
						break
					case 'ArrowRight':
						this.slideSetup(null, 'next')
						break
					default:
						break
				}
		})
	}

	slideSetup(event, direction) {
		// check data attribute of btn
		if ((direction || event.target.dataset.btn) === 'next') {
			// check the value of index compared to the length of the slides
			// if the value of the index is equal or longer index should be zero
			// otherwise increase the value of the index
			if (this.index >= this.slides.length - 1) {
				this.index = 0

			} else {
				this.index = this.index + 1
			}
		}

		// the data attribute is of type prev
		else if((direction || event.target.dataset.btn) === 'prev') {
			// check the value of the index if it is at zero
			// the new index value will be equal to the length of slides minus one
			// else reduce the index value by one
			if (this.index <= 0) {
				this.index = this.slides.length - 1
			} else {
				this.index = this.index - 1
			}
		} else {
			return
		}

		// call function to display slides depending on the index value
		this.showSlide(this.index)
	}

	showSlide(slideNumber) {
		setTimeout(() => {
			this.slideHeader.textContent = this.slides[slideNumber].title
			this.slideText.textContent = this.slides[slideNumber].description
			switch (slideNumber) {
				case 0:
					this.heroImage1.style.display = 'block'
					this.heroImage2.style.display = 'none'
					this.heroImage3.style.display = 'none'
					break
				case 1:
					this.heroImage1.style.display = 'none'
					this.heroImage2.style.display = 'block'
					this.heroImage3.style.display = 'none'
					break
				case 2:
					this.heroImage1.style.display = 'none'
					this.heroImage2.style.display = 'none'
					this.heroImage3.style.display = 'block'
					break
				default:
					break
			}
		}, 250)

	}
}