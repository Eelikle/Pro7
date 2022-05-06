const db = require("../Models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = db.User;

exports.login = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })
  console.log(user);
  if (!user) {
    return res.status(401).json({
      error: 'User not found!'
    });
  }
  bcrypt.compare(req.body.password, user.password).then(
    (valid) => {
      if (!valid) {
        return res.status(401).json({
          error: 'Incorrect password!'
        });
      }
      const token = jwt.sign(
        { userId: user.dataValues.id },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '24h' });
      res.status(200).json({
        userId: user.dataValues.id,
        token: token
      });
    }
  ).catch(
    (error) => {
      return res.status(500).json({
        error: error
      });
    }
  );
}



exports.signUp = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
        fullName: req.body.fullName,
      });
      user.save().then(
        () => {
          res.status(201).json({
            message: 'User added successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  );
}

exports.getAll = (req, res, next) => {
  User.findAll().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

exports.delete = (req, res) => {
  // FIXME verify req.token.userId === req.params.id to prevent hackers from deleting other user accounts
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(
    // TODO if number of rows delted is zero, then return error
    (numOfRows) => res.send(`Number of rows deleted: ${numOfRows}`)
  );
  // FIXME need to catch errors
};