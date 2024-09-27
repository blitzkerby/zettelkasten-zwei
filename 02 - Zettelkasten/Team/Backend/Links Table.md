
### Schema

```sql
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

When using a separate table for links, you don’t need to add the `entity_id` to the `Universities` and `Scholarships` tables. Instead, the `Links` table will reference the IDs from these tables.

### Example Usage

To insert a link for a university:

```mysql
INSERT INTO Links (entity_type, entity_id, link_type, url)
VALUES ('university', 1, 'official website', 'https://www.example.com');
```

To insert a link for a scholarship:

```sql
INSERT INTO Links (entity_type, entity_id, link_type, url)
VALUES ('scholarship', 1, 'application form', 'https://www.example.com/apply');
```

To extract all relevant links for a university, you can use the following query:

```mysql
SELECT 
    u.id,
    u.name,
    u.description,
    u.location,
    u.website,
    u.telegram_url,
    u.facebook_url,
    u.instagram_url,
    u.image_url,
    u.image_alt,
    l.link_type,
    l.url
FROM 
    Universities u
LEFT JOIN 
    Links l ON u.id = l.entity_id AND l.entity_type = 'university'
WHERE 
    u.id = 1; -- Replace 1 with the specific university ID
```

To extract all relevant links for a scholarship, you can use the following query:

```mysql
SELECT 
    s.id,
    s.name,
    s.description,
    s.location,
    s.website,
    s.telegram_url,
    s.facebook_url,
    s.instagram_url,
    s.image_url,
    s.image_alt,
    l.link_type,
    l.url
FROM 
    Scholarships s
LEFT JOIN 
    Links l ON s.id = l.entity_id AND l.entity_type = 'scholarship'
WHERE 
    s.id = 1; -- Replace 1 with the specific scholarship ID
```

Benefits of a Separate Links Table

- **Scalability**: Easily add more links without altering the main tables.
- **Flexibility**: Store different types of links and associate them with various entities.
- **Normalization**: Keeps your database structure clean and avoids redundancy.

