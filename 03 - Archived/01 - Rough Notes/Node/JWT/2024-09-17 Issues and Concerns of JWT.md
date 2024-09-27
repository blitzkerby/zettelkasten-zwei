---
title: Issues and Concerns of JWT
allDay: false
startTime: 09:30
endTime: 10:00
date: 2024-09-17
completed: 
author: Flavio Copes
---
## **What are issues and concerns to look out for?**

JWTs like many other tools in the world, aren’t perfect. They’re good for user authentication, but not without shortcomings. In this section, I’ll address some popular concerns.

So let’s start with the first concern.

### **JWTs aren’t encrypted**

Signed tokens provide the benefit of verifying the integrity of the claims in the tokens. This allows them to be useful for authentication purposes. This doesn’t mean that the claims stored in the tokens aren’t hidden.

If your web application needs to store sensitive information in tokens, the website needs to handle them with caution. Generally, you should avoid storing sensitive information in tokens because it is very difficult to protect them against all possible cybersecurity attacks. 

In cases where a web application needs to store sensitive information in tokens, encrypted forms of JWTs exist for this reason.

### **JWTs may need JavaScript to work**

Compared to the internet of the early 2000s modern-day internet is more secure. But, on its own, the modern-day internet still isn’t a hundred percent secure. Anything that JavaScript has access to can still potentially be exploited.

Because of the structure of modern applications, it has become more important for JavaScript to have access to the tokens to, for example, send requests to APIs. However, web applications have reasons for their structure, and in some cases, JavaScript having access to the tokens is unavoidable. Fortunately, the internet has gotten secure enough for access to JavaScript to be less of a concern than it was in the earlier internet.

There isn’t a good solution to this concern. Regardless of where you store tokens, you’re opening the tokens to at least one form of exploit. Storing in cookies or sessions is open to CSRF (Cross-Site Request Forgery) attacks, and storing anywhere JavaScript can access is open to XSS (Cross-Site Scripting) attacks.

### **JWTs are subject to size constraints**

Depending on how you store and transmit JWTs, they’re subject to size constraints imposed by browsers. For example, all browsers impose a 4 KB and 5 MB limit on the total amount of data that a web application can store in cookies and JavaScript localStorage respectively.

If your web application uses significant portions of these storage mechanisms (although unlikely), you can use session tokens instead. They’re smaller, but they can’t have payloads, with extra pieces of information, like with JWTs.