---
title: The Problem JWT Aims to Solve
allDay: false
startTime: 09:30
endTime: 10:00
date: 2024-09-17
completed: 
author: Flavio Copes
---
It turns out that authentication isn’t easy to implement securely. I’ve made many web projects with simple hand-written authentication processes, where I just store the user’s identifier and password as plain JSON strings in JavaScript localStorage and pass them to any region of my application that needs authenticated access.

Fortunately, those projects didn’t have many users (or any in most cases), so it wasn’t rewarding to exploit. If the web applications had many (and important) users and had authentication implemented this way, it would’ve meant disaster.

Signed tokens prevent these kinds of disasters by:

- Removing the need to store passwords in localStorage: A session ID in a signed token is enough to identify users. If the signature is generated using the HMAC SHA-256 algorithm, and the key used to create the signature is kept with extreme secrecy, and as random as possible, you can rest assured that only the authentication server can produce and verify the signature (provided that an attacker doesn’t have access to a quantum computer, and know how to use it)
  
- Removing the need for redundant database querying: If claims about a user can be stored in a JWT and the integrity of the claims can be assured with the signature in a JWS, an API can use those claims without raising any concerns

But JWTs aren’t perfect solutions for secure authentication. They still have issues and concerns to look out for (and possibly work around) when using them in your project.