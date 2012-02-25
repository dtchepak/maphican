function start(operator, first, second, answer) {
    var controls = {
        bind: function(question) {
                first.text(question.first);
                operator.text(question.operator);
                second.text(question.second);
                answer.val("");
              }
    }

    var game = new Game();

    var Enter = 13;

    answer.keyup(function(event) { 
        if (event.which != Enter) return;
        if (game.is_correct(answer.val()) == true) {
            controls.bind(game.next_question());
        } else {
            answer.val("");
        }
    });

    controls.bind(game.next_question());
}


var Game = function() {
    var current_question = new Question();

    return {
        next_question: function() {
                   current_question = new Question();
                   return current_question;
              },
        is_correct: function(answer) {
                         return current_question.answer() == answer;
                     }
    };

}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

var Question = function() {
    return {
        first: randomBetween(0,12),
        second: randomBetween(0,12),
        operator: "*",
        answer: function() { return this.first * this.second; }
    };
}



