---
~
---

### **Establishing connection**
---
```javascript
const mysql = require('mysql2/promise'); // Import the MySQL library

// Create a connection pool
const pool = mysql.createPool({
  host: 'your-mysql-host',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

```


### **GET Request**
---
```javascript
app.get('/api/v1/tours', async (req, res) => {
  try {
    // Query the database to get tour data
    const [rows] = await pool.query('SELECT * FROM tours');

    res.status(200).json({
      status: 'success',
      results: rows.length,
      data: {
        tours: rows, // Include the actual tour data
      },
    });
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong while fetching tours.',
    });
  }
});

```

