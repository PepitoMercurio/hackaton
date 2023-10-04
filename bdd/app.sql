CREATE DATABASE IF NOT EXISTS Hackaton;

CREATE TABLE IF NOT EXISTS Users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    address_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type BOOLEAN NOT NULL,
    co2_id INT NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (address_id) REFERENCES User_Address(id),
    FOREIGN KEY (co2_id) REFERENCES CO2(id),
);

CREATE TABLE IF NOT EXISTS User_Address (
    id INT NOT NULL AUTO_INCREMENT,
    country VARCHAR(255) NOT NULL,
    address_1 VARCHAR(255) NOT NULL,
    address_2 VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    postal_code VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (user_id) REFERENCES Users(id),
);

CREATE TABLE IF NOT EXISTS CO2 (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    co2 FLOAT NOT NULL,
    co2_total FLOAT NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (user_id) REFERENCES Users(id),
);

CREATE TABLE IF NOT EXISTS reservation (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    station_id INT NOT NULL,
    reserv_date DATETIME NOT NULL,
    total_price FLOAT NOT NULL,
    code VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (user_id) REFERENCES Users(id),
)

CREATE TABLE IF NOT EXISTS invoices (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_amount FLOAT NOT NULL,
    amount_paid FLOAT NOT NULL,
    reservation_id INT NOT NULL,
    invoice_status BOOLEAN NOT NULL,
    payement_method VARCHAR(255) NOT NULL,
    invoice_date DATETIME NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (reservation_id) REFERENCES reservation(id)
);