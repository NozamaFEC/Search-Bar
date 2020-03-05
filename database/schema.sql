DROP DATABASE IF EXISTS nozama;
CREATE DATABASE nozama;

USE nozama;

CREATE TABLE products (
id INT NOT NULL ,
product_name VARCHAR(50) NOT NULL,
product_url VARCHAR(255) NOT NULL,
price INT NOT NULL,
product_description VARCHAR(255) NOT NULL,
category VARCHAR(50) NOT NULL,
vendor VARCHAR(50) NOT NULL,
stars INT NOT NULL,
size VARCHAR (20),
PRIMARY KEY (id)
);
