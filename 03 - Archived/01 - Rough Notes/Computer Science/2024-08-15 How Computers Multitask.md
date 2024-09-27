---
title: How Computers Multitask
allDay: false
startTime: 08:00
endTime: 08:30
date: 2024-08-15
completed: 
tags:
  - Computer-Science
---

# Asynchronicity
---
In a _synchronous_ programming model, [things happen one at a time]. When you call a function that performs a long-running action, it returns only when the action has finished and it can return the result. This stops your program for the time the action takes.


[An asynchronous model allows multiple things to happen at the same time.] When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result (for example, the data read from disk).


We can compare synchronous and asynchronous programming using a small example: a program that [fetches] two resources from the network and then combines results.


In a synchronous environment, where the request function returns only after it has done its work, the easiest way to perform this task is to make the requests one after the other. This has the drawback that the second request will be started only when the first has finished. The total time taken will be at least the sum of the two response times.


The solution to this problem, in a synchronous system, is to start additional threads of control. 

A _thread_ is [another running program whose execution may be interleaved with other programs by the operating system—since most modern computers contain multiple processors, multiple threads may even run at the same time, on different processors.]

A second thread could start the second request, and then both threads wait for their results to come back, after which they resynchronize to combine their results.


>	
>	In the following diagram, 
>	- the thick lines represent time the program spends running normally
>	- the thin lines represent time spent waiting for the network. 
>	 
>	In the synchronous model, the time taken by the network is _part_ of the timeline for a given thread of control. In the asynchronous model, starting a network action conceptually causes a _split_ in the timeline. The program that initiated the action continues running, and the action happens alongside it, notifying the program when it is finished.
>	
>	![[Pasted image 20240815103211.png]]
>	


Another way to describe the difference is that waiting for actions to finish is _implicit_ in the synchronous model, while it is _explicit_, under our control, in the asynchronous one.