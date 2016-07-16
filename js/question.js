var Question = function(data){
	this.question = data.question;
	this.options = data.options;
	this.answer =	data.answer;
	this.feedback = data.feedback;
};

Question.prototype.show = function(){
	var html = '<h1>' + this.question + '</h1>';
	for(i = 0; i < this.options.length; i++){
		html += '<label><input type="radio" name="answer" class="option" value="' + i + '">' + this.options[i] + '</label>';
	}
	html += '<input type="button" id="submit" value="Submit Answer">';
	$(".questionViewer").html(html);
};


