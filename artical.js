var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema ({
    created: {
        type: Date,
        default: Date.now
      },
   title: {
    type: String,
    default: '',
    trim: true,
    require: 'Title Cannot be blank'
   }, 
    content: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Article', articleSchema);