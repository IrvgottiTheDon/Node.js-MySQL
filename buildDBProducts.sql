-- DROP SCHEMA IF EXISTS bamazon
CREATE DATABASE IF NOT EXISTS bamazon;
USE bamazon;
-- DROP TABLE IF EXISTS bamazon.products
CREATE TABLE IF NOT EXISTS bamazon.products(
   item_id INT AUTO_INCREMENT NOT NULL,
   product_name VARCHAR(128) NOT NULL,
   department_name VARCHAR(128) NULL,
   price DECIMAL(7,2) NULL DEFAULT 0,
   stock_quantity INT NULL DEFAULT 0,
    PRIMARY KEY (item_id)
);
INSERT INTO bamazon.products(product_name,department_name,price,stock_quantity)
VALUES("Air Jordan Retro OG's","Nike",120.00,9),
("Air Jordan Retro 1's","Nike",150.00,9),
("Air Jordan Retro 2's","JordanCollectable",160.00,9),
("Air Jordan Retro 3's","Nike",150.00,7),
("Air Jordan Retro 4's","SneakerHeadz",150.00,7),
("Air Jordan Retro 5's","JordanCollectable",200.00,3),
("Air Jordan Retro 6's","Nike",160.00,5),
("Air Jordan Retro 7's","SneakerHeadz",160.00,7),
("Air Jordan Retro 8's","SneakerHeadz",150.00,8),
("Air Jordan Retro 9's","JordanCollectable",200.00,3),
("Jordan Chicago Jersey","SneakerHeadz",120.00,9),
("Kobe Bryant Lakers Jersey","SneakerHeadz",120.00,9),
("LeBron James Lakers Jersey","SneakerHeadz",120.00,9)