# Time Complexity of for Loops

>* Conventions
>* Time complexity
>* Time complexity for multiple variables

## Conventions

1.The time complexity of this code would be 5 + 5 + 5 = {% math %}3 \times 5{% endmath %} = 15

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 3; ++i) {
        printf("\nA: ");
        for (int j = 0; j < 5; ++j) {
            printf("B");
        }
    }

    return 0;
}
```

The output would be

```
A: BBBB
A: BBBB
A: BBBB
```

The time complexity of this code would be
\\[ \underbrace{N+⋯+N}_{M\text{ times}} = M \times N \\]


```c
for (int i = 0; i < M; ++i) {
        printf("\nA: ");
        for (int j = 0; j < N; ++j) {
            printf("B");
        }
    }
```

The output would be

```
A: BBBB...BBBB
A: BBBB...BBBB
A: BBBB...BBBB
..............
A: BBBB...BBBB
```

> **[info] Time complexity**
* We would use {% math %}\Theta{% endmath %} to indicate the time complexity of the code.
* The time complexity of this code is {% math %}\Theta (N \times M){% endmath %}
* When the rows `M` and columns `N` are equal the time complexity would be {% math %}\Theta (N^2){% endmath %}
>

2.The time complexity of this code would be 5 + 4 + 3 + 2 + 1 =
{% math %}(5 + 1) \times 5 \over 2{% endmath %} = 15

```c
for (int i = 0; i < 5; ++i) {
        printf("\nA: ");
        for (int j = i; j < 5; ++j) {
            printf("B");
        }
    }
```

The output would be

```
A: BBBBB
A: BBBB
A: BBB
A: BB
A: B
```

The time complexity of this code would be
$$N + (N - 1) + \cdots + 1$$ =
{% math %}(N + 1) \times N \over 2{% endmath %} =
{% math %}(N^2 + N) \over 2{% endmath %}

```c
for (int i = 0; i < N; ++i) {
        printf("\nA: ");
        for (int j = i; j < N; ++j) {
            printf("B");
        }
    }
```

The output would be

```
A: B......B
......
A: B
```

> **[info] Time complexity**
* The time complexity of this code is {% math %}\Theta (N^2){% endmath %}
>

3.The time complexity of this code would be
1 + 2 + 3 + 4 + 5 =
{% math %}(1 + 5) \times 5 \over 2{% endmath %} = 15

```c
for (int i = 1; i <= 5; ++i) {
        printf("\nA: ");
        for (int j = 1; j <= i; ++j) {
            printf("B");
        }
    }
