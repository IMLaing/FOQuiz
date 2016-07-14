	var questionList = [
	new Question({
	  question: "What technological invention was never created in the Fallout universe in 1947?",
	  options: ["Transistor Effect", "Soviet Gas-operated Rifle", "Quantum Mechanics", "The Clavioline", "Instant Camera"],
	  answer: 0,
	  feedback: "The transistor's lack of creation lead to no miniaturization of electronics."
	}), 
	new Question({
	  question: "How many commonwealths were created in 1969 Fallout Universe?",
	  options: [23, 42, 13, 16, 8],
	  answer: 2,
	  feedback: "The United States of America were divided in to 13 colonies."
	}), 
	new Question({
	  question: "What real life concept car was used as a model for one of the many Fallout Universe cars?",
	  options: ["Aurora Safety Car", "Ford Nucleon", "Phantom Corsair", "Bisiluro Damolnar", "Ferrari 250 Shooting Brake"],
	  answer: 1,
	  feedback: "The Ford Nucleon can be seen in ruins throughout the wastelands"
	}), 
	new Question({
	  question: "What is the code name for the Government's Vault project?",
	  options: ["Project Enduring Freedom", "Project Bunker", "Project Safehouse", "Project Eden", "Project Dwarf Fortress"],
	  answer: 2,
	  feedback: "Vault-Tec would later use the vaults as human experimentation chambers."
	}), 
	new Question({
	  question: "Which Charcter has made the most apperances in the Fallout game series?",
	  options: ["Ian", "Harold", "Tandi", "Dogmeat", "Robert House"],
	  answer: 1,
	  feedback: "Being the tree/ghoul that he is, Harold has an incredibly long life span."
	}) ];

	var game = new Game({questions: questionList});

console.log(game.questions);
$(document).ready(function(){
	game.show();
	console.log('game.show() ran');

$('.questionViewer').on("click", "#submit", function() {
	game.setAnswer();
	});
	
});

	console.log('the console.log directly prior to the submit function ran');



/* 	$(document).ready(function() {
	  var Game = {
	    nextQuestion: function() {
	      console.log('next question triggered');
	      $('.questionViewer').children().remove();
	      if (currentQuestion < 5) {
	        console.log('new question generated!');
	        var newQuestion = '<h1>' + questionList[currentQuestion].question +
	          '</h1><input type="radio" name="option" class="option" value="0">' +
	          questionList[currentQuestion].options[0] +
	          '<br><input type="radio" name="option" class="option" value="1">' +
	          questionList[currentQuestion].options[1] +
	          '<br><input type="radio" name="option" class="option" value="2">' +
	          questionList[currentQuestion].options[2] +
	          '<br><input type="radio" name="option" class="option" value="3">' +
	          questionList[currentQuestion].options[3] +
	          '<br><input type="radio" name="option" class="option" value="4">' +
	          questionList[currentQuestion].options[4] +
	          '<br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"></div>';
	        $(".questionViewer").html(newQuestion);
	      } else {
	        $('.questionViewer').remove();
	      }
	    },
	    updateAnswers: $('.questionViewer').on("click", "#submit", function() {
	      var answer = $('input[type="radio"]:checked').val();
	      if (answer == questionList[currentQuestion].answer) {
	        numberCorrect++;
	        console.log('correct! You have answered ' + numberCorrect + ' questions correctly');
	        currentQuestion++;
	        Game.nextQuestion();
	      } else {
	        console.log('wrong');
	        currentQuestion++;
	        Game.nextQuestion();
	      }
	      Game.currentQuestionSet();
	    }),
	    currentQuestionSet: function() {
	      if (currentQuestion < 5) {
	        $('.currentQuestionNumber').children().remove();
	        $('.currentQuestionNumber').append('<p> Question Number ' + (currentQuestion + 1) + ' of 5</p>');
	        $('.currentQuestionNumber').append('<p> ' + numberCorrect + ' of 5 correct!</p>');
	      } else {
	        $('.currentQuestionNumber').children().remove();
	        $('.currentQuestionNumber').append('<h1> Your final score is ' + numberCorrect + ' out of 5!</h1>');
	      }

	    },
	    reset: $('#reset').click(function() {
	      console.log('reset triggered ' + currentQuestion + ' ' + numberCorrect);
	      currentQuestion = 0;
	      numberCorrect = 0;
	      console.log('reset triggered ' + currentQuestion + ' ' + numberCorrect);
	      $('.currentQuestionNumber').children().remove();
	      console.log('Clear Question score');
	      $('.questionViewer').children().remove();
	      console.log('clear questions');
	      var newQuestion = '<h1>' + questionList[currentQuestion].question +
	        '</h1><input type="radio" name="option" class="option" value="0">' +
	        questionList[currentQuestion].options[0] +
	        '<br><input type="radio" name="option" class="option" value="1">' +
	        questionList[currentQuestion].options[1] +
	        '<br><input type="radio" name="option" class="option" value="2">' +
	        questionList[currentQuestion].options[2] +
	        '<br><input type="radio" name="option" class="option" value="3">' +
	        questionList[currentQuestion].options[3] +
	        '<br><input type="radio" name="option" class="option" value="4">' +
	        questionList[currentQuestion].options[4] +
	        '<br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"></div>';
	      $(".questionViewer").html(newQuestion);
	      $('.currentQuestionNumber').append('<p> Question Number ' + (currentQuestion + 1) + ' of 5</p>');
	      $('.currentQuestionNumber').append('<p> ' + numberCorrect + ' of 5 correct!</p>');
	      console.log('add questions');
	    })
	  };
	 
	  Game.nextQuestion();
	  Game.currentQuestionSet();

	});

	*/