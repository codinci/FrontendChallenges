const form = document.querySelector('#subForm');
const email = document.querySelector('#emailInput');
const msg = document.querySelector('#inputMessage');

// display messages on form submission and hide after 3 seconds
const toggleMessage = (message, type) => {
	msg.textContent = message;
	msg.style.display = 'block'
	if (type === 'error') {
		msg.classList.add(`message_${type}`);
		email.classList.add(`input_${type}`);
	} else if (type === 'success') {
		email.value = '';
		msg.classList.add(`message_${type}`);
		email.classList.add(`input_${type}`);
	}
	setTimeout(() => hideMessage(type), 3000)
}

// remove message classes
const hideMessage = (type) => {
	msg.classList.remove(`message_${type}`);
	email.classList.remove(`input_${type}`);
	msg.style.display = 'none';
	msg.textContent = '';
}

// form submission functionality
form.addEventListener('submit',(e) => {
	e.preventDefault();
	const emailValidation = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
	if (email.value === '') {
		toggleMessage('Whoops! It looks like you forgot to add your email','error');
	} else if (!emailValidation.test(email.value)) {
		toggleMessage('Please provide a valid email address','error');
	} else {
		toggleMessage('You will receive an email notification when site is up','success');
	}
})

// set date on copyright
const date = new Date().getFullYear();
const setYear = document.getElementById('copyrightYear')
setYear.textContent = date;
