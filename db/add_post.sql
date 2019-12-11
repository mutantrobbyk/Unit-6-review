insert into post (user_id, image_url)
values ($1, $2);
select * from post
where user_id = $1