
## **Basic Commands**

### **Showing databases**
---
You can reveal all of the databases which you currently have by running:

```mysql
SHOW DATABASES;
```


### **Selecting a database**
---
You *use* a specific database by running:

```mysql
USE database_name
```


### **Creating a Table**
---
Upon selecting a database, you can create a new table by running:

```mysql
CREATE TABLE table_name (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100),
	age INT
)
```
>
>	creates a table with an `id`, `name`, and `age` column.
>


### **Inserting Data**
---
Upon creating a table, you can populate your table with data by running:

```mysql
INSERT INTO table_name (name, age) VALUES ("John Doe", 30)
```
>
>	Inserts a index with `name` and `age` as ‘John Doe’ and ‘30’, respectively.
>


### **Querying data**
---
Upon populating a table with data, you can retrieve *all* of the data by running:

```mysql
SELECT * FROM table_name;
```
>
>	Retrieves *all* indices from the table.
>


### **Exiting MySQL**
---
You can quit MySQL by running:

```mysql
EXIT;
```


## **Advanced Queries**

### **Joining Multiple Tables**
---
Joining multiple tables is a common task in SQL. Here’s an example that joins three tables: `orders`, `customers`, and `products`.

```sql
SELECT 
    customers.customer_name,
    orders.order_date,
    products.product_name,
    order_details.quantity
FROM 
    orders
JOIN 
    customers ON orders.customer_id = customers.customer_id
JOIN 
    order_details ON orders.order_id = order_details.order_id
JOIN 
    products ON order_details.product_id = products.product_id
WHERE 
    orders.order_date BETWEEN '2023-01-01' AND '2023-12-31';
```


### **Using Subqueries**
---
Subqueries can be used to perform operations that require multiple steps. For example, finding customers who have placed more than five orders:

```sql
SELECT 
    customer_id, 
    customer_name
FROM 
    customers
WHERE 
    customer_id IN (
        SELECT 
            customer_id 
        FROM 
            orders 
        GROUP BY 
            customer_id 
        HAVING 
            COUNT(order_id) > 5
    );
```


### **Common Table Expressions (CTEs)**
---
CTEs can simplify complex queries by breaking them into more manageable parts. Here’s an example that calculates the total sales for each product:

```sql
WITH TotalSales AS (
    SELECT 
        product_id, 
        SUM(quantity * price) AS total_sales
    FROM 
        order_details
    GROUP BY 
        product_id
)
SELECT 
    products.product_name, 
    TotalSales.total_sales
FROM 
    TotalSales
JOIN 
    products ON TotalSales.product_id = products.product_id
ORDER BY 
    TotalSales.total_sales DESC;
```

### **Window Functions**
---
Window functions allow you to perform calculations across a set of table rows related to the current row. For example, calculating a running total of sales:

```sql
SELECT 
    order_date,
    product_id,
    SUM(quantity * price) OVER (ORDER BY order_date) AS running_total
FROM 
    order_details
ORDER BY 
    order_date;
```

AI-generated code. Review and use carefully. .

### **Recursive Queries**
---
Recursive queries can be used to work with hierarchical data. For example, finding all subordinates of a manager in an employee hierarchy:

```sql
WITH RECURSIVE EmployeeHierarchy AS (
    SELECT 
        employee_id, 
        manager_id, 
        employee_name
    FROM 
        employees
    WHERE 
        manager_id IS NULL
    UNION ALL
    SELECT 
        e.employee_id, 
        e.manager_id, 
        e.employee_name
    FROM 
        employees e
    INNER JOIN 
        EmployeeHierarchy eh ON e.manager_id = eh.employee_id
)
SELECT 
    * 
FROM 
    EmployeeHierarchy;
```


https://popsql.com/blog/complex-sql-queries
https://education.launchcode.org/SQL/chapters/mysql-part-2/complex-queries.html
https://learnsql.com/blog/advanced-sql-queries-for-data-analysis/
https://learnsql.com/blog/advanced-sql-practice/
https://learnsql.com/blog/25-advanced-sql-query-examples/