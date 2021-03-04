// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));

		// Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		// Set Menu State
		showMenu = false;
	}
}

// EmailJS
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.querySelector('.alert-success');

window.onload = function () {
	form.addEventListener('submit', sendMail);
};

function sendMail(e) {
	e.preventDefault();
	const tempParams = {
		from_name: nameInput.value,
		reply_to: emailInput.value,
		message: messageInput.value,
	};

	emailjs.send('service_t6joe0r', 'template_llr5ov2', tempParams).then(
		function (res) {
			successMessage.style.display = 'block';
			setTimeout(function () {
				successMessage.style.display = 'none';
			}, 3000);
			console.log('success', res);
		},
		function (error) {
			console.log('Failed', error);
		}
	);

	form.reset();
}
