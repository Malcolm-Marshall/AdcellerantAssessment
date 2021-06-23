const mysql = require('mysql');
const data = require('./data.js');
const login = require('./config.js');

const connection = mysql.createConnection({
  host: login.host,
  user: login.user,
  password: login.password,
  database: 'productInfo'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to MySQL!`)
  }
});

const seed = (data) => {
  for (let i = 0; i < data.length; i++) {
    connection.query('INSERT INTO productData (product, date, platform, impressions, clicks) VALUES (?, ?, ?, ?, ?)', [data[i].product, data[i].date, data[i].platform, data[i].impressions, data[i].clicks])
  }
};

seed(data);


const getData = (req, res) => {
  connection.query('SELECT * FROM productData', function(err, result) {
    if (err) {
      console.log(err)
      res.status(400).send(err);
    };
    res.status(200).send(result)
  })
};

const getAmazon = (req, res) => {
  connection.query(`SELECT * FROM productData WHERE platform="Amazon"`, function(err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    };
    res.status(200).send(result);
  });
};

const getDates = (req, res) => {
  connection.query('SELECT DISTINCT date FROM productData', function(err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    };
    res.status(200).send(result);
  })
};

const getMaxClicks = (req, res) => {
  connection.query('SELECT * FROM productData WHERE clicks = (SELECT MAX(clicks) FROM productData)', function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    };
    res.status(200).send(result);
  });
};

const getMaxImpressions = (req, res) => {
  connection.query('SELECT * FROM productData WHERE impressions = (SELECT MAX(impressions) FROM productData)', function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    };
    res.status(200).send(result);
  });
};

module.exports = {
  getData,
  getAmazon,
  getDates,
  getMaxClicks,
  getMaxImpressions
}