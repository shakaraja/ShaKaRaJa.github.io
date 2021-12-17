var shannon = document.getElementById("shannon");

var changed = false;

var guesses = [];

var phrase = 'Little Shop of Horrors';

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
function letterPressed(letter) {
	console.log('LETTER:', letter);
}
// turns my gif into a gingerbread man
function ginger() {
	document.getElementById('ginger').src = 'https://tinyurl.com/2pddh37d';
	document.getElementById('ginger').width = '280';
	document.getElementById('ginger').height = '440'


}
// function that tells you whether the letter is in the phrase

// function that tells you whether the letter was already guessed

// function that tells you whether you still have guesses remaining