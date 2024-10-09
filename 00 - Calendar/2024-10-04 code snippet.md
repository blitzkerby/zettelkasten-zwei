---
title: code snippet
allDay: false
startTime: 10:00
endTime: 10:30
date: 2024-10-04
completed: null
---
rsync -avz --exclude 'node_modules' --exclude '.git' \
-e "ssh -i ~/desktop/ssh/where2-keypair.pem" \
./ ubuntu@ec2-3-25-133-222.ap-southeast-2.compute.amazonaws.com:/home/ubuntu/