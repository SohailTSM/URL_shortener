const express = require('express');
const router = express.Router();
const Url = require('../models/url');

router.get('/:code', async (req, res) => {
  const urlCode = req.params.code;
  const url = await Url.findOne({ urlCode });
  if (!url) {
    return res.status(404).json({ message: 'No such url found' });
  }
  res.redirect(url.longUrl);
});

module.exports = router;
