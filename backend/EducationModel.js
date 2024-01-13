const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  gender: {
    type: String,
    
  },
  'race/ethnicity': {
    type: String,
    
  },
  'parental level of education': {
    type: String,
    
  },
  lunch: {
    type: String,
    
  },
  'test preparation course': {
    type: String,
    
  },
  'math score': {
    type: Number,
    
  },
  'reading score': {
    type: Number,
    
  },
  'writing score': {
    type: Number,
    
  }
});

module.exports = mongoose.model('Education', EducationSchema, 'education');



