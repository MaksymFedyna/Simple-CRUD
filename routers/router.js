const express = require('express');

const userControllers = require('../controllers/userControllers');

const router = express.Router();

router
    .route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.addUser);
router
    .route('/:id')
    .get(userControllers.getUser)
    .delete(userControllers.deleteUser)
    .put(userControllers.updateUser);


module.exports = router;