const container = document.querySelector('body');

const themeSwitcher = document.querySelector('#theme-switcher');
const themeIcon = document.querySelector('#theme-icon');
const langSwitcher = document.querySelector('#lang-switcher');
const langIcon = document.querySelector('#lang-icon');

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
	} else {
		langIcon.innerHTML = 'Pt-Br';
	}
});

const graph1 = document.querySelector('#graph-1');
const chart = new Chart(graph1, {
	type: 'line',
	data: {
		labels: ['Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],
		datasets: [
			{
				data: [506, 5113, 21577, 37389, 45588, 27107],
				label: 'Média Móvel de Casos',
				backgroundColor: '#0BC148',
				borderColor: '#0BC148',
				borderWidth: 5,
				fill: false,
			},
		],
	},
	options: {
		responsive: true,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	},
});

const graph2 = document.querySelector('#graph-2');
const chart2 = new Chart(graph2, {
	type: 'bar',
	data: {
		labels: [
			'População em idade de trabalho',
			'Total desempregados (Agosto - 2020)',
			'Total seguro desemprego',
			'Total auxílio emergencial',
		],
		datasets: [
			{
				data: [166300000, 22650060, 3933180, 66700000],
				backgroundColor: [
					'#3772FFCC',
					'#DF2935CC',
					'#FDCA40CC',
					'#0BC148CC',
				],
				borderColor: ['#3772FF', '#DF2935', '#FDCA40', '#0BC148'],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
		legend: { display: false },
	},
});

const graph3 = document.querySelector('#graph-3');
const chart3 = new Chart(graph3, {
	type: 'bar',
	data: {
		labels: [
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
		],
		datasets: [
			{
				data: [8693, 37389, 45588, 27107],
				backgroundColor: '#3772FFCC',
				borderColor: '#3772FF', 
				borderWidth: 1,
				label: 'Home Office',
			},
			{
				data: [18448, 8691, 8399, 8360],
				backgroundColor: '#DF2935CC',
				borderColor: '#DF2935', 
				borderWidth: 1,
				label: 'Não procuraram trabalho',
			},
			{
				data: [15752, 11842, 6804, 4002],
				backgroundColor: '#FDCA40CC',
				borderColor: '#FDCA40', 
				borderWidth: 1,
				label: 'Afastados',
			},
		],
	},
	options: {
		responsive: true,
		scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
	},
});
