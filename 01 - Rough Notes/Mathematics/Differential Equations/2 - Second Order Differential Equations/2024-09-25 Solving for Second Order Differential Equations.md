---
title: Solving for Second Order Differential Equations
allDay: false
startTime: 21:00
endTime: 21:30
date: 2024-09-25
completed: 
tags:
  - differential-equations
  - "#second-order-differential-equations"
---
#### A general form for a second order linear differential equation is given by

$$\large{
	  {a(x)}{y''(x)} 
	+ {b(x)}{y'(x)}
	+ {c(x)}{y(x)} = f(x)
}$$

with characteristic equation, 

$$\large{
	\begin{align}
		ay'' + by' + c &= 0 \\
		ar^2 + br + c &= 0
	\end{align}
}$$

---

#### In operator terminology, where $\large{D=\frac{d}{dx}}$,

$$\large\begin{matrix}
	L = a(x)D^2 + b(x)D + c(x)
\end{matrix}$$
Thus,

$$\large{
	Ly = f
}$$

Implies, $\large{L}$ is a linear operator. Solving for the general solution of the homogeneous form,

$$\large{
	{L}{y_h} = 0
}$$

and a particular solution of the non-homogenous form,

$$\large{
	{L}{y_p} = f
}$$

provides the general solution,

$$\large{
	\begin{align}
		{L}{y}  &= {0} + {f} \\ 
				&= {L}{y_h} + {L}{y_p} \\ 
				&= {L}({y_h} + {y_p}) \\
	\end{align}
}$$

Implies,

$$\large{
	{y} = {y_h} + {y_p}
}$$

This is possible because of the linearity of $\large L$. 

If $\large{y_1}$ and $\large{y_2}$ are solutions of the homogenous equation, then the *linear combination*,

$$\large{
	y = {c_1}{y_1} + {c_2}{y_2}
}$$

is also a solution of the ***homogenous equation***, and is also the ***general solution*** if $\large{y_1}$ and $\large{y_2}$ are *linearly independent*.


### **Real Distinct Roots**
#### Assuming, $y(x) = e^{rx}$

will lead to the solutions of the differential equation with two real distinct roots $\large r_1$ and $\large r_2$, in the form,

$$\large{
	y(x) = {c_1}{ e^{ {r_1}{x} } } 
	     + {c_2}{ e^{ {r_2}{x} } }		
}$$

### **Real Repeated Roots**
#### Assuming, ${r} = {r_1} = {r_2}$

but there must be two independent solution, and must have that the ratio $\large{ \frac {y_2(x)} {y_1(x)}}$ not be constant. 

Since, a constant times a solution to a linear homogenous differential equation is also another solution. Therefore,

$$\large{
\begin{align}
	y_2(t) =v(t){y_1}(t)
\end{align}
}$$

We can solve for $\large y_1$ from the quadratic equation,
$$\large {
\begin{align}
	r_1 &= \frac{-b \pm \sqrt{b^2 - 4ac}}
				{2a} 
\end{align}
}$$
where, $\large \sqrt{b^2 - 4ac} = 0$

thus, 

$$\large{
	r_1 =  \frac{-b}
				{2a}
}$$
Therefore,
$$\large{
	\begin{align}
		y_1(t)  &= e^{r_1t} 
		\\
				&= e^{-\frac{b}{2a}t}
	\end{align}
}$$
Thus,
$$\large{
	\begin{cases}
		y_1(t) = e^{-\frac{b}{2a}t}
		\\
		y_2(t) = v(t) e^{-\frac{b}{2a}t}
	\end{cases}
}$$

https://tutorial.math.lamar.edu/Classes/DE/RepeatedRoots.aspx

