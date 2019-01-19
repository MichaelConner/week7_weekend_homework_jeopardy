const SelectView = require('./views/select_view.js');
const QuestionsListView = require('./views/questions_list_view.js');
const Questions = require('./models/questions.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#categories');
  const categoryDropdown = new SelectView(selectElement);
  categoryDropdown.bindEvents();

  const questionsListContainer = document.querySelector('#questions');
  const questionsListView = new QuestionsListView(questionsListContainer);
    questionsListView.bindEvents();

  const questions = new Questions();
  questions.getData();
  questions.bindEvents();
});
