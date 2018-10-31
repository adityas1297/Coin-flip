function flipCoin() {
	var result = Math.random();
	if(result <= 0.5)
		document.getElementById('flipResult').innerHTML = "HEAD";
	else document.getElementById('flipResult').innerHTML = "TAILS";
}

function reload() {
	// body...
	// window.location.reload();
	document.getElementById('flipResult').innerHTML = "";
}