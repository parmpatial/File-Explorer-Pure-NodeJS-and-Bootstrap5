var playing = false;
var action;
var timeRemaining;
var correctAnswer;
// if we click on Start/Reset
document.getElementById('startreset').onclick = function() {
        //if we are playing
        if (playing == true) {
            location.reload(); //reload page
        } else {
            //if we are not playing
            //change mode to playing
            playing = true;
            //set score to 0
            score = 0;
            document.getElementById('scorevalue').innerHTML = score;
            //show countdown box

            show('timeremaining');
            timeRemaining = 60;
            document.getElementById('trvalue').innerHTML = timeRemaining;
            //hide game over box
            hide('gameover');

            //to change button to reset game
            document.getElementById('startreset').innerHTML = "Reset Game"
                //show countdown box
            showCountdown();
            //genrate a new QA
            genrateQA();
        }

    }
    //if we click on answer box
for (i = 1; i < 5; i++) {
    document.getElementById('box' + i).onclick = function() {
        //if we are playing
        if (playing == true) //yes
        {
            if (this.innerHTML == correctAnswer) //correct answer
            {
                //yes
                //increase score
                score++;
                document.getElementById('scorevalue').innerHTML = score;
                //show correct box for sec and hide wrong box
                hide('wrong');
                show('correct');
                setTimeout(function() {
                        hide('correct');
                    }, 1000)
                    //genreate QA
                genrateQA();
            } else {
                //wrong answer
                hide('correct');
                show('wrong');
                setTimeout(function() {
                    hide('wrong');
                }, 1000)
            }
        }
    }

}






//genreate new QA
//no
//show try again box for 1 sec
function showCountdown() {
    action = setInterval(function() {
        timeRemaining--;
        document.getElementById('trvalue').innerHTML = timeRemaining;
        if (timeRemaining == 0) {
            //game Over
            stopCountdown();
            show('gameover')
            document.getElementById('gameover').innerHTML = "<p>Game Over!</p><p>Your Score is" + score + ".</p>"
            hide('timeremaining');
            hide('correct');
            hide('wrong');
            playing = false;
            document.getElementById('startreset').innerHTML = "Start Game"
        }
    }, 1000)
}

function stopCountdown() {
    clearInterval(action);
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function genrateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById('question').innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3 * Math.random());
    //fill correct box
    document.getElementById('box' + correctPosition).innerHTML = correctAnswer
        //fill wrong boxes
    var answers = [correctAnswer];
    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)
            answers.push(wrongAnswer);
            document.getElementById('box' + i).innerHTML = wrongAnswer;
        }
    }
}