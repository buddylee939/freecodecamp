var h2Tags = document.getElementsByTagName("h2");
function h2ToNav(){
	var x = 0;
	var h2Nav = '';
	// loop through the h2Tags array and create a variable of list items
	while (x < h2Tags.length){
		// give the h2 an id
		h2Tags[x].id = 'h2-' + x;
		h2Nav += '<li><a href="#'+ h2Tags[x].id + '">' + h2Tags[x].innerText + '</a></li>';
		x++;
	}
	return h2Nav;
}

var h2ListNav = h2ToNav();
// add the link in the navbar
document.getElementById("sideMenu").innerHTML = h2ListNav;
