const PubSub = require('../helpers/pub_sub.js');
const QuestionView = require('./question_view.js');
const SelectView = require('./select_view.js');
const RequestHelper = require('../helpers/request_helper.js')

const QuestionsListView = function (container) {
  this.container = container;
}

let uniqueCategories;

QuestionsListView.prototype.bindEvents = function () {
  let index;
  let categories;

  PubSub.subscribe('Questions:question-data-loaded', (event) => {
    questions = event.detail
    allCategories = questions.map(question => question.category.title)
    uniqueCategories = Array.from(new Set(allCategories))
  });

  PubSub.subscribe('SelectView:change', (evt) => {
    index = evt.detail;
    this.render(questions, index);
  });
};

QuestionsListView.prototype.render = function (questions, index) {
  this.container.innerHTML = '';

  questions.forEach(question => {
    if (question.category.title === uniqueCategories[index]) {
    const selectedQuestion = new QuestionView(this.container, question);
    selectedQuestion.render();
    };
  });
};

module.exports = QuestionsListView;
