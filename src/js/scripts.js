const container = document.querySelector('body');

const themeSwitcher = document.querySelector('#theme-switcher');
const themeIcon = document.querySelector('#theme-icon');
const langSwitcher = document.querySelector('#lang-switcher');
const langIcon = document.querySelector('#lang-icon');

const title = document.querySelector('#title');

container.classList = ['theme-light'];
themeSwitcher.checked = false;
langSwitcher.checked = false;

themeSwitcher.addEventListener('click', () => {
	if (themeSwitcher.checked) {
		container.classList = ['theme-dark'];
		themeIcon.classList = ['fas fa-moon'];
	} else {
		container.classList = ['theme-light'];
		themeIcon.classList = ['fas fa-sun'];
	}
});

langSwitcher.addEventListener('click', () => {
	if (langSwitcher.checked) {
		langIcon.innerHTML = 'En-Us';
		title.innerHTML = 'Hello World!';
	} else {
		langIcon.innerHTML = 'Pt-Br';
		title.innerHTML = 'Olá Mundo!';
	}
})