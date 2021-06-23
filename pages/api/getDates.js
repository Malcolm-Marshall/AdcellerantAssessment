const queries = require('../../database/index.js');

export default function success(req, res) {
  queries.getDates(req, res);
};

export const config = {
  api: {
    externalResolver: true,
  },
};