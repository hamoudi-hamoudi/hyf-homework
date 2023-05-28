DROP DATABASE

IF EXISTS data;
	CREATE DATABASE

IF NOT EXISTS data;
	USE data;

SET NAMES utf8mb4;

CREATE TABLE meal (
	id INT (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY
	,title VARCHAR(255) NOT NULL
	,description TEXT NOT NULL
	,location VARCHAR(255) NOT NULL
	,`when` DATETIME NOT NULL
	,max_reservations INT (10) NOT NULL
	,price DECIMAL NOT NULL
	,created_date DATE NOT NULL
	) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE Review (
	id INT (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY
	,title VARCHAR(255) NOT NULL
	,description TEXT NOT NULL
	,stars INT (10) NOT NULL
	,created_date DATE NOT NULL
	,meal_id INT (10) unsigned NOT NULL
	,CONSTRAINT fk_meal FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
	) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE Reservation (
	id INT (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY
	,number_of_guests INT (10) NOT NULL
	,created_date DATE NOT NULL
	,contact_phonenumber VARCHAR(255) NOT NULL
	,contact_name VARCHAR(255) NOT NULL
	,contact_email VARCHAR(255) NOT NULL
	,meal_id INT (10) unsigned NOT NULL
	,CONSTRAINT fk2_meal FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
	) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Meal
insert into meal (id, title,description, location,`when`,max_reservations,price,created_date) 
values (2, 'meal_2', 'meal 2 the best food you get','near you','2023-10-26 10:54:16',5,50,'2023-5-26 06:54:16') ;
insert into meal (id, title,description, location,`when`,max_reservations,price,created_date) 
values (3, 'meal_3', 'meal 3 the best food you get','near you','2023-10-27 10:54:16',6,60,'2023-5-27 06:54:16') ;
insert into meal (id, title,description, location,`when`,max_reservations,price,created_date) 
values (4, 'meal_4', 'meal 4 the best food you get','near you','2023-10-28 10:54:16',7,70,'2023-5-28 06:54:16') ;
insert into meal (id, title,description, location,`when`,max_reservations,price,created_date) 
values (5, 'meal_5', 'meal 5 the best food you get','near you','2023-10-29 10:54:16',8,80,'2023-5-29 06:54:16') ;
insert into meal (id, title,description, location,`when`,max_reservations,price,created_date) 
values (6, 'Rød grød med fløde', 'Rød grød med fløde the best food you get','near you','2023-10-30 10:54:16',10,90,'2023-5-30 06:54:16') ;

-- Reservation

insert into reservation (id, number_of_guests,created_date,contact_phonenumber,contact_name ,contact_email,meal_id) 
values (2, 10, '2023-5-25 06:54:16','93899017','hamoudi','hamoudi@galleripulsart.dk',2) ;
insert into reservation (id, number_of_guests,created_date,contact_phonenumber,contact_name ,contact_email,meal_id) 
values (3, 10, '2023-5-30 06:54:16','93899017','hamoudi','hamoudi@galleripulsart.dk',3) ;
insert into reservation (id, number_of_guests,created_date,contact_phonenumber,contact_name ,contact_email,meal_id) 
values (4, 10, '2023-5-31 06:54:16','93899017','hamoudi','hamoudi@galleripulsart.dk',4) ;
insert into reservation (id, number_of_guests,created_date,contact_phonenumber,contact_name ,contact_email,meal_id) 
values (5, 10, '2023-6-25 06:54:16','93899017','hamoudi','hamoudi@galleripulsart.dk',5) ;
insert into reservation (id, number_of_guests,created_date,contact_phonenumber,contact_name ,contact_email,meal_id) 
values (6, 10, '2023-5-20 06:54:16','93899017','hamoudi','hamoudi@galleripulsart.dk',6) ;

-- Review

insert into review (id, title,description, stars,created_date,meal_id) 
values (2, 'our meal', 'really bad',2,'2023-10-31 10:59:16',2) ;
insert into review (id, title,description, stars,created_date,meal_id) 
values (3, 'our meal', 'bad',3,'2023-10-31 10:59:16',3) ;
insert into review (id, title,description, stars,created_date,meal_id) 
values (4, 'our meal', 'good',4,'2023-10-31 10:59:16',4) ;
insert into review (id, title,description, stars,created_date,meal_id) 
values (5, 'our meal', 'really good',5,'2023-10-31 10:59:16',5) ;
insert into review (id, title,description, stars,created_date,meal_id) 
values (6, 'our meal', 'the best',6,'2023-10-31 10:59:16',6) ;