$( document ).on( "pageinit", function( event ) {
	var panel_html = ''+
'<ul data-role="listview" data-inset="true">'+
    '<li><a href="index.html"> <img src="icons/home.png"/> Home</a></li>'+
	'<li><a href="welcome.html"> <img src="Chamber_400x400.jpg"/> Welcome</a></li>'+
	'<li><a href="sponsors.html"> <img src="icons/Sponsor.png"/> Sponsors</a></li>'+
'<li><a href="categories.html"> <img src="icons/categories.png"/> Categories</a></li>'+

	'<li><a href="awards.html"> <img src="icons/award.png"/> Awards Night</a></li>'+
	'<li><a href="contact.html"> <img src="icons/contact.png"/> Contact</a></li>'+




'<!--<li><a href="tour.html"> <img src="icons/Drogheda.png"/> Virtual Tour of Drogheda</a></li>'+

'-->'+
''+
'</ul>';
		
		$('.panelhtml').html(panel_html);
		$('.panelhtml ul[data-role="listview"]').listview();
});

var map;