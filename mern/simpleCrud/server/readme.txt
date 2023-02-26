#simple Crud - (About this project)
-- Its a simple appliction to know how data is sent from client to server inbetween two services.
--  save data from form and display data is done.

# Tech stack - ReactJS,MySQL,Nodejs,Express JS
Youtube link - https://www.youtube.com/watch?v=re3OIOr9dJI&t=1355s


#DB DETAILS
DB NAME - employee
-- show create table employee_system.employees;
CREATE TABLE `employees` ( `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` tinytext NOT NULL,
 `age` int(11) NOT NULL,
 `country` tinytext NOT NULL,
 `position` tinytext NOT NULL,
 `wage` int(11) NOT NULL,
 PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1

 #HOW to run project
 1. client --> navigate to client folder and run yarn start
 1. server --> navigate to server folder and run node index.js
