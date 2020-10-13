const container = document.querySelector('body');

const themeSwitcher = document.querySelector('#theme-switcher');
const langSwitcher = document.querySelector('#lang-switcher');

const title = document.querySelector('#title');

container.classList = ['theme-light'];
themeSwitcher.checked = false;
langSwitcher.checked = false;

themeSwitcher.addEventListener('click', () => {
	if (themeSwitcher.checked) {
		container.classList = ['theme-dark'];
	} else {
		container.classList = ['theme-light'];
	}
});

langSwitcher.addEventListener('click', () => {
	if (langSwitcher.checked) {
		console.log('English');
		title.innerHTML = 'Hello World!';
	} else {
		console.log('Português');
		title.innerHTML = 'Olá Mundo!';
	}
})