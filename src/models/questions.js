const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Questions = function () {
  this.data = [];
};

Questions.prototype.getData = function () {
  const url = `http://jservice.io/api/clues`;
  const request = new RequestHelper(url);

  const myPromise = request.get();

  myPromise.then((data) => {
    console.log(data);
    this.data = data;
    PubSub.publish('Questions:question-data-loaded', this.data);
  })
  .catch((err) => {
    console.error(err);
  })
};

Questions.prototype.bindEvents = function () {
  PubSub.publish('Questions:data-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    console.log(evt.detail);
    const selectedIndex = evt.detail;
    this.publishQuestionDetail(selectedIndex);
  });
};

Questions.prototype.publishQuestionDetail = function (selectedIndex) {
  const selectedCategory = this.data[selectedIndex];


  PubSub.publish('Questions:selected-question-ready', selectedCategory)
};


module.exports = Questions;
