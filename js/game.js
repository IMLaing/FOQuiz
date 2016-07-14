var Game = function(data){
	// the variable question is taking the data from the game constructor which includes the new Question objects from the questionList
	this.questions = data.questions;
	this.currentQuestion = 0;	
	this.score = 0;
};

// 'this' refers to the object that is created by the Game constructor
Game.prototype.show = function(){
	// get current question 
	var question = this.questions[this.currentQuestion];
	// display current question
	question.show();
	//display current score
	this.showScore();
	console.log(this.currentQuestion + ' currentQUesiton FROM THE SHOW FUNCTION');
};
//changing the DOM from within the object- objects wrap logic in to meaningful keywords
Game.prototype.showScore = function(){
	$('.currentQuestionNumber').html('<p> Question Number ' + (this.currentQuestion + 1) + ' of 5</p>');
};

Game.prototype.setAnswer = function(){
	console.log('clicked #submit');
	// the variable question is taking the data from the game constructor which includes the new Question objects from the questionList
	var question = this.questions[this.currentQuestion];
	var answer = $('input[type="radio"]:checked').val();
	console.log(answer + 'this is what the val is');
	console.log( question.answer);
	if (answer ==  question.answer) {
		this.score++;
		console.log('correct! You have answered ' + this.score + ' questions correctly');
	} else {
		console.log('wrong');

	}
	this.next();	
};

Game.prototype.next = function(){
	this.currentQuestion++;
	if ( this.currentQuestion < this.questions.length){
		question = this.questions[this.currentQuestion];
		console.log(this.currentQuestion);
		question.show(); 
	} else {
		alert ('No More Questions');
	}
};