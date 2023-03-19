const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },

  year: { type: Number, required: true },

  main_actor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor'
  }],

  director: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director'
  }],

  cast: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor'
  }],

  genres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  }],

  country: { type: String, required: true },

  plot: String,
  
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
