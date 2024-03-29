-- 1----
select
    count(id)
from
    task ;
-- 2----    
select
    count(id)
from
    task
where
    due_date is null ;
 -- 3----
select
    *
from
    task
    inner join status on task.status_id = status.id
where
    task.status_id = 3 ;
 -- 4----
select
    *
from
    task
    inner join status on task.status_id = status.id
where
    task.status_id != 3 ;
-- 5----
select
    *
from
    task
order by
    created DESC ;
-- 6----
select
    *
from
    task
order by
    created DESC
limit 1 ;
-- 7----
select
    title,
    due_date
from
    task
where
    description like '%database%'
    or title like '%database%' ;
-- 8----
select
    task.title,
    status.name
from
    task
    inner join status on task.status_id = status.id ;
-- 9----
select
    status.name,
    count(status_id)
from
    task
    inner join status on task.status_id = status.id
group by
    status_id ;
-- 10----
select
    status.name
from
    task
    inner join status on task.status_id = status.id
group by
    status_id
order by
    count(status_id) DESC ;