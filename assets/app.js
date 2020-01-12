$("#start").on("click", function() {
    for(var i=0; i<questions[i].length;i++){
        $('#subwrapper').append('<h2>'+questions[i].question+'</h2>')
        for(var a=0; a<questions[i].answers.length; a++) {
            $("#subwrapper").append("<input type= 'radio' name= 'question-"+i+" 'value=' " +questions[i].answers[a]+"'>"+questions[i].answers[a])
        }
    }
});

var questions = [{
    question:" What is the name of the main character in 'Red Dead Redemption 2'?",
    answers: ["Dutch Vanderlin", "Arthur Morgan", "Jake Marston", "John Marston"],
    correctAnswers: "Arthur Morgan",
}, {
    question: "Which game did Master Chief first appear in?",
    answers: ["Quake", "Myst", "Grand Theft Auto", "Halo"],
    correctAnswers: "Halo",
}, {
    question: "What is considered the best selling video game of all time?",
    answers: ["Call of Duty","Tetris","Minecraft","Pong"],
    correctAnswers: "Minecraft",
},  {
    question: "What year was 'Gears of War' released?",
    answers: ["2000", "2004", "2006", "2008"],
    correctAnswers: "2006",
    }
];