const queries = require('../../database/index.js');

export default function success(req, res) {
  console.log('in api')
  queries.getDates(req, res);
};

export const config = {
  api: {
    externalResolver: true,
  },
};