delete from post
where post_id = $1;
select * from post 
where user_id = $2