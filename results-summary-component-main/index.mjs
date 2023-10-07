import data from './data.mjs';

const categoryScore = document.querySelector('#category-score');

// loop through each data item in 'data.mjs' file
data.forEach(elem => {
	// convert the category data attribute to lower case
	const categoryName = elem.category.toLowerCase();
	// create a ratings element
	const ratingsElem = document.createElement('div');
	// assign class name to the ratings div
	ratingsElem.classList.add('ratings', 'category-ratings__ratings', `ratings_${categoryName}-theme`);
	// append the ratings element to the outer category score div
	categoryScore.appendChild(ratingsElem);
	// create a category div
	const categoryElem = document.createElement('div');
	//assign class name to the category div
	categoryElem.classList.add('category');
	//append the category div to the outer ratings div
	ratingsElem.appendChild(categoryElem);
	//create an icon element
	const iconElem = document.createElement('i');
	//assign a class name to the icon element
	iconElem.classList.add('icon','category__icon');
	//create an img tag for the icon element
	const iconImage = document.createElement('img');
	//asign a src to the image
	iconImage.src = elem.icon;
	//asign an alt to the image
	iconImage.alt = `${categoryName}-icon`;
	//append the icon image to the icon element
	iconElem.appendChild(iconImage);
	//create a span tag for the category name
	const categoryNameElem = document.createElement('span');
	//assign class names to the category name span element
	categoryNameElem.classList.add('category__name', `category_${categoryName}-theme`);
	//set a text content to the category name span element
	categoryNameElem.textContent = elem.category;
	//append the icon element to the category element
	categoryElem.appendChild(iconElem);
	//append the category name element to the category element
	categoryElem.appendChild(categoryNameElem);
	// create a ratings score element
	const ratingsScoreElem = document.createElement('div');
	//assign a class name to the ratings score element
	ratingsScoreElem.classList.add('rating-score');
	//append the ratings score element to the ratings element
	ratingsElem.appendChild(ratingsScoreElem);
	//create a span tag for the ratings score
	const ratingTallyElem = document.createElement('span');
	//assign class name to the ratingTally element
	ratingTallyElem.classList.add('rating-score__tally', 'tally');
	// set the text content of the ratingTally element
	ratingTallyElem.textContent = elem.score;
	//append the ratingTally element to the ratingssScore element
	ratingsScoreElem.appendChild(ratingTallyElem);
	//create a rating out of div tag
	const ratingsTotalElem = document.createElement('div');
	//assign a class name to the ratingTotal element
	ratingsTotalElem.classList.add('rating-score__total');
	//append the ratingTotal element to the ratingsScore element
	ratingsScoreElem.appendChild(ratingsTotalElem);
	//create a slash element out of a i tag
	const slashElem = document.createElement('i');
	//set the text content of the slash element
	slashElem.textContent = '/';
	//append the slash element to the ratingsTotal element
	ratingsTotalElem.appendChild(slashElem);
	//creating a totalRating element out of a span tag
	const totalRatingElem = document.createElement('span')
	//set the text content of the totalRating element
	totalRatingElem.textContent = '100';
	//append the totalRating element to the ratingsTotal element
	ratingsTotalElem.appendChild(totalRatingElem);
})


const date = new Date().getFullYear();
const setYear = document.getElementById('copyrightYear')
setYear.textContent = date;

