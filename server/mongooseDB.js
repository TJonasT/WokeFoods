const mongoose = require('mongoose');


const URI = 'mongodb+srv://jonasgantar:italien14@solo.bqdrmgr.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'solo'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  const userSchema = new Schema ({
    username: String,
    incredients: Object,
  });

  const User = mongoose.model('users', userSchema);

  module.exports = User;