const mongoose = require('mongoose');

const NobelPrizeSchema = new mongoose.Schema({
  prizes: {
    year: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    laureates: [{
      id: String,
      firstname: String,
      surname: String,
      motivation: String,
      share: String
    }]
  }
});

module.exports = mongoose.model('NobelPrizeModel', NobelPrizeSchema, 'prixNobel');


// const mongoose = require("mongoose");


// const NobelPrizeSchema = new mongoose.Schema({
//   content: {
//     year: {
//       type: String,
//       required: true
//     },
//     category: {
//       type: String,
//       required: true
//     }
//   }
// });




// // Définir la collection comme "prixNobel"
// module.exports = mongoose.model("DataModel", NobelPrizeSchema, "prixNobel");
