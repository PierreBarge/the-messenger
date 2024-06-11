CREATE TABLE message (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    creation_date DATETIME NOT NULL,
    modification_date DATETIME
);