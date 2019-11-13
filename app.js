

function liesDrawer() {
	if (document.getElementById("liesButton").classList.contains("topSpace")) {
	document.getElementById("liesButton").classList.remove("topSpace");
} else {
	document.getElementById("liesButton").classList.add("topSpace");
}
	console.log("function fired");
}
