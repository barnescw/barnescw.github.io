let body = document.getElementById("body");

let chandler = document.getElementById("header-chandler");
let personal = document.getElementById("header-personal");
let professional = document.getElementById("header-professional");
let contact = document.getElementById("header-contact");

chandler.addEventListener("mouseenter", function( event ) {
	body.style.background = "url('images/me.jpg')";
	body.style.backgroundSize = "cover";
	body.style.backgroundRepeat = "no-repeat";
}, false);