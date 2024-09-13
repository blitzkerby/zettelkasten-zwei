---
~
---

##### ***Connecting to a database***
---
```sql
psql -d postgres -U postgres
```


##### ***Quitting***
---
```sql
\q
```


##### ***Displaying different users***
---
```sql
\du
```


### ***Basic SQL Queries***
##### ***Select query***
---
```sql
SELECT id, name, email from merchants;
```


##### ***Insert query***
---
```sql
INSERT INTO merchants (name, email) VALUES ('john', 'john@mail.com');
```


##### ***Delete query***
---
```sql
DELETE from merchants WHERE id = 1;
```


##### ***Update query***
---
```sql
UPDATE merchants SET name = 'jake', email = 'jake@mail.com' WHERE id = 1;
```
