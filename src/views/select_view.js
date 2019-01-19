const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Questions:question-data-loaded', (evt) => {
    const allQuestions = evt.detail;
    console.log(evt.detail);
    allCategories = allQuestions.map(question => question.category.title)
    uniqueCategories = Array.from(new Set(allCategories))
    this.populate(uniqueCategories);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    console.log(evt.target.value);
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function (questionData) {
  questionData.forEach((category, index) => {
    const option = document.createElement('option');
    option.textContent = category;
    option.value = index;
    option.id = category
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
