const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({

  name: { type: String, required: true },

  bio: String,

  dob: Date,

  country: { type: String, required: true },
  
  movies: [{
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    }
  }]
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;
