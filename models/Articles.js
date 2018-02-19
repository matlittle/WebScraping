var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  byline: {
    type: String
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notes"
    }
  ]
});

var Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;
