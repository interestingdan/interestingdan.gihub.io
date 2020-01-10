const move = Array.from(document.getElementsByClassName('move'));

var shape = move[0];
//var shape = document.getElementById('shape')[0];

/*function setIds(idArr) {
	var j = idArr.length;
	for (i = 0; i < j; i++) {
		move[i].setAttribute("id",idArr[i]);
	};
}*/

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
	/*Velocity(shrinkBackground, {
		points: [liesMove]["100,100 100,100 100,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});*/
	/*var liesIds = [
		null, //0 shrinkBackGround
		null, //1 growBackground
		"liesFaderShow", //2 liesFader
		null, //3 codeFader
		null, //4 codeCloser
		"closerShow", //5 liesCloser
		"liesClicked", //6 liesButton
		"codeHide", //7 codeButton
		"linksContainerShow", //8 liesLinksContainer
		"linksShow", //9 liesLinks
		null, //10 codeLinksContainer
		null, //11 codeLinks
		"cornerShow", //12 bottomCorner
		null //13 topCorner
	];
	setIds(liesIds);*/
	addClass('liesShow');

}

function code(){
	/*Velocity(shrinkBackground, {
		points: ["100,100 100,100 100,100"]
	},{
		duration: 0
	});*/
	Velocity(shape, {
		points: ["1,0.000001 100,0.000001 100,100 0.000001,100 0.000001,1"]
	},{
		duration: 500,
		easing: "ease-in",
	});
	/*var codeIds = [
	null, //0 shrinkBackGround
	null, //1 growBackground
	null, //2 liesFader
	"codeFaderShow", //3 codeFader
	"closerShow", //4 codeCloser
	null, //5 liesCloser
	"liesHide", //6 liesButton
	"codeClicked", //7 codeButton
	null, //8 liesLinksContainer
	null, //9 liesLinks
	"linksContainerShow", //10 codeLinksContainer
	"linksShow", //11 codeLinks
	null, //12 bottomCorner
	"cornerShow" //13 topCorner
	];
	setIds(codeIds);
	*/
	addClass('codeShow');
}

function revert(){
	var j = move.length;
	for (i = 0; i < j; i++) {
		move[i].classList.remove('liesShow');
		move[i].classList.remove('codeShow');
		};

	/*Velocity(shrinkBackground, {
		points: ["100,0.0000001 100,100 0.0000001,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});*/
	Velocity(shape, {
		points: ["100,0 100,0 100,100 0,100 0,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});
}
