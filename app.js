const move = Array.from(document.getElementsByClassName('move'));
var codeShape = document.getElementById('codeShape');
var liesShape = document.getElementById('liesShape');

function addClass(classToAdd) {
	for (element of move) {
		element.classList.add(classToAdd);
	}
}
//This is a cludge to make vh work on mobile, courtesy of CSS Tricks
function emulateVH(){
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
}
emulateVH();

//These attach OverlayScrollbars to the elements that require it
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


//This is another cludge from CSS Tricks, this time to make sure elements resize constantly as the window is resized, rather than activating the transition applied to transform
let resizeTimer;
window.addEventListener("resize", () => {
	document.body.classList.add("resize-animation-stopper");
	clearTimeout(resizeTimer);
	emulateVH();
	resizeTimer = setTimeout(() => {
		document.body.classList.remove("resize-animation-stopper");
	}, 400);
});

function lies(){
	Velocity(codeShape, {
		points: ["100,100 100,100 100,100 100,100 100,100"]
	},{
		duration: 500,
		easing: "ease-in"
	});
	addClass('liesShow');
	document.getElementsByClassName('delay')[0].classList.add('visible');

}

function code(){
	Velocity(liesShape, {
		points: ["1,0.000001 100,0.000001 100,100 0.000001,100 0.000001,1"]
		//SVGpoints in Velocity don't respond well to values of zero
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
	Velocity(codeShape, {
		points: ["100,0 100,0 100,100 0,100 0,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});
	Velocity(liesShape, {
		points: ["0,0 100,0 100,0 0,100 0,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});

	await new Promise(r => setTimeout(r, 500));//this little stunt allows elements to be hidden when they need to be, but also transition visibly
	document.getElementsByClassName('delay')[0].classList.remove('visible');
	document.getElementsByClassName('delay')[1].classList.remove('visible');
}
