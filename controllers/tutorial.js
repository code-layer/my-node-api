const Tutorial = require("../models/tutorial");


const getTutorials = (req, res) => {
  Tutorial.find().limit(5)
    .then(
      (data) => {
        res.json(data);
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
};

const addTutorial = (req, res) => {
  const tut = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published,
  });


  tut.save().then((data) => {
    const resp = {
      '_id': data._id,
      '__v': data.__v,
      'createdAt': data.createdAt
    }


    res.json(resp);
  }).catch((err) => {
    console.log(err);
  })
};


module.exports = {
  addTutorial,
  getTutorials
};
