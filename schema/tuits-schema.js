import mongoose from 'mongoose';
const schema = mongoose.Schema({
  logo_image: String,
  tuit : String,
  likes : Number,
  liked : Boolean,
  disliked: Boolean,
  handle : String,
  postedBy: {
    username: String,
  },
  comments : Number,
  retuits : Number,
  dislikes : Number
}, {collection: 'tuits'});
export default schema;