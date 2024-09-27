
```sql
CREATE TABLE Majors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);
```

```mysql
# Universities and Majors
CREATE TABLE UniversityMajors (
    university_id INT,
    major_id INT,
    PRIMARY KEY (university_id, major_id),
    FOREIGN KEY (university_id) REFERENCES Universities(id) ON DELETE CASCADE,
    FOREIGN KEY (major_id) REFERENCES Majors(id) ON DELETE CASCADE
);

# Scholarships and Majors
CREATE TABLE ScholarshipMajors (
    scholarship_id INT,
    major_id INT,
    PRIMARY KEY (scholarship_id, major_id),
    FOREIGN KEY (scholarship_id) REFERENCES Scholarships(id) ON DELETE CASCADE,
    FOREIGN KEY (major_id) REFERENCES Majors(id) ON DELETE CASCADE
);

```




Junction tables are a great way to manage many-to-many relationships and can indeed help with efficient filtering. To find universities that offer a specific major, you can join the `Universities`, `UniversityMajors`, and `Majors` tables. Here’s an example query:





```mysql
# filtering universities by major

SELECT u.*
FROM Universities u
JOIN UniversityMajors um ON u.id = um.university_id
JOIN Majors m ON um.major_id = m.id
WHERE m.name = 'Computer Science';
```




This query will return all universities that offer the “Computer Science” major.





```mysql
# filtering scholarships by major 

SELECT s.*
FROM Scholarships s
JOIN ScholarshipMajors sm ON s.id = sm.scholarship_id
JOIN Majors m ON sm.major_id = m.id
WHERE m.name = 'Computer Science';
```




This query will return all scholarships available for the “Computer Science” major.






The need for junction tables come as a means for managing several key things:
	
- **Data redundancy** 
	Without junction tables, you might end up duplicating data. For example, if you store majors directly in both the `Universities` and `Scholarships` tables, you would have to repeat the same major information multiple times. This redundancy can lead to inconsistencies if the data needs to be updated.
	
- **Data inconsistencies**
	When the same data is stored in multiple places, keeping it consistent becomes challenging. If a major’s name changes, you would need to update it in every place it appears. Missing an update in one place can lead to data inconsistency.

- **Scalability issues**
	As your database grows, managing many-to-many relationships without junction tables becomes increasingly complex. Adding new relationships or entities would require significant schema changes, making the system less flexible and harder to maintain.

- **Complex queries**
	Without junction tables, queries to retrieve related data become more complex and less efficient. For example, finding all scholarships for a specific major would require complex joins and subqueries, which can degrade performance.

- **Normalization**
	Junction tables help in normalizing the database, which is a fundamental principle of relational database design. Normalization reduces redundancy and dependency by organizing fields and table relationships. This makes the database more efficient and easier to manage.

- **Referential integrity**
	Junction tables enforce referential integrity by ensuring that relationships between tables are consistent. For example, if a major is deleted, the junction table can ensure that all related entries in the `UniversityMajors` and `ScholarshipMajors` tables are also removed, maintaining data integrity.