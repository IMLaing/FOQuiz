var Game = function(data){
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

};