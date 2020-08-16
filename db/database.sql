DROP database bdbchallenge;
CREATE DATABASE IF NOT EXISTS bdbchallenge;

USE bdbchallenge;

CREATE TABLE employee (
  id bigint primary key,
  name varchar(50),
  position varchar(30),
  salary bigint,
  boss_id bigint default null,
  foreign key(boss_id) references employee(id)
);

DESCRIBE employee;

INSERT INTO employee (id,name,position,salary) values 
  (1568925455, 'Andres Collazos','Technical Leader',5000000);
  
INSERT INTO employee (id,name,position,salary,boss_id) values
(1999852664, 'Edgar Arciniegas','Fullstack Ssr',5000000,1568925455),
(1023931285,'Alejandro Martinez','Fullstack Middle',4000000,1568925455);

SELECT * FROM employee;



ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SiliconValley123*';