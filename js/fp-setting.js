$(document).ready(function() {
		$('#fullpage').fullpage({
			sectionsColor: ['#000', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
            menu: '#menu',
			navigation: true,
			slidesNavigation: true,
			controlArrows: false
		});
	});