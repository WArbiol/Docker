CREATE DATABASE IF NOT EXISTS programadorabordo;
USE programadorabordo;

CREATE TABLE IF NOT EXISTS products (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(225),
    pice DECIMAL(10, 2),
    PRIMARY KEY (id)
);

INSERT INTO products VALUE(0, 'Curso para Front-end', 2500);
INSERT INTO products VALUE(0, 'Curso de JS Fullstack', 900);