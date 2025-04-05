/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: './img/bickraft.png',
		title: 'Bikcraft',
		skills: ['JavaScript', 'CSS'],
		descripcion:
			'Esse projeto foi desenvolvido durante o curso de HTML e CSS par iniciantes da Origamid.Ele é um site de venda de bicicletas elétricas.',
		demoURL: 'https://vanessadasilvasantos.github.io/bickraft/',
		repoURL: 'https://github.com/vanessadasilvasantos/bickraft',
		anim: 'fade-right',
	},
	{
		imgSrc: './img/belasArtes.png',
		title: 'Belas Artes',
		skills: ['React', 'CSS'],
		descripcion:
			'Desenvolvi esse projeto como freelancer, e como uma ótima oportunidade de colocar em prática meus conhecimento em React. Ele é um site de uma marmoraria, que contem a historia e catalogo da mesma.',
		demoURL: 'https://vanessadasilvasantos.github.io/belasartes/',
		repoURL: 'https://github.com/vanessadasilvasantos/belasartes',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: './img/animais.png',
		title: 'Animais Fantasticos',
		skills: ['JavaScript', 'CSS'],
		descripcion:
			'Esse projeto foi desenvolvido duranto o curso de JavaScript da Origamid. Ele é um site sobre animais, onde foi desenvolvido diversas funcionalidades em JS',
		demoURL: 'https://vanessadasilvasantos.github.io/animais/',
		repoURL: 'https://github.com/vanessadasilvasantos/animais',
		anim: 'fade-left',
	},
	{
		imgSrc: './img/weather.png',
		title: 'Weather',
		skills: ['React', 'React'],
		descripcion:
			'Desenvolvi esse APP ultilizando React Native, com o objetivo de consolidar meus conhecimentos da biblíoteca. Ele é um app de clima, que consome uma API externa, onde é exibido informações sobre o clima de uma cidade desejada.',
		demoURL: 'https://github.com/vanessadasilvasantos/weather',
		repoURL: 'https://github.com/vanessadasilvasantos/weather',
		anim: 'fade-left',
	},
	{
		imgSrc: './img/rockteHelp.png',
		title: 'Rocket Help',
		skills: ['React', 'React'],
		descripcion:
			'Desenvolvi um projeto de tickets, com o objetivo de listar patrimônios com defeitos, sendo possível descrever seus problemas e soluções. Após solucionar o problema do mesmo, é possível finalizar o defeito. ',
		demoURL: 'https://github.com/vanessadasilvasantos/Rocket-Help',
		repoURL: 'https://github.com/vanessadasilvasantos/Rocket-Help',
		anim: 'fade-left',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
