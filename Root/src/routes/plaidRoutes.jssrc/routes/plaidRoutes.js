const express = require('express');
const router = express.Router();
const plaid = require('plaid');

const plaidClient = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments.sandbox,
});

router.post('/link', async (req, res) => {
  try {
    const { publicToken } = req.body;
    const tokenResponse = await plaidClient.exchangePublicToken(publicToken);
    res.status(200).send(tokenResponse);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
