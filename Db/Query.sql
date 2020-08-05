 USE iscanner;
CREATE TABLE passengers(
UserId INT(30) AUTO_INCREMENT PRIMARY KEY,
FirstName VARCHAR(30) NOT NULL,
LastName VARCHAR(30) NOT NULL,
Email VARCHAR(50) NOT NULL,
phone VARCHAR(20) NOT NULL,
Address VARCHAR(200) NOT NULL,
City VARCHAR(30) NOT NULL,
County VARCHAR(30) NOT NULL,
Country VARCHAR(30) NOT NULL,
ZipCode VARCHAR(30) NOT NULL
); 
select* from passengers;

insert into passengers (FirstName,LastName,Email,phone,Address,City,County,Country,ZipCode)
    values('fn','ln','eml','25','ad','Cty','cunt','cntry','zip');

CREATE TABLE test(
Id INT(30)  PRIMARY KEY,
t VARCHAR(30) NOT NULL);
insert into test(Id,t) values(1,t);
select* from users;


CREATE TABLE users(
uname VARCHAR(30) PRIMARY KEY,
pword VARCHAR(30) NOT NULL,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL,
phone varchar(20) NOT NULL,
address VARCHAR(200) NOT NULL);
ALTER TABLE users
ADD status varchar(20) NOT NULL
AFTER pword;

#https://www3.ntu.edu.sg/home/ehchua/programming/sql/MySQL_Beginner.html
CREATE TABLE Passenger(
PassportNumber VARCHAR(30)  PRIMARY KEY,
FirstName VARCHAR(30) NOT NULL,
LastName VARCHAR(30) NOT NULL,
Pasword VARCHAR (50)NOT NULL,
DateOfBirth DATE NOT NULL,
Email VARCHAR(50),
Mobile VARCHAR(20),
Phone VARCHAR(20),
CovidStatus TINYINT(1)  DEFAULT 0,
TemperatureReading DECIMAL(3,2)
); 
CREATE TABLE TravelDetails(
PassengerId INT PRIMARY KEY AUTO_INCREMENT,
PassportNumber VARCHAR(30) ,
FlightNumber VARCHAR (20) NOT NULL,
SeatNumber VARCHAR(30) NOT NULL,
DateOfArrival DATE  NOT NULL,
TimeOfArrival TIME  NOT NULL,
PointOfArrival VARCHAR(30) NOT NULL,
PoinOfDeparture VARCHAR(30)  NOT NULL,
ReasonForTravel VARCHAR (200)  NOT NULL,
NumberOfChild INT  NOT NULL,
Address VARCHAR(300),
City VARCHAR(30),
County VARCHAR(30),
ZipCode VARCHAR(30),
FOREIGN KEY (PassportNumber) REFERENCES Passenger (PassportNumber));

CREATE TABLE Child(
PassportNumber VARCHAR(30) NOT NULL PRIMARY KEY ,
ParentPassportNumber VARCHAR(30) ,
FirstName VARCHAR(30) NOT NULL,
LastName VARCHAR(30) NOT NULL,
DateOfBirth DATE NOT NULL,
Address VARCHAR(300),
City VARCHAR(30),
County VARCHAR(30),
ZipCode VARCHAR(30),
CovidStatus TINYINT(1) DEFAULT 0,
TemperatureReading DECIMAL(3,2),
FOREIGN KEY (ParentPassportNumber) REFERENCES Passenger (PassportNumber));

CREATE TABLE AirportAuthority(
EmployeNumber VARCHAR(30) DEFAULT '0' PRIMARY KEY,
Pasword VARCHAR(30) DEFAULT '123',
FirstName VARCHAR(30) NOT NULL,
LastName VARCHAR(30) NOT NULL,
usertype VARCHAR (10) DEFAULT 'airport',
Email VARCHAR(50) NOT NULL,
PhoneNumber VARCHAR(20),
Address VARCHAR(300),
City VARCHAR(30),
County VARCHAR(30),
ZipCode VARCHAR(30),
Country VARCHAR (30),
EmployeStatus VARCHAR (20));

CREATE TABLE HseStaff(
EmployeNumber VARCHAR(30) DEFAULT '0' PRIMARY KEY,
Pasword VARCHAR(30) DEFAULT '123',
FirstName VARCHAR(30) NOT NULL,
LastName VARCHAR(30) NOT NULL,
usertype VARCHAR(10) DEFAULT 'hse',
Email VARCHAR(50) NOT NULL,
PhoneNumber VARCHAR(20),
Address VARCHAR(300),
City VARCHAR(30),
County VARCHAR(30),
ZipCode VARCHAR(30),
Country VARCHAR (30),
EmployeStatus VARCHAR (20));
CREATE TABLE Adm(
Id VARCHAR(30) DEFAULT 'admin',
Pasword  VARCHAR(30) DEFAULT '123',
usertype VARCHAR(10) DEFAULT "admin");
insert into Passenger(PassportNumber,FirstName,LastName,DateofBirth,Pasword)values('aa','a','a',10/12/20,'a')
select * from Adm
select * from Adm,Passenger where( Adm.Id='a'and Adm.Pasword='1') and (Passenger.PassportNumber='a' and Passenger.Pasword='1');
CREATE TABLE AirportSeq
(
  Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE HseSeq
(
  Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);


DELIMITER $$
CREATE TRIGGER AirportEmpNo_Insert 
BEFORE INSERT ON AirportAuthority
FOR EACH ROW
BEGIN
  INSERT INTO AirportSeq VALUES (NULL);
  SET NEW.EmployeNumber = CONCAT('IRL', LPAD(LAST_INSERT_ID(), 3, '0'));
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER HseEmpNo_Insert 
BEFORE INSERT ON HseStaff
FOR EACH ROW
BEGIN
  INSERT INTO HseSeq VALUES (NULL);
  SET NEW.EmployeNumber= CONCAT('HSE', LPAD(LAST_INSERT_ID(), 3, '0'));
END$$
DELIMITER ;











