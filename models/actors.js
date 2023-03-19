const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({

  name: { type: String, required: true },

  bio: String,

  dob: Date,

  country: { type: String, required: true },
  
  movies: [{
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    },
    character: String
  }]
});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;
