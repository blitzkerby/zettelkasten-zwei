```sql
CREATE TABLE Scholarships (
    id INT PRIMARY KEY AUTO_INCREMENT,
    university_id INT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    amount DECIMAL(10, 2),
    deadline DATE,
    FOREIGN KEY (university_id) REFERENCES Universities(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

```javascript
const Scholarship = sequelize.define('Scholarship', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.TEXT,
    amount: DataTypes.DECIMAL,
    deadline: DataTypes.DATE
});
```

```javascript
Scholarship.belongsTo(University, { foreignKey: 'university_id' });
```

```javascript
app.get('/universities/:id/scholarships', async (req, res) => {
    const scholarships = await Scholarship.findAll({
        where: { university_id: req.params.id }
    });
    res.json(scholarships);
});
```

