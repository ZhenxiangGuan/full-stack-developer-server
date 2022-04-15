import * as tuitsDao from "../dao/tuits-dao.js";
import * as dao from "../dao/tuits-dao.js";

const tuitController = (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {

  const newTuit = {
    "likes": 1,
    "liked": false,
    "disliked": false,
    "handle": "Steven",
    "postedBy": {
      "username": "SG",
    },
    "comments": 222,
    "retuits": 111,
    "dislikes": 121,
    "logo_image": "./gg.jpg",

    ...req.body
  }

  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits()
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.send(status);

}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.send(status);
}

export default tuitController;