```

The output would be

```
A: B
A: BB
A: BBB
A: BBBB
A: BBBBB
```

The time complexity of this code would be
$$1 + 2 + \cdots + (N - 1) + N$$ =
{% math %}\frac{(1 + N) \times N}{2}{% endmath %} =
{% math %}(N + N^2) \over 2{% endmath %}


```c
for (int i = 1; i <= N; ++i) {
        printf("\nA: ");
        for (int j = 1; j <= i; ++j) {
            printf("B");
        }
```

The output would be

```
A: B
......
A: B......B
```

> **[info] Time complexity**
* The time complexity of this code is {% math %}\Theta (N^2){% endmath %}
>

4.There are four power of 2 smaller than or equal to 10.
They are {% math %}2^0{% endmath %},
{% math %}2^1{% endmath %},
{% math %}2^2{% endmath %},
{% math %}2^3{% endmath %}.

Let's say that $$2^3 \leqslant 10 \leqslant 2^{(3 + 1)}$$.
We would symply assume that $$10 = 2^{(3 + 1)}$$ and $$log_2 10 = (3 + 1)$$.

The time complexity of this code would be
$$log_2 10 + log_2 10 + \cdots + log_2 10 = $$
$$3 + 3 + \cdots + 3 = $$
$$(3 + 1) + (3 + 1) + \cdots + (3 + 1) = $$
{% math %}\ 10 \times 4 = {% endmath %} $$40$$.

```c
for (int i = 1; i <= 10; i++) {
        printf("\nA%d: ", i);
        for (int j = 1; j <= 10; j *= 2) {
            printf("B %d ", j);
        }
    }
```

The output would be

```
A1: B 1 B 2 B 4 B 8
A2: B 1 B 2 B 4 B 8
A3: B 1 B 2 B 4 B 8
A4: B 1 B 2 B 4 B 8
A5: B 1 B 2 B 4 B 8
A6: B 1 B 2 B 4 B 8
A7: B 1 B 2 B 4 B 8
A8: B 1 B 2 B 4 B 8
A9: B 1 B 2 B 4 B 8
A10: B 1 B 2 B 4 B 8
```

There are p power of 2 smaller than or equal to N.
They are {% math %}2^0{% endmath %},
{% math %}2^1{% endmath %},
{% math %}2^2{% endmath %},
{% math %}2^3{% endmath %},
⋯⋯
{% math %}2^{p - 1}{% endmath %}.

Let's say that $$2^{(p - 1)} \leqslant N \leqslant 2^p$$.
We would symply assume that $$N = 2^p$$ and $$log_2 N = p$$.

The time complexity of this code would be
$$log_2 N + log_2 N + \cdots + log_2 N = $$
$$p + p + \cdots + p = $$
$$N \times p = $$
{% math %}\ N \times log_2 N = {% endmath %} $$N log_2 N$$

```c
for (int i = 1; i <= N; i++) {
        printf("\nA%d: ", i);
        for (int j = 1; j <= N; j *= 2) {
            printf("B %d ", j);
        }
    }
```

The output would be

```
A1: B 1 ...... B 2^(p - 1)
..................
AN: B 1 ...... B 2^(p - 1)

```

> **[info] Time complexity**
* The time complexity of this code is {% math %}\Theta (N log N){% endmath %}
>

5.The time complexity of this code would be
$$
\sum_{i=1}^{10} log_2 i
$$



```c
for (int i = 1; i <= 10; i++) {
        printf("\ni: %d      ", i);
        int count = 0;
        printf("j takes values: ");
        for (int j = 1; j <= i; j *= 2) {
            count++;
            printf("%d ", j);
        }
        printf("      Iterations of for j for this i: %d\n", count);
    }
```

The output would be

```
i: 1      j takes values: 1       Iterations of for j for this i: 1

i: 2      j takes values: 1 2       Iterations of for j for this i: 2

i: 3      j takes values: 1 2       Iterations of for j for this i: 2

i: 4      j takes values: 1 2 4       Iterations of for j for this i: 3

i: 5      j takes values: 1 2 4       Iterations of for j for this i: 3

i: 6      j takes values: 1 2 4       Iterations of for j for this i: 3

i: 7      j takes values: 1 2 4       Iterations of for j for this i: 3

i: 8      j takes values: 1 2 4 8       Iterations of for j for this i: 4

i: 9      j takes values: 1 2 4 8       Iterations of for j for this i: 4

i: 10      j takes values: 1 2 4 8       Iterations of for j for this i: 4
```

The time complexity of this code would be
$$
\sum_{i=1}^{N} log_2 N
$$

```c
for (int i = 1; i <= N; i++) {
        printf("\ni: %d      ", i);
        int count = 0;
        printf("j takes values:");
        for (int j = 1; j <= i; j *= 2) {
            count++;
            printf("%d ", j);
        }
        printf("      Iterations of for j for this i: %d\n", count);
    }
```

The output would be

```
i: 1      j takes values: 1                   Iterations of for j for this i: 1

i: 2      j takes values: 1 2                 Iterations of for j for this i: 2

i: 3      j takes values: 1 2                 Iterations of for j for this i: 2

i: 4      j takes values: 1 2 4               Iterations of for j for this i: 3
......

i: i      j takes values: 1 2 4 8 16 2^p      Iterations of for j for this i: log i
......

i: N - 1  j takes values: 1 2 4 8 16 2^p      Iterations of for j for this i: log (N - 1)

i: N      j takes values: 1 2 4 8 16 2^p      Iterations of for j for this i: log N
```

> **[info] Time complexity**
* The time complexity of this code is {% math %}\Theta (N log N){% endmath %}.
>

<br/>

## Time complexity

The inner loop j value does not depend on outer loop i value,
so it is the same for every iteration of the outer loop.

```c
for (int i = 1; i <= N; i++) {
        printf("\nA%d: ", i);
        for (int j = 1; j <= N; j = j + j) {
            printf("B %d ", j);
        }
    }
```

> **[info] Time complexity**
* The time complexity of this code is {% math %}\Theta (N log N){% endmath %}.
>

```c
for (int i = 1; i <= N; i++) {
        printf("\nA%d: ", i);
        for (int j = 1; j <= N; j = j * 2) {
            printf("B %d ", j);
        }
    }
```

> **[info] Time complexity**
* The time complexity of this code is {% math %}\Theta (N log N){% endmath %}.
>

```c
for (int i = 1; i <= N; i++) {
        printf("\nA%d: ", i);
        for (int j = 1; j >= 1; j = j / 2) {
            printf("B %d ", j);
        }
    }
```

> **[info] Time complexity**
* The time complexity of this code is {% math %}\Theta (N log N){% endmath %}.
>

```c
for (int i = 1; i <= N; i++) {
        printf("\nA%d: ", i);
        for (int j = 1; j <= N; j = j + 2) {
            printf("B %d ", j);
        }
    }
```

> **[info] Time complexity**
* The time complexity of this code is {% math %}\Theta (N^2){% endmath %}.
>

<br/>

## Time complexity for multiple variables

```c
for (int i = 1; i <= n; i++) {
            printf("B %d ", i);
        }
for (int i = 1; i <= p; i++) {
        printf("\nB%d: ", i);
        for (int j = 1; j <= r; j++) {
            printf("C %d ", j);
        }
```

> **[info] Time complexity**
* The time complexity of this code is {% math %}\Theta (n + pr){% endmath %}.
>

<img src="\images\performance.svg" alt="performance" style="zoom:100%;" />












