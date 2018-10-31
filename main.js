function flipCoin() {
	document.getElementById('flipResult').innerHTML = "Flipping...";
	setTimeout(actualFlipping, 2000);
}
function actualFlipping() {
	// body...
	var result = Math.random();
	if(result <= 0.5)
		document.getElementById('flipResult').innerHTML = "HEADS";
	else document.getElementById('flipResult').innerHTML = "TAILS";
}

function reload() {
	// body...
	// window.location.reload();
	document.getElementById('flipResult').innerHTML = "";
}