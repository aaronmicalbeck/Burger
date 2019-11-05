DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

create table (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured Boolean,
  PRIMARY KEY(id)
)