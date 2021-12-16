var shannon = document.getElementById("shannon");

var changed = false;

function changeColor(item) {
	console.log('clicked')
	console.log(item.style.backgroundColor)
	if (!this.changed) {
		item.style.backgroundColor = "red";
		this.changed = true
	} else {
		item.style.backgroundColor = "pink";
		this.changed = false
	}
	
}