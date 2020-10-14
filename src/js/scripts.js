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

/*const ctx = document.querySelector('#myCanvas');
const chart = new Chart(ctx , {
	type: 'bar',
	data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
	},
	options: {
		responsive: true
	}
});*/