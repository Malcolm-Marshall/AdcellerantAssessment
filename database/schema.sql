DROP DATABASE IF EXISTS productInfo;

CREATE DATABASE productInfo;

USE productInfo

CREATE TABLE productData
(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product VARCHAR(50),
  date VARCHAR(50),
  platform VARCHAR(50),
  impressions int,
  clicks int
);

