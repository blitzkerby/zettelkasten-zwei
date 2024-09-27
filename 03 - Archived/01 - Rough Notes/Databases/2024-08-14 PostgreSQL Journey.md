---
title: MySQL Journey
allDay: false
startTime: 08:30
endTime: 09:00
date: 2024-08-14
completed: 
tags:
  - SQL
---

# Normalized Data

Normalization is a process of transforming data to eliminate redundancy, improve data integrity, and facilitate efficient querying. It is applied in both statistics and database design.

**Statistics**

In statistics, normalization refers to the creation of shifted and scaled versions of statistics to enable comparison of corresponding values across different datasets, eliminating the effects of certain gross influences. Normalization can take various forms, including:

- Scaling values to a common range
- Adjusting values to bring entire probability distributions into alignment
- Creating nondimensional ratios of errors, residuals, means, and standard deviations

Normalization in statistics helps to:

- Eliminate units of measurement and enable comparison of data from different sources
- Reduce the impact of outliers and anomalies
- Improve the accuracy of statistical models and inferences

**Database Design**

In database design, normalization is the process of structuring a relational database to reduce data redundancy and improve data integrity. It involves applying formal rules to create a database design that:

- Eliminates insertion, update, and deletion dependencies
- Reduces the need for restructuring the database as new data is introduced
- Improves data consistency and reduces errors

Normalization in database design helps to:

- Reduce data redundancy and improve data integrity
- Improve query performance and efficiency
- Facilitate data maintenance and updates

**Types of Normalization**

There are several types of normalization, including:

- First Normal Form (1NF): Eliminates repeating groups
- Second Normal Form (2NF): Eliminates partial dependencies
- Third Normal Form (3NF): Eliminates transitive dependencies
- Boyce-Codd Normal Form (BCNF): Eliminates anomalies and ensures data consistency
- Higher normal forms (4NF, 5NF, etc.): Further refine the database design to eliminate more complex dependencies

**When to Normalize**

Normalization is essential in:

- Transactional systems that require strict data integrity
- Databases with complex relationships and dependencies
- Applications where data consistency and accuracy are critical
- Situations where data redundancy and errors need to be minimized

**Conclusion**

Normalization is a crucial process in both statistics and database design, aimed at eliminating redundancy, improving data integrity, and facilitating efficient querying. By understanding the different types of normalization and when to apply them, you can create robust and reliable systems that meet your data management needs.










# COMMANDS
---

```PostgreSQL
CREATE TABLE cars(
	brand VARCHAR(255),
	model VARCHAR(255),
	year INT
)
```

```PostgreSQL
INSERT INTO cars (brand, model, year)
```

```PostgreSQL
SELECT * FROM cars;              --Return all columns
SELECT brand, model FROM cars;   --Return specific column
SELECT DISTINCT brand FROM cars; --Return only unique values
```

```PostgreSQL
SELECT COUNT(DISTINCT country) FROM customers 
```
>
>	Returns the number of different countries there are in the customers table.
> 

```PostgreSQL
SELECT * FROM cars
WHERE year < 1975; --Only returns indices that satisfy the condition
```
>	
>	`WHERE` can accept all logical operators
>	
>	`=` : equal to    
>	`<` : less than   
>	`>` : greater than
>	`<=` : less than or equal to
>	`>=` : greater than or equal to
>	`<>` : Not equal to
>	`!=` : Not equal to
>	
>	`LIKE` : check if the value matches a pattern (case sensitive) 
>	`ILIKE` : check if the value matches a pattern (case insensitive) 
>	`AND` : Logical AND
>	`OR` : Logical or
>	`IN` : check if a value is between a range of values
>	`BETWEEN` : check if a value is between a range of values
>	`IS NULL` : check if a value is NULL
>	`NOT` : Makes a negative result 
>	


## EXAMPLES

```PostgreSQL
SELECT COUNT(*) FROM payment
WHERE amount NOT IN (0.99, 1.98, 0.69);

/*
 *   Returns all amounts that does not match the speicified values
 *   (0.99, 1.98, or0.69)
 */

```

```PostgreSQL
SELECT * FROM customers;
WHERE customer_name LIKE '%A%'

/*
 *   Returns all customers with a name that contains the letter ‘A’.
 */
```



```PostgreSQL
VALUES ('Ford', 'Mustang', 1954)
VALUES 
	('Volvo', 'p1800', 1968),
	('BMW', 'M1', 1978),
	('Toyota', 'Celica', 1975);
```



