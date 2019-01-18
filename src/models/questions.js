const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Questions = function () {
  this.data = null;
};

// Questions.prototype.bindEvents = function () {
//   PubSub.subscribe('QuestionListView:form-submitted', (event) => {
//     console.log(event.detail);
//     const question = event.detail
//     this.getData(question)
//   });
// };

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

module.exports = Questions;
