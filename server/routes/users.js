const router = require('express').Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.json(err);
    } else {
      res.json(users);
    }
  })
})

router.post('/', (req, res) => {
  const { body } = req;
  User.create(body, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  })
})

router.get('/:id', (req, res) => {
  User.findById(id, (err, user) => {
    if (err) {
      res.json(err)
    } else {
      res.json(user)
    }
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  User.findByIdAndUpdate(id, body, { new: true }, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  })
})

module.exports = router;