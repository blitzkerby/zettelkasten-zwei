
## **Connecting**

First, ensure that `mysql` is recognized as a command on the terminal. 

>
>	If it isn’t recognized then you must setup the proper path environment variable for it.
>


You can check if it works by running:

```bash
mysql --version
```


If it works properly you should see the following output:

```text
mysql  Ver 8.0.39 for Win64 on x86_64 (MySQL Community Server - GPL)
```


Assuming that everything is properly connected you should be able to connect to the root. 

By default, MySQL does not set a password for the root user, however, during the installation process, you are often prompted to set a root password.

Connect to your root user:

```bash 
mysql -u root -p
```
>
>	Then enter the password to the root user.
>


If the connection is successful, your terminal should show the following:

```bash
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 31
Server version: 8.0.39 MySQL Community Server - GPL

Copyright (c) 2000, 2024, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```


## **Setting Up**
#### ***Set up new database***
---
In the query, enter the following:

```MYSQl
CREATE DATABASE products
```

Now create a new table product inside product database and populate it with the following indices:

```MYSQL 
USE products;

CREATE TABLE `product` (
	`productId` varchar(200) NOT null,
	`producTitle` varchar(300) DEFAULT null,
	`productDescription` varchar(500) DEFAULT null,
	`productPrice` float DEFAULT null,
	`availableQuantity` int DEFAULT null,
	`productThumbnail` varchar(500) DEFAULT null,
	PRIMARY KEY (`productId`)
);
```

Upon execution of the queries above, by switching to “Schemas” view and refreshing, you should be able to see the new `products` table.

You can check your table by running:

```mysql
SELECT * from product;
```


## Read more

- [[MySQL commands]]
