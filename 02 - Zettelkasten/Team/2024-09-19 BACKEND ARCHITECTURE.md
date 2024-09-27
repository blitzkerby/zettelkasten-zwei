---
title: Backend Architectrue
allDay: false
startTime: 15:30
endTime: 16:00
date: 2024-09-19
completed: null
---
# **University and Scholarship Lists** 

- [[University Table]]
- [[Scholarships Table]]
- [[Links Table]]
- [[Majors Table]]
- [[Filter function]]
---
The university list and the scholarship list pages have an identical layout, only differing in the content being displayed. 

For the university page, displays information solely about the university.
Whereas, the scholarship page, displays information about scholarships belonging to the universities. 

$$\large{
\{ Scholarship \} \in \{ University \}
}$$

#### **Primary Table definitions**

```mysql
# majors
CREATE TABLE Majors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

# universities
CREATE TABLE Universities (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    telegram_url VARCHAR(255),
    facebook_url VARCHAR(255),
    instagram_url VARCHAR(255),
    image_url VARCHAR(255),
    image_alt VARCHAR(255)
);

# scholarships
CREATE TABLE Scholarships (
    id INT PRIMARY KEY AUTO_INCREMENT,
    university_id INT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    amount DECIMAL(10, 2),
    deadline DATE,
    FOREIGN KEY (university_id) REFERENCES Universities(id)
);

# links
CREATE TABLE Links (
    id INT PRIMARY KEY AUTO_INCREMENT,
    entity_type ENUM('university', 'scholarship') NOT NULL,
    entity_id INT NOT NULL,
    link_type VARCHAR(50),
    url VARCHAR(255) NOT NULL,
    FOREIGN KEY (entity_id) REFERENCES Universities(id) ON DELETE CASCADE,
    FOREIGN KEY (entity_id) REFERENCES Scholarships(id) ON DELETE CASCADE
);
```



#### **Junction Table definitions**

Universities and Majors

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




## **Filter Component**
---
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




## **Card Component**

---

### **Description**

Fetch a specified length of a string from a MySQL table using the `SUBSTRING` function. Here’s an example:

```mysql
SELECT SUBSTRING(description, 1, 100) AS brief_description
FROM your_table
WHERE id = your_id;
```



### **Social links**

With this structure, we can easily join the `Scholarships` table with the `Universities` table to fetch the university’s social links and location for each scholarship. Here’s an example query to get scholarship details along with the university’s social links and location:

```sql
SELECT 
    s.id AS scholarship_id,
    s.name AS scholarship_name,
    s.description AS scholarship_description,
    s.amount,
    s.deadline,
    u.name AS university_name,
    u.location,
    u.website,
    u.telegram_url,
    u.facebook_url,
    u.instagram_url,
    u.image_url,
    u.image_alt
FROM 
    Scholarships s
JOIN 
    Universities u ON s.university_id = u.id;
```




## **Details Component**


### **University Page**

To get the full details of a specific university, including its description, you can use the following query:

```sql
SELECT 
    id,
    name,
    description,
    location,
    website,
    telegram_url,
    facebook_url,
    instagram_url,
    image_url,
    image_alt
FROM 
    Universities
WHERE 
    id = ?;  -- Replace ? with the university ID you want to fetch
```

Fetching the data for universities can be done as such:

```javascript
import axios from 'axios';
import { useState, useEffect } from 'react';

const UniversityPage = ({ universityId }) => {
    const [university, setUniversity] = useState(null);

    useEffect(() => {
        axios.get(`/api/universities/${universityId}`)
            .then(response => {
                setUniversity(response.data);
            })
            .catch(error => {
                console.error('Error fetching university data:', error);
            });
    }, [universityId]);

    if (!university) return <div>Loading...</div>;

    return (
        <div>
            <h1>{university.name}</h1>
            <p>{university.description}</p>
            {/* Render other university details */}
        </div>
    );
};

export default UniversityPage;
```




### **Scholarship Page**

To get the full details of a specific scholarship, including its description and the associated university details, you can use this query:

```sql
SELECT 
    s.id AS scholarship_id,
    s.name AS scholarship_name,
    s.description AS scholarship_description,
    s.amount,
    s.deadline,
    u.id AS university_id,
    u.name AS university_name,
    u.description AS university_description,
    u.location,
    u.website,
    u.telegram_url,
    u.facebook_url,
    u.instagram_url,
    u.image_url,
    u.image_alt
FROM 
    Scholarships s
JOIN 
    Universities u ON s.university_id = u.id
WHERE 
    s.id = ?;  -- Replace ? with the scholarship ID you want to fetch
```

Fetching the data for scholarships can be done as such:

```javascript
import axios from 'axios';
import { useState, useEffect } from 'react';

const ScholarshipPage = ({ scholarshipId }) => {
    const [scholarship, setScholarship] = useState(null);

    useEffect(() => {
        axios.get(`/api/scholarships/${scholarshipId}`)
            .then(response => {
                setScholarship(response.data);
            })
            .catch(error => {
                console.error('Error fetching scholarship data:', error);
            });
    }, [scholarshipId]);

    if (!scholarship) return <div>Loading...</div>;

    return (
        <div>
            <h1>{scholarship.scholarship_name}</h1>
            <p>{scholarship.scholarship_description}</p>
            <h2>University: {scholarship.university_name}</h2>
            <p>{scholarship.university_description}</p>
            {/* Render other scholarship and university details */}
        </div>
    );
};

export default ScholarshipPage;
```






