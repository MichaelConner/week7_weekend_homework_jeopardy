const PubSub = require('../helpers/pub_sub.js');
const QuestionView = require('./question_view.js');

const QuestionsListView = function (container) {
  this.container = container;
}

QuestionsListView.prototype.bindEvents = function () {
  PubSub.subscribe('Questions:question-data-loaded', (evt) => {
    console.log(evt);
    this.question = evt.detail;
    this.render();
  });
};

QuestionsListView.prototype.render = function () {
  this.question.forEach((question) => {
    const questionView = new QuestionView(this.container, question);
    questionView.render();
  });
};

module.exports = QuestionsListView;
