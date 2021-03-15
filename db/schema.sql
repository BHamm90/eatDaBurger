CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(30), 
    devoured BOOLEAN default false NOT NULL,
    PRIMARY KEY (id)
);