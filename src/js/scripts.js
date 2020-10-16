const container = document.querySelector('body');

const themeSwitcher = document.querySelector('#theme-switcher');
const themeIcon = document.querySelector('#theme-icon');

container.classList = ['theme-light'];
themeSwitcher.checked = false;

themeSwitcher.addEventListener('click', () => {
	if (themeSwitcher.checked) {
		container.classList = ['theme-dark'];
		themeIcon.classList = ['fas fa-moon'];
	} else {
		container.classList = ['theme-light'];
		themeIcon.classList = ['fas fa-sun'];
	}
});

const langSwitcher = document.querySelector('#lang-switcher');
const langIcon = document.querySelector('#lang-icon');
const translate = document.querySelectorAll('#translate');

langSwitcher.checked = false;

langSwitcher.addEventListener('click', () => {
	if (langSwitcher.checked) {
		langIcon.innerHTML = 'En-Us';

		translate.forEach((item, index) => {
			item.style.opacity = 0;
			setTimeout(() => {
				item.innerHTML = english[index];
				item.style.opacity = 1
			}, 300);
		});
	} else {
		langIcon.innerHTML = 'Pt-Br';
		translate.forEach((item, index) => {
			item.style.opacity = 0;
			setTimeout(() => {
				item.innerHTML = portuguese[index];
				item.style.opacity = 1
			}, 300);
		});
	}
});

translate[0].addEventListener('click', () => {
	translate[0].innerHTML = 'Feliz Aniversário Iris!'
})

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

const portuguese = [
	'Desemprego na Pandemia',
	'PANDEMIA AUMENTA TAXA DE DESEMPREGADOS, AFASTADOS E HOME OFFICE',
	'Desde março o mundo tem passado por uma pandemia causada por um vírus, o COVID-19. Por esse motivo muitos trabalhadores perderam seus empregos ou foram afastados. uma das soluções foi o home office, que infelizmente só pode ser usado por aqueles que trabalham intelectualmente. Por isso o número de desempregados e pessoas afastadas por causa da pandemia cresceu muito ao longo do ano.',
	'Desemprego na Pandemia',
	'Recentemente, em dezembro de 2019, houve a transmissão de um novo coronavírus, o qual foi identificado na China e causou a COVID-19, sendo em seguida disseminada e transmitida pessoa a pessoa. Como o principal meio de precaução para esse vírus se deu pela quarentena muitos individuos foram afastados, começaram a trabalhar em home office ou até mesmo foram demitidos. Isso trouxe o pedido de seguro desemprego e de auxilio emergencial da parte de muitos brasileiros.',
	'Esse assunto, é de grande relevância na vida dos brasileiros, por isso foi de nosso interesse pesquisar mais sobre, com o objetivo de trazer analises como comparações entre a quantidade de auxilios solicitados e pessoas desempregadas, além disso possibilita um entendimento melhor da organização da sociedade em periodos de crise.',
	'Como a pesquisa englobava o brasil todo, utilizamos sites da internet, principalmente sites como o do IBGE e G1 que são mais confiáveis. Foram coletados os seguintes dados: Média Móvel de Casos; Trabalhadores em Home Office; Pessoas que não procuraram trabalho; Desempregados; Total de desempregados; Pedidos de seguro desemprego; Afastados; População em idade de trabalho; Total de seguros desemprego solicitados; Total de auxilios Emergênciais solicitados. Essas informações foram extraídas por meses, do mês de março até agosto. Com essas informações construímos uma tabela e apartir dela algumas representações gráficas foram montadas.',
	'Covid-19: Estatísicas no Brasil',
	'Meses',
	'Março',
	'Abril',
	'Maio',
	'Junho',
	'Julho',
	'Agosto',
	'Média Móvel de Casos',
	'Trabalhadores em Home Office',
	'Pessoas que não procuraram trabalho',
	'Desempregados',
	'Total Desempregados',
	'Pedidos de Seguro Desemprego',
	'Afastados',
	'População em Idade de Trabalho',
	'Total Seguro Desemprego',
	'Total Auxílio Emergencial',
	'As linhas da tabela representam os meses e as colunas as categorias, por exemplo em março o número de casos de COVID-19 é 506, assim, facilita a leitura de casos nos períodos.',
	'Gráfico 1: Média Móvel de Casos',
	'No gráfico 1 podemos ver as mudanças do número de casos, começando em março, com um baixo número, depois subindo até julho, e em seguida baixando até agosto. O gráfico apenas desenha o que está na tabela, facilitando o entendimento.',
	'Gráfico 2: Situação do Desemprego',
	'O gráfico 2 foi feito em cima das colunas população em idade de trabalho (essa não foi dividida por meses e sim usada uma quantia geral), total de seguros desempregos pedidos, total de desempregados (do mês de agosto) e total de auxílios emergenciais concedidos. Podemos observar que a quantidade de desempregados é maior que o número de seguros desemprego solicitados, isso pode ocorrer pela quantidade de trabalho informal nesse número de desempregados. Outro ponto interessante de ressaltar é o total de auxilios emergenciais concedidos, que é muito maior que o de desempregados.',
	'Gráfico 3: Tendências',
	'No gráfico 3 vemos uma comparação entre quantidade de pessoas trabalhando em home office, pessoas que não procuraram trabalho por causa da pandemia e pessoas afastadas de seus trabalhos. Nesse gráfico podemos observar que os maiores números são de pessoas que não procuraram trabalhos e este número por sua vez é quase constante, diminuindo e aumentando pouco, assim como o de trabalhadores em home office, onde quase não há mudanças. Por fim, o número de pessoas afastadas diminui gradualmente (aos poucos as pessoas voltam para seus trabalhos presenciais).',
	'Conclusão',
	'Após a leitura e compreensão desses dados, podemos tirar diversas conclusões sobre o trabalho na pandemia. Com o ínicio da pandemia houve uma diminuição drástica no trabalho presencial, o que fez muitos migrarem para o trabalho em home office, porém este só pode ser aplicado em trabalhos intelectuais (o que explica o número de trabalhadores nessa modalidade não alterar muito, não há necessidade de ser presencial), o que faz muitos trabalhadores que precisam atuar presencialmente sejam afastados ou demitidos. Conforme o tempo passa, os trabalhadores acabam voltando para o presencial, o que faz diminuir o número de afastados. Ainda sim, o número de trabalhadores demitidos continua consideravelmente constante (por causa de uma crise financeira, o número de funcionários diminui em muitos estabelecimentos).',
	'Esperamos que com  essa pesquisa tenhamos mostrado as modificações do funcionamento do trabalho pela pandemia e as adaptações que nossa sociedade realiza, a pandemia trouxe diversas dificuldades e afetou muitas pessoas, principalmente a classe trabalhadora.',
	'Feito por:',
]

