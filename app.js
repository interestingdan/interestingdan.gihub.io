const move = Array.from(document.getElementsByClassName('move'));
var shape = document.getElementById('shape');

function addClass(classToAdd) {
	var j = move.length;
	for (i = 0; i < j; i++) {
		move[i].classList.add(classToAdd);
	};
}

var liesLinks = document.getElementsByClassName("liesLinksContainer");
var liesOptions = {className: "os-theme-dark liesScroll"};
document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(liesLinks, liesOptions);
});

var codeLinks = document.getElementsByClassName("codeLinksContainer");
var codeOptions = {className: "os-theme-light codeScroll"};
document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(codeLinks, codeOptions);
});



function lies(){
	Velocity(shape, {
		points: ["100,100 100,100 100,100 100,100 100,100"]
	},{
		duration: 500
	});
	addClass('liesShow');
	document.getElementsByClassName('delay')[0].classList.add('visible');

}

function code(){
	Velocity(shape, {
		points: ["1,0.000001 100,0.000001 100,100 0.000001,100 0.000001,1"]
	},{
		duration: 500,
		easing: "ease-in",
	});
	addClass('codeShow');
	document.getElementsByClassName('delay')[1].classList.add('visible');
}

async function revert(){
	var j = move.length;
	for (i = 0; i < j; i++) {
		move[i].classList.remove('liesShow');
		move[i].classList.remove('codeShow');
		};
	Velocity(shape, {
		points: ["100,0 100,0 100,100 0,100 0,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});
	await new Promise(r => setTimeout(r, 500));
	document.getElementsByClassName('delay')[0].classList.remove('visible');
	document.getElementsByClassName('delay')[1].classList.remove('visible');
}
