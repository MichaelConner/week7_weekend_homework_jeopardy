const QuestionsListView = require('./views/questions_list_view.js');
const Questions = require('./models/questions.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const questionsListContainer = document.querySelector('#questions');
  const questionsListView = new QuestionsListView(questionsListContainer);
    questionsListView.bindEvents();

  const questions = new Questions();
  questions.getData();
});
