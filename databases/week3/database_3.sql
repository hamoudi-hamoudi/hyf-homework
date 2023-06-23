-- Queries
-- Meal
select * from meal;
insert into meal (id, title,description, location,`when`,max_reservations,price,created_date) 
values (1, 'homes', 'traditional palestinian food','jerusalem','2023-5-25 06:54:16',10,12.5,'2023-10-25 10:54:16') ;
select * from meal where id=1;
update meal set `when` = '2023-10-25 10:54:16', created_date = '2023-5-25 06:54:16' where id=1; 
delete from meal where id=1;

-- Reservation
select * from reservation;
insert into reservation (id, number_of_guests,created_date,contact_phonenumber,contact_name ,contact_email,meal_id) 
values (1, 10, '2023-5-25 06:54:16','93899017','hamoudi','hamoudi@galleripulsart.dk',1) ;
select * from reservation where id=1;
update reservation set contact_name = 'douham', contact_email = 'douham@galleripulsart.dk' where id=1; 
delete from reservation where id=1;

-- Review
select * from review;
insert into review (id, title,description, stars,created_date,meal_id) 
values (1, 'our meal', 'really good',5,'2023-5-31 10:59:16',1) ;
select * from review where id=1;
update review set stars = 4.5, created_date = '2023-6-1 10:59:16' where id=1; 
delete from review where id=1;

-- Additional queries
select * from meal where price < 70;
select * from meal inner join reservation on meal.id = reservation.meal_id where reservation.created_date > now();
select * from meal where meal.title like '%Rød grød med%';
select * from meal where created_date between '2023-5-25' and now();
select * from meal limit 3;
select * from meal inner join review on meal.id = review.meal_id where review.stars > 3 ;
select meal.title from meal inner join reservation on meal.id = reservation.meal_id 
where meal.title like '%meal%'order by reservation.created_date;
select avg(review.stars) as 'average' ,meal.title from meal 
inner join review on meal.id = review.meal_id group by meal.id order by avg(review.stars) DESC;