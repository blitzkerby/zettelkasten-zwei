---
title: Solving for Second Order Differential Equations
allDay: false
startTime: 21:00
endTime: 21:30
date: 2024-09-25
completed: null
---
A general form for a second order linear differential equation is given by

$$\large{
	  {a(x)}{y''(x)} 
	+ {b(x)}{y'(x)}
	+ {c(x)}{y(x)} = f(x)
}$$

---

In operator terminology,

$$\large{
	L = a(x)r^2 + b(x)r + c(x)
}$$
where, $r = \frac{d}{dx}$.

Therefore,
$$\large{
	Ly = f
}$$

The solutions of linear differential equations are found by making use of the linearity of $L$.

Namely, we consider the [[vector space]] consisting of real-valued functions over some domain.

Let $f$ and $g$ be vectors in this function space. $L$ is a linear operator if for two vectors $f$ and $g$, and scalar $a$, we have:

$$\large{
	\begin{align}
		L(f + g) &= Lf + Lg \\ \\
		L(af) &= aLf
	\end{align}
}$$

One typically solves the for the general solution of the homogeneous form,

$$\large{
	L{y_h} = 0
}$$

and a particular solution of the non-homogenous form,

$$\large{
	L{y_p} = f
}$$

Then the general solution is given as, 

$$\large{
	y = {y_h} + {y_p}
}$$

