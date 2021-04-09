const express = require('express')
const router = express.Router();
const Thing = require('../modeles/Thing')
const stuffCtrl = require('../contolleurs/Stuff');
const auth = require ('../middleware/auth')
const multer = require('../middleware/config-multer');
router.get('/',auth, stuffCtrl.getAllStuff);
router.post('/',auth,multer, stuffCtrl.createThing);
router.get('/:id',auth, stuffCtrl.getOneThing);
router.put('/:id',auth,multer, stuffCtrl.modifyThing);
router.delete('/:id',auth, stuffCtrl.deleteThing);

  module.exports = router;















