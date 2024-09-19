# MERN Stack Project Setup

This project is a full-stack application using MySQL, Express, React, and Node.js (MERN stack).

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine
- MySQL installed and running
- Basic knowledge of JavaScript and Node.js

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install backend dependencies:
    ```bash
npm install bcrypt bcryptjs compress compression cors dotenv express express-rate-limit helmet hpp jsonwebtoken morgan multer mysql mysql2 nodemailer path sequelize validator xss-clean
    ```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
JWT_SECRET=yourjwtsecret
```

4. Run the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `client` directory:
    ```bash
    cd client
    ```

2. Install frontend dependencies:
    ```bash
    npm install @emotion/react @emotion/styled @fontsource/poppins @fontsource/roboto @mui/icons-material @mui/material @reduxjs/toolkit @testing-library/jest-dom @testing-library/react @testing-library/user-event axios dotenv jwt-decode lucide-react react react-dom react-icons react-redux react-router-dom react-scripts react-toastify styled-components web-vitals @babel/plugin-proposal-private-property-in-object tailwindcss
    ```

3. Create a `.env` file in the `client` directory and add your environment variables:
    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Run the frontend server:
    ```bash
    npm start
    ```

## Usage

1. Ensure MySQL is running and the database is set up.
2. Start the backend server:
    ```bash
    cd backend
    npm start
    ```
3. Start the frontend server:
    ```bash
    cd frontend
    npm start
    ```

## Docker Setup (Optional)

If you prefer to use Docker, follow these steps:

1. Build the Docker images:
    ```bash
    docker-compose build
    ```

2. Run the Docker containers:
    ```bash
    docker-compose up
    ```

## Contributing

To contribute to this project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push to the original branch: `git push origin <project_name>/<location>`.
5. Create the pull request.

## Contact

If you want to contact me, you can reach me at <your-email@example.com>.

## License

This project uses the following license: [<license_name>].
