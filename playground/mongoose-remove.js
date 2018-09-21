const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove({}).then(())

Todo.findOneAndRemove({_id: '5ba51d663d84940ae5c7f440'}).then((todo) => {

});

Todo.findByIdAndRemove('5ba51d663d84940ae5c7f440').then((todo) => {
  console.log(todo);
});
