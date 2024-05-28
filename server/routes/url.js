const express = require('express');
const { nanoid } = require('nanoid');
const URL = require('url').URL;
const Url = require('../models/url');
const z = require('zod');

const baseUrl = process.env.BASEURL;
const router = express.Router();

const longUrlSchema = z.ob;

router.post('/shorten', async (req, res) => {
  const longUrl = req.body.longUrl || 'invalid url';

  try {
    new URL(longUrl);
  } catch (error) {
    return res.status(422).json({ message: 'Please enter a valid url' });
  }
  const urlCode = nanoid(8);
  const shortUrl = baseUrl + urlCode;
  const url = new Url({ longUrl, shortUrl, urlCode });
  await url.save();
  res.json({ shortUrl });
});

module.exports = router;
