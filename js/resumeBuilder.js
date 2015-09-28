var lorem = 'Mauris fermentum non mauris in blandit. Nullam congue eleifend nisl quis feugiat. Donec maximus condimentum lorem a consectetur. Suspendisse in arcu ac nulla ullamcorper auctor. Etiam tincidunt diam nisi, eu pulvinar justo rutrum non. Cras consectetur mi ut dapibus cursus. Nulla efficitur orci est. Sed mollis augue a mauris congue viverra sit amet nec magna! Mauris at imperdiet est, nec efficitur sapien. Vivamus consequat augue non metus rutrum, quis tristique purus suscipit. Nulla facilisi. Etiam vestibulum non metus eget porta? Curabitur quis odio nisi.Pellentesque in metus cursus mi aliquam lobortis vel eu lorem. Nulla fermentum sodales scelerisque. In id ante eu tellus fermentum molestie. Maecenas mattis sagittis metus, sit amet suscipit libero. Quisque lectus magna, dapibus eu iaculis vel, vulputate sit amet lacus.';
var work = {
	"jobs": [
		{"employer":"Mirasoft", "dates": '2004-07-01 - 2005-10-01', "title": "Java Developer", "location":"Kiev", "description" : lorem},
		{"employer":"Ciklum", "dates": '2005-10-01 - 2006-12-01', "title": "Senior Java Developer", "location":"Kiev", "description" : lorem},
		{"employer":"Luxoft", "dates": '2007-02-01 - 2007-12-01', "title": "Senior Java Developer", "location":"Kiev", "description" : lorem},
		{"employer":"Mirasoft", "dates": '2007-12-01 - 2009-04-01', "title": "Java Architect", "location":"Kiev", "description" : lorem},
		{"employer":"Asset Control", "dates": '2009-04-01 -  now', "title": "Tech Lead", "location":"Heerenveen", "description" : lorem},
	]
};

var bio = {
	"name": "Sergey Zolotaryov",
	"role": "Tech Lead",
	"welcomeMessage": "Welcome to have a look at my resume",
	"contacts": {
		"mobile": "+31616321751",
		"email": "anydoby@gmail.com",	
		"location": "Drachten"
	},
	"bioPic": "images/me.jpg",
	"location": 'Drachten, NL',
	"dob": '1982-10-18',
	"github": "anydoby",
	"skills": ["java of all sorts", 'solving simple problems', 'solving complex problems', 'not solving unsolvable problems', "saving the universe"]
};

var education = {
	"schools": [
		{"name":"University of Kyiv-Mohyla Academy", "degree": "Bachelor", "majors":['Physics'], "dates": ['1999','2005'], "location": "Kiev", "url":'http://www.ukma.edu.ua/'}		
	],
	"onlineCourses": [
		{"title":"Web Front End Developer", "school":'Udacity', "dates":['2015'], "url":'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'}
	]
};

var projects = {
	"projects": [
		{"title":'Sample Project 1', "dates": 2014, "description": lorem,
	"images": ['https://s3.amazonaws.com/content.udacity-data.com/site-svgs/upsell_icon.svg']}
	]
};

$('#header').append(HTMLheaderName.replace('%data%', bio.name));
$('#header').append(HTMLheaderRole.replace('%data%', bio.role));

if (bio.skills){
	$('#header').append(HTMLskillsStart);
	bio.skills.forEach(function (skill) {
		$('#skills').append(HTMLskills.replace('%data%',skill));
	});
}

function displayWork (job){
	$('#workExperience').append(HTMLworkStart);
	$('.work-entry:last').append(HTMLworkEmployer.replace('%data%',job.employer));
	$('.work-entry:last').append(HTMLworkTitle.replace('%data%',job.title));
	$('.work-entry:last').append(HTMLworkDates.replace('%data%',job.dates));
	$('.work-entry:last').append(HTMLworkLocation.replace('%data%',job.location));
	$('.work-entry:last').append(HTMLworkDescription.replace('%data%',job.description));
}

if (work.jobs){
	work.jobs.forEach(displayWork);
}


