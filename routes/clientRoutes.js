const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');

router.get('/', controller.list);
router.get('/count', controller.count);
router.get('/name/:name', controller.findByName);
router.get('/:id', controller.findByID);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.del);

module.exports = router;
