$("#start").on("click", function () {
    game.start();
});

var questions = [{
    question: " What is the name of the main character in 'Red Dead Redemption 2'?",
    answers: ["Dutch Vanderlin", "Arthur Morgan", "Jake Marston", "John Marston"],
    correctAnswers: "Arthur Morgan"
}, {
    question: "Which game did Master Chief first appear in?",
    answers: ["Quake", "Myst", "Grand Theft Auto", "Halo"],
    correctAnswers: "Halo"
}, {
    question: "What is considered the best selling video game of all time?",
    answers: ["Call of Duty", "Tetris", "Minecraft", "Pong"],
    correctAnswers: "Minecraft"
}, {
    question: "What year was 'Gears of War' released?",
    answers: ["2000", "2004", "2006", "2008"],
    correctAnswers: "2006"
}, {
    question: "What is a lie?",
    answers: ["The Cake", "Reality", "Existance", "Life",],
    correctAnswers: "The Cake"
}, {
    question: "Finish the Quote: 'A man chooses, a slave.....'",
    answers: ["Obeys", "Runs", "Listens", "Worships"],
    correctAnswers: "Obeys"
}, {
    question: "What do the NPCs of 'Mass Effect' call your character?",
    answers: ["Commander", "Shepard", "Master", "Commander Shepard"],
    correctAnswers: "Commander Shepard"
}, {
    question: "How many regular 'Halo' games are there to date?",
    answers: ["1", "3", "2", "5"],
    correctAnswers: "5"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            game.done()
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2>Time Remaining:<span id='counter'>120</span> Seconds</h2>")
        $("start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>")
            for (var a = 0; a < questions[i].answers.length; a++) {
                $("#subwrapper").append("<input type='radio' name='question-" +i+"' value='" + questions[i].answers[a] + "'>" + questions[i].answers[a])
            }
        }
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswers) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswers) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswers) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswers) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
        result: function(){
            clearInterval(timer);
            $("#subwrapper h2").remove();

            $("#subwrapper").html("<h2>Game Over</h2>");
            $("#subwrapper").append("<h3>Correct Answers: " +this.correct+ "</h3>");
            $("#subwrapper").append("<h3>Incorrect Answers: " +this.incorrect+ "</h3>");
            $("#subwrapper").append("<h3>Unaswered:"+(questions.length-(this.incorrect+this.correct))+"</h3>");
        },
    
}
