 -- script that creates a tables called first_table
 -- desc 
	--id INT
	--name VARCHAR(256)

CREATE DATABASE IF NOT EXISTS hbtn_0c_0;

use  hbtn_0c_0; 

CREATE TABLE first_table IF NOT EXIST(
	id int,
	name VARCHAR(256)
);
