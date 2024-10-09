
```javascript
// server.js
app.get('/api/items', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const [results, metadata] = await sequelize.query(
    `SELECT * FROM items LIMIT ${limit} OFFSET ${offset}`
  );

  const totalItems = await Item.count();
  const totalPages = Math.ceil(totalItems / limit);

  res.json({
    data: results,
    pagination: {
      totalItems,
      totalPages,
      currentPage: page,
      pageSize: limit,
    },
  });
});

```

- **Create an API endpoint** that accepts pagination parameters (e.g., `page` and `limit`).

- **Query the database** to fetch the required data based on these parameters.
  
- **Return the data** along with pagination metadata (e.g., total items, total pages).






```javascript
// actions.js
export const fetchItems = (page = 1, limit = 10) => async (dispatch) => {
  const response = await fetch(`/api/items?page=${page}&limit=${limit}`);
  const data = await response.json();

  dispatch({
    type: 'FETCH_ITEMS_SUCCESS',
    payload: data,
  });
};
```





```javascript
// reducer.js
const initialState = {
  items: [],
  pagination: {
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
  },
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        items: action.payload.data,
        pagination: action.payload.pagination,
      };
    default:
      return state;
  }
};
```





```jsx
// PaginationComponent.js
const PaginationComponent = ({ pagination, onPageChange }) => {
  const { totalPages, currentPage } = pagination;

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
```





```jsx
// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from './actions';
import PaginationComponent from './PaginationComponent';

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const pagination = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(fetchItems(pagination.currentPage, pagination.pageSize));
  }, [dispatch, pagination.currentPage, pagination.pageSize]);

  const handlePageChange = (page) => {
    dispatch(fetchItems(page, pagination.pageSize));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <PaginationComponent pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
```