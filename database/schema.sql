DROP DATABASE IF EXISTS nozama;
CREATE DATABASE nozama;

USE nozama;

CREATE TABLE products (
Id INT NOT NULL ,
Product_name VARCHAR(50) NOT NULL,
Product_url VARCHAR(255) NOT NULL,
Price INT NOT NULL,
Product_description VARCHAR(255) NOT NULL,
Category VARCHAR(50) NOT NULL,
Vendor VARCHAR(50) NOT NULL,
Stars INT NOT NULL,
Size VARCHAR (20),
PRIMARY KEY (id)
);
