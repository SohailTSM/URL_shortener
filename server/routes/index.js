const express = require('express');
const router = express.Router();

router.get('/:code', (req, res) => {
  const urlCode = req.params.code;
  res.json({ urlCode });
});

module.exports = router;
