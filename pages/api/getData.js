// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const queries = require('../../database/index.js');

export default function success(req, res) {
  console.log('in api')
  queries.getData(req, res);
};

export const config = {
  api: {
    externalResolver: true,
  },
};