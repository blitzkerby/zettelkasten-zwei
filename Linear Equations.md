
Assume a differential equation of the following form:
$$
\large\begin{align}
	\frac{dy}{dt} + p(t)y &= g(t) \\ \\
	y' + py &= g 	
\end{align}
$$
where, $p(t)$ and $g(t)$ are continuous functions. We shall assume some *integrating factor* $\mu(t)$ such that,
$$
	\large\begin{align}
		\mu(t)p(t) &= \mu'(t) \\ \\
		\mu p &= \mu'
	\end{align}
$$
Therefore, multiplying the entire differential equation above with $\mu$,

$$
\large\begin{align}
	\mu y' + \mu py &= \mu g \\ \\
	\mu y' + \mu' y &= \mu g \\ \\
\end{align}
$$
Recognize now that the left hand side, can be written as
${\mu y' + \mu' y = (\mu y)'}$. Therefore, we’ll have,

$$
\large\begin{align}
	(\mu y)' &= \mu g
\end{align}
$$

Thus, solving for $y$ will yield,

$$
\large\begin{align}
	\mu y &= \int{\mu g} \ dt \\ \\
	 y &= \frac{\int{\mu g} \ dt}{\mu} \\ \\
\end{align}
$$
All that is left is to solve for $\mu$.

$$
\large\begin{align}
	\mu p &= \mu' \\ \\
	p &= \frac{u'}{u} \\ \\
	\int p \ dt &= \ln{|u|} + k
\end{align}
$$