var wordOptions = ["obstruction", "comrade", "collusion", "trump", "stormy"];

var selectedWord = [];

var lettersInWord = [];

var numBlank = [];

var blanksAndSuccesses = [];

var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlank; i++) {
        blanksAndSuccesses.push("");
    }

    document.getElementById(wordGuess).innerHTML = blanksAndSuccesses.join("");
    document.getElementById(numGuesses).innerHTML = guessesLeft;
    document.getElementById(winCount).innerHTML = winCount;
    document.getElementById(lossCount).innerHTML = lossCount;

    function checkLetters(letter) {
        var isLetterInWord = false;
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                isLetterInWord = true;
            }
        }

        if (isLetterInWord) {
            for (var i = 0; i < numBlank; i++)
                if (selectedWord[i] == letter) {
                    blanksAndSuccesses[i] = letter;
                }
        }
        else {
            wrongLetters.push(letter);
            guessesLeft--
        }
    }



    function rounComplete() {
        console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);

        document.getElementById("guessCount").innerHTML = guessesLeft;
        document.getElementById("wordGuess").innerHTML = blanksAndSuccesses.join("");
        document.getElementById("wrongCount").innerHTML = wrongLetters.join("");


        if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
            winCount++;
            alert("Congrats Comrade, you won!");

            document.getElementById("winCount").innerHtml = winCount;

            startGame();
        }

        else if (numGuesses == 0) {
            lossCount++;
            alert("Sorry Comrade, You lost!");

            document.getElementById(lossCounter).innerHTML = lossCount;

            startGame();
        }
    }




    document.onkeyup = function (event) {
        var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(letterGuess);
        roundComplete();
    }





}