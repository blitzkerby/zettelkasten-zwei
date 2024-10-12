To setup a server-side authentication follow to this backlink:
- **[[2024-09-16 Authentication with JWT|Basic Authentication Setup]]**
---

Authentication is typically handled server side. There are several important keys to take note of when setting it up to ensure security and proper user management.

### **User Registration** 

- ***Collection of user data***
	Gather necessary information that’s required to register (username, email, password, etc…)
	
- ***Hashing the Passwords***
	Use a strong hashing algorithm like `bycrpyt` to hash passwords before storing them in the database.
	
	
### ***User Login***

- ***Verification of Credentials***
	Anytime that a user attempts to log-in, the password provided by the user must be compared to the hashed password stored in the database.
	
- ***Offering Tokens***
	Upon successful login, JSON Web Tokens (JWTs), also referred to as session tokens, are generated and provided to the user’s device.
	 
	 
### ***Token Management***

- ***Access Tokens***
	These are short-lived tokens used to authenticate requests.
	
- ***Refresh Tokens***
	These are long-lived tokens used to obtain new *access tokens* without requiring the user to log in again.
	
	 
### ***Middleware for Protected Routes***

- ***Token Verification***
	Middleware is used to verify tokens for protected routed — without proper authentication, protected pages are inaccessible.
	
	
### ***Secure Communication***

- ***Use HTTPS***
	All communications between the client and server must be encrypted using HTTPS.
	
	
### ***Session Management*** (optional)

- ***Session Cookies***
	For stateful authentication, use secure HTPP-only cookies to manage sessions.
	
	
### ***Logout***

- ***Invalidate Tokens***
	Implement a mechanism to invalidate the tokens upon logout. This can be done by maintaining a blacklist or by changing the token secret.
	
	
### ***Best Practices***

- ***Use Environment Variables***
	Secret keys and other sensitive information should be stored in environment variables (`.env`) and be ignored by `.gitignore`.
	
- ***Regularly Update Dependencies***
	Keep the libraries and frameworks up to date to avoid security vulnerabilities.
	
	

