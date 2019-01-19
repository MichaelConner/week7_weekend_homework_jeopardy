const QuestionView = function (container, question) {
  this.questionsContainer = container;
  this.question = question;
};

QuestionView.prototype.render = function () {
  this.question.innerHTML = '';
  const questionContainer = document.createElement('div');
  this.questionsContainer.appendChild(questionContainer);

  const questionCategory = this.createElement('h3', `Category: ${this.question.category.title}`);
  this.questionsContainer.appendChild(questionCategory);

  const questionQuestion = this.createElement('h3', `Question: ${this.question.question}`);
  this.questionsContainer.appendChild(questionQuestion);

  const questionAnswer = this.createElement('h3', `Answer: ${this.question.answer}`);
  this.questionsContainer.appendChild(questionAnswer);

};

QuestionView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = QuestionView;
