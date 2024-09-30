#differential-equations  #first-order-differential-equations

We are now going to study the nonlinear first order differential equations.

The first type of nonlinear first order differential equation is the separable differential equation.

Assume an equation of the following form:

$$
\large\begin{align}
	N(y)\frac{dy}
			{dx} = M(x) 			 
\end{align}
$$

The only way for it to be separable is if all the $y$’s in the differential equation are multiplied by the derivative and all the $x$’s in the differential equation must be on the other side of the equal sign.


We can easily solve the equation as follows:

$$
\large\begin{align}
	\int N(y) \frac{dy} 
					{dx} dx = \int M(x) dx
\end{align}
$$


$$
\large\begin{matrix}
   u = y(x) 
		& \implies &
			\frac{du}
			    {dx} &=& \frac{dy}
							{dx} \\ \\
		& &
			du &=& \frac{dy}
						{dx} dx \\ \\
\end{matrix}
$$
$$
	\large{\int N(u) du = \int M(x) dx}
$$

