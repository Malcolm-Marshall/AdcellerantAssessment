const queries = require('../../database/index.js');

export default function success(req, res) {
  queries.getData(req, res);
};

export const config = {
  api: {
    externalResolver: true,
  },
};