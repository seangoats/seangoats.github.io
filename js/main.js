const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const resume = document.querySelector('#resume');
const projects = document.querySelector('#projects');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
const resumeContent = document.querySelector('#resume-content');
const projectsContent = document.querySelector('#projects-content');

about.addEventListener('click', () => {
	const aboutBox = new WinBox({
		title: 'About me',
		width: '70%',
		height: '50%',
		modal: true,
		x: 'center',
		y: 'center',
		mount: aboutContent,
		onfocus: function () {
			this.setBackground('#6971e0');
		},
		onblur: function () {
			this.setBackground('#777');
		},
	});
});

contact.addEventListener('click', () => {
	const contactBox = new WinBox({
		title: 'Contact me',
		width: '60%',
		height: '50%',
		modal: true,
		x: 'center',
		y: 'center',
		mount: contactContent,
		onfocus: function () {
			this.setBackground('#6971e0');
		},
		onblur: function () {
			this.setBackground('#777');
		},
	});
});

resume.addEventListener('click', () => {
	const resumeBox = new WinBox({
		title: 'Resume',
		width: '60%',
		height: '50%',
		modal: true,
		x: 'center',
		y: 'center',
		mount: resumeContent,
		onfocus: function () {
			this.setBackground('#6971e0');
		},
		onblur: function () {
			this.setBackground('#777');
		},
	});
});

projects.addEventListener('click', () => {
	const projectsBox = new WinBox({
		title: 'Project Showcase',
		width: '100%',
		height: '100%',
		mount: projectsContent,
		onfocus: function () {
			this.setBackground('#6971e0');
		},
		onblur: function () {
			this.setBackground('#777');
		},
	});
});