const english = [
	'Pandemic Unemployment',
	'THE PANDEMIC INCREASES THE NUMBERS OF UNEMPLOYED, REMOVED PEOPLE AND HOME OFFICE',
	'Since March, the world has been through a pandemic caused by a virus, the COVID-19. Because of that, a lot of workers lost their jobs or were removed. One of the main solutions was the home office, which unfortunately, only can be used by those who work intellectually. So the number of unemployed and people removed by the pandemic increase a lot over the year.',
	'Pandemic Unemployment',
	'Lately, in December 2019, there was a transmission of the new coronavirus, which was identified in China and caused the COVID-19, being disseminated and transmitted from people to people. As the main way of preventing this virus resulted in quarantine, a lot of people got removed and started working at home office or even were fired. This brought the request of unemployment insurance and emergency aid from many brazilians people.',
	'This subject, is from big relevance in brazilians lifes, and because of that it was for our interesting to open a research about it, as the main point  to bring a review about the comparison between the number of requested emergency aid and unemployed people, besides that makes possible a better understanding about the society organization in a crisis period.',
	`As the research includes the whole country, we use sites from the internet, mostly sites like the IBGE and G1 which are more reliable. Were collected the following data: Moving Average of Cases; Workers on Home Office; People that didn't look out for work; Unemployed; Total of Unemployed; Request of unemployment insurance; People removed; Population in age of work; Total Request of unemployment insurance; Total of emergency aid requested. This informations were taken along the months, from March to August. With this informations we build a table and starting from it, some graphics were built as well.`,
	'Covid-19: Brazil Statistics',
	'Months',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'Moving Average of Cases',
	'Home Office Workers',
	'People that dont searched work',
	'Unemployed',
	'Total Unemployed',
	'Unemployment Insurance Claims',
	'People Removed Cases',
	'Working Age Population',
	'Total Insurance Claims',
	'Total Emergency Aid',
	'The rows from the table represent the months and the columns the categories, for example in march the number of cases of COVID-19 is 506, that way, making it easier to read  the cases on the periods.',
	'Graphic 1: Moving Average of Cases',
	'In graphic 1 we can see the changes from the number of cases, starting in march, with a low number, after rising until july, and next, getting lower until august. The graphic only draws what’s on the table, making it easier to understand.',
	'Graphic 2: Unemployment Situation',
	`O graphic 2 was made over the columns Population in age of work (this one wasn't divided by months but used a general number), total of request of unemployment insurance, total of unemployed (from august) and total of emergency aid allowed. We can notice that the number of unemployed is bigger than the number of unemployment insurance requested, that can happen  considering the number of informal work on this unemployed data. Another interesting point to bring is the total of emergency aid allowed, which is much bigger than the unemployed.`,
	'Graphic 3: Tendencies',
	`In graphic 3, we can see the comparison between the number of people working at home office, people that don't look for work because of the virus and people that were removed from work. In this graphic we can notice that the major numbers are those from people that dont look out for work, and this number on the other hand it's almost constant, decreasing and increasing a little, just like the number of home office workers,  where there’s almost non changes. At last, the number of people removed decreases gradually.`,
	'Conclusion',
	`After reading and understanding these things, we can take several conclusions on pandemic work. As the pandemic started there was a drastic decrease in presential work, that make a lot of people go to home office, however this can only be apply on intellectual work (which explain the number of workers doesn't change a lot, there’s no need to be presential), which make many workers that need to operate presential be withdrawn or fired. As the time went by, the workers ended up coming back to presential work, which made a decrease in the numbers of withdrawn workers. Nevertheless, the number of workers that got fired keeps increasing.`,
	'We hope that with this research, we have shown the modifications on the operation at work through the pandemic and the adaptations that our society accomplishes. The pandemic brought us much trouble and affected many lives, mostly the working class.',
	'Made by:',
]