function lies(){
var els = [shape, liesButton[0]];
console.log(els)
Velocity(growBackground, {
points: ["100,100 100,100 100,100 100,100 100,100"]
},{
	duration: 0
	});
/*Velocity(shrinkBackground, {
  points: ["100,70 100,100 70,100"]
	},{
		duration: 900,
		easing: "ease-in",
	});*/
Velocity(els, {
	left: "62vw",
	top: "62vh"/*top:"84vh",
	left:"64vw",*/
  /*points: ["100,70 100,100 70,100*/
},{
	duration: 900,
	easing: "ease-in",
	sync: true

});
/*Velocity(, {
	top:"84vh",
	left:"64vw"
},{
	duration: 900,
	easing: "ease-in",
	sync: true
});
/*liesButton[0].setAttribute("id","liesClicked");
codeButton[0].setAttribute("id","codeHide");
console.log(liesButton[0]);*/
}
