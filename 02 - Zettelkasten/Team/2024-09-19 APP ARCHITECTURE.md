---
title: App Architecture
allDay: false
startTime: 11:30
endTime: 12:00
date: 2024-09-19
completed: null
---
## **[[Tech Stack]]**
### **Frontend**
---
- **Framework**
	React (`react`, `react-dom`)
	
- **Routing**
	React Router (`react-router-dom`)
	
- **Icons**
	React Icons (`react-icons`), Lucide React (`lucide-react`)
	
- **Testing**
	React Testing Library (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`)
	
- **Build Tool**
	React Scripts (`react-scripts`)
	
- **Performance Monitoring**
	Web Vitals (`web-vitals`)
	
- **Styling**
	Tailwind CSS (`tailwindcss`)
	
### **Backend**
---
- **Framework**
	Express (`express`)
	
- **Database**
	Sequelize ORM with MySQL (`sequelize`, `mysql2`)
	
- **Authentication**
	Passport (`passport`, `passport-google-oauth20`), JSON Web Token (`jsonwebtoken`)
	
- **Security**
	Helmet (`helmet`), Express Rate Limit (`express-rate-limit`), Express Mongo Sanitize (`express-mongo-sanitize`), XSS Clean (`xss-clean`), HPP (`hpp`)
	
- **Utilities**
	Body Parser (`body-parser`), Compression (`compression`), CORS (`cors`), Dotenv (`dotenv`), Morgan (`morgan`), Nodemailer (`nodemailer`), Multer (`multer`), Path (`path`), Pug (`pug`), Sharp (`sharp`), Winston (`winston`)
	
- **Testing**
	Jest (`jest`)
	
- **Development Tools**
	Nodemon (`nodemon`), Config (`config`)
	

This stack provides a robust setup for building a full-stack application with a React frontend and an Express backend, utilizing Sequelize for database management and various tools for security, authentication, and development efficiency.****


## **[[Folder Structure]]**

### **Frontend**
---
```css
.
├── .git
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── images
│   │   └── svgs
│   ├── components/
│   │   └── tailwindcardclass/
│   ├── features/
│   ├── layouts/
│   ├── pages/
│   ├── App.js
│   ├── Constants.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── .reviewboardrc
├── eslint.config.js
├── package-lock.json
├── package.json
└── tailwind.config.js
```

### **Backend**
---
```text

```


