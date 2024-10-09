---
title: IAM Roles and Policies
allDay: false
startTime: 09:30
endTime: 10:00
date: 2024-09-30
completed: 
tags:
  - AWS
---
### There is a difference between
the User group and the roles. The user group can be thought of as a large encompassing entity for handling certain operations of the app, whereas the roles are the specific jobs required in those operations. 

Think of the User Group as the department of Engineering, where the members can be assigned different Roles such as mechanical engineer, electrical engineer, etc…

### Policies are documents
that define permissions and are written in JSON

`AdministratorAccess`
```json
{
	"Version" : "2012-10-17",
	"Statement" : [
		{
			"Effect" : "Allow",
			"Action" : "*",
			"Resource" : "*"
		}
	]
}
```

`Bucket Policy`
```json
{
	"Version": "2012-10-17",
	"Id": "Policy1561964929358",
	"Statement":[
		{
			"Sid": "Stmt1561964454052",
			"Effect": "Allow",
			"Principal": {
				"AWS" : "arn:aws:iam::515148227241:user/Paul"
			},
			"Action": "s3:*",
			"Resource": "arn:aws:s3:::dctcompany",
			"Condition": {
				"StringLike": {
					"s3:prefix": "Confidential/*"
				}
			}
		}
	]
}
```

