import posts from "./tuits.js";
let tuits = posts;

const tuitController = (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}


const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime()+'';
  newTuit.likes = 1;
  newTuit.liked = false;
  newTuit.disliked = false;
  newTuit.handle = "Steven";
  newTuit.username = "SG";
  newTuit.comments = 222;
  newTuit.retuits = 111;
  newTuit.dislikes = 121
  newTuit['logo-image'] ="/tuiter/gg.jpg";
  tuits = [newTuit, ...tuits]
  res.json(newTuit);
}

const findAllTuits = (req, res) => {
  res.json(tuits);
}

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
  res.sendStatus(200);
}


const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
  res.sendStatus(200);}


export default tuitController;


