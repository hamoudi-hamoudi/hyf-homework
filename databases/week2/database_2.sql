-- Part 1: Working with tasks
-- using database from lesson 1 
-- Add a task
INSERT INTO user(name,email,phone) VALUES ('hamoudi','hamoudi@galleripulsart.dk','45-9389-9017');
INSERT INTO task(title, description, created, updated, due_date, status_id, user_id) 
VALUES ('add a task','hamoudi adds a new task','2023-5-21 19:23:16','2023-5-21 22:53:16','2023-6-00 17:00:00',2,(SELECT id FROM user WHERE name='hamoudi'));

-- Change the title of a task and due-date 
UPDATE task SET title= 'task updated',
 due_date = '2023-10-25 06:54:16'where id = 1;

-- Change a task status and Mark a task as complete
UPDATE task SET status_id=3,due_date=null WHERE id = 1;

-- Delete a task 
 DELETE FROM task WHERE id=10;

--  Part 2: School database
-- Create a new database 
DROP DATABASE IF EXISTS school;
CREATE DATABASE IF NOT EXISTS school;
USE school;

SET NAMES utf8mb4;
create table class (
id int (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name varchar(255) NOT NULL, 
 begins DATETIME NOT NULL, 
 ends DATETIME NOT NULL

)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


create table student (
id int (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name varchar(255) NOT NULL, 
 email varchar(255) NOT NULL, 
 phone varchar(255) NOT NULL,
 class_id int(10) unsigned NOT NULL,
 CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES class (id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index 
CREATE INDEX student_name_idx ON student (name);

-- Add a new column to the class table named status 
ALTER TABLE class ADD status enum('not-started','ongoing','finished');

-- Part 3: More queries
-- Get all the tasks assigned to users whose email ends in @spotify.com 
SELECT * FROM user_task INNER JOIN task ON task_id = task.id 
WHERE user_id = (SELECT id FROM user WHERE email LIKE '%@spotify.com%');

-- Get all the tasks for 'Donald Duck' with status 'Not started' 
SELECT * FROM task INNER JOIN user_task ON task_id = task.id 
WHERE user_id = (SELECT id FROM user WHERE name = 'Donald Duck') 
AND status_id = (SELECT id from status WHERE name = 'Not started');

-- Get all the tasks for 'Maryrose Meadows' that were created in september 
SELECT * FROM task INNER JOIN user_task ON task_id = task.id 
WHERE user_id = (SELECT id FROM user WHERE name = 'Maryrose Meadows') 
AND MONTH(created)=9 ;

-- ind how many tasks where created in each month 
SELECT MONTH(created) AS Month , count(*) AS tasks
FROM task
GROUP BY MONTH(created);