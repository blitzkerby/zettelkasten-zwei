---
~
---
```sql
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
    image_alt VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```
 
```javascript
const University = sequelize.define('University', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: DataTypes.STRING,
    website: DataTypes.STRING
});
```

```javascript
University.hasMany(Scholarship, { foreignKey: 'university_id' });
```

```javascript
app.get('/universities', async (req, res) => {
    const universities = await University.findAll();
    res.json(universities);
});
```