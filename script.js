let emotions = ["anger", "disgust", "fear", "joy", "sadness"]
var answer = ""
var guessed = []
var word_progress = null
function random_word () {
	var random_emotion = Math.floor(Math.random() * emotions.length);
	answer = emotions[random_emotion];
}

function keyboard () {
	let buttonsHTML = "qwertyuiopasdfghjklzxcvbnm".split("").map(letter => `<button class="btn btn-lg btn-info m-2" id='` + letter +`' onClick="guess('` + letter + `')">` + letter + `</button>`).join("");
	document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function guess (letter_chose) {
	guessed.indexOf(letter_chose) === -1 ? guessed.push(letter_chose): null;
	document.getElementById(letter_chose).setAttribute("disabled", true);
	if (answer.indexOf(letter_chose) >= 0){
		guessed_word();
		end();
	}
}

function end () {
	if (word_progress===answer){
		document.getElementById("keyboard").innerHTML = "You have guessed the correct answer! Riley now knows what emotion she is feelling! Good job!";
	}
}

function guessed_word () {
	word_progress = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter: " _ ")).join("");
	document.getElementById("correct_word").innerHTML = word_progress;
}

function restart () {
	mistakes =0;
	guessed = [];
	random_word();
	keyboard();
	guessed_word();
}

random_word();
keyboard();
guessed_word();