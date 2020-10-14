<center><div style="font-size:32px;display:inline-block;line-height:1.1;font-weight:bold;margin:0 0 15px" class="aula-title">Capítulo 3: Módulos e condicionais</div></center>

# Atividade 1: Módulos e pacotes

# Parte 1: Importando um módulo

O python possui muitas funções e operadores que nativa da própria linguagem de programação  como os operadores básicos (+,-,\*,/), potenciação (\*\*) impressão de valores (`print()`,`.format()`), e etc. 

No entanto, há algumas **funcionalidades** que você irá precisar para produzir seu código, mas que **não tem nativamente** na linguagem Python, podemos então importar tais funcionalidades para o nosso trabalho como módulos. 

Agora vejam a definição de módulo segundo um trecho da a própria documentação do Python:

> Módulos são um **conjunto** de **códigos como funções, classes, variáveis, etc**. Se você estiver fazendo um programa e ele se tornar muito grande, difícil de ler e se situar nele, é uma boa prática dividi-lo em arquivos menores, para facilitar a manutenção. Também é preferível usar um arquivo separado para uma função que você escreveria em vários programas diferentes, para não copiar a definição de função em cada um deles.
>
> Para permitir isso, o Python tem uma maneira de **colocar as definições em um arquivo** e então usá-las em um script ou em uma execução interativa do interpretador. **Tal arquivo é chamado de módulo**; definições de um módulo podem ser importadas para outros módulos, ou para o módulo principal.

### Exemplo 1: Importando um módulo

Para o nosso primeiro exemplo vamos importar o módulo **math**, um módulo que extende o Python com algumas funcionalidades matemáticas.

Execute o célula abaixo:

> ```python
> import math # Nesta linha eu estou importando o módulo math
> ```

Feito isso, tente escrever o seguinte código e aperte `Tab`:

> ```python
> math.
> ```

Você verá todos as **funções** e **constantes (instâncias)** deste pacote, como mostra na Figura abaixo:

![Tab Módulos](images/tab_modulos.png)

Agora apague a célula acima e vamos aprender à calcular a raiz quadrada. Para isso utilize a função `sqrt()` do módulo `math`.

> ```python
> num = int(input("Digite o número que quer calcular a raiz quadrada: "))
> raiz = math.sqrt(num) # A função sqrt() do módulo 'math' calcula a raiz quadrada 
> print("A raiz quadrada de {num} é {raiz}".format(num=num,raiz=raiz))
> ```
>
> Digite o número que quer calcular a raiz quadrada:  4  
> A raiz quadrada de 4 é 2.0

> **Dica:** Teste o exemplo acima com alguns valores, como 5, 4, 3, 2, etc.


Agora vamos arredondar o resultado da raiz utilizando a função `ceil()`.

> ```python
> num = int(input("Digite o número que quer calcular a raiz quadrada: "))
> raiz = math.sqrt(num) # A função sqrt() do módulo 'math' calcula a raiz quadrada 
> arredondar = math.ceil(raiz) # A função ceil() arredonda para cima um determinado valor
> print("A raiz quadrada (arredondada) de {num} é {raiz}".format(num=num,raiz=arredondar))
> ```
>
> Digite o número que quer calcular a raiz quadrada:  5  
> A raiz quadrada (arredondada) de 5 é 3

> **Dica:** Teste os exemplos acima com alguns valores, como 5, 4, 3, 2, etc.

Vamos praticar com uma constante. Procure a constante `pi` e execute:

> ```python
> math.pi
> ```
>
> 3.141592653589793

Agora vamos criar um programa capaz de calcular o seno de um ângulo dado em graus:

> ```python
> ang_graus = int(input("Digite um ângulo (Em graus): "))
> ang_rad = ang_graus*math.pi/180 #Observe que estamos utilizando a constante pi
> seno = math.sin(ang_rad) # A função sin() calcula o seno de um ângulo
> print("O seno de {ang_graus}° é {seno:.2g}".format(ang_graus=ang_graus,seno=seno))
> ```
>
> Digite um ângulo (Em graus):  60  
> O seno de 60° é 0.87

> **Dica:** Teste o exemplo acima com os ângulos 0, 30, 45, 60 e 90.

**Tarefa**: Crie um código que aceite um ângulo em graus como entrada, e imprima na tela o seu correspondente em radianos, o seu seno, cosseno e tangente.

> **Observação:** Utilize a função `radians()` para fazer a conversão de graus para radianos diretamente.

> **Dica:** Utilize as funções `sin()`, `cos()`, `tan()` para calcular o seno cosseno e tangente.

A saída do programa deve ser parecida com isso:

```
Digite o ângulo em graus:  45
O ângulo 0.79 rad, tem o seno 0.71, cosseno 0.71 e tangente 1
```

> **Dica:** Teste o exemplo acima com os ângulos 0, 30, 45, 60 e 90.

### Exemplo 2: Documentação do `math`

Praticamente todo módulo ou pacote do Python tem uma documentação disponível na internet. O módulo `math` é um módulo **built-in**, ou seja, ele é um módulo que já vem junto com o Python. Para estes módulos podemos olhar a própria documentação do Python. Essa documentação está disponível no menu `Help>Python Reference` ou no próprio [site do python](https://www.python.org/), na parte de **Docs**. 

![Site do Python](images/python_images.png)

No caso do módulo de matemática, podemos utilizar o seguinte módulo direto:

https://docs.python.org/3/library/math.html

Lá podemos encontrar explicações detalhadas de todas as funções e constantes do módulo `math`.

**Tarefa 1:** Buscando na documentação do módulo `math`, crie um programa capaz de calcular as seguintes expressões:

- $e^x$
- $x!$
- $\log_{10}(x+1)$
- $(\pi+e)^x$

O usuário deve colocar como entrada o valor de $x$.

> **Observação:** Teste usar a função `pow()` no lugar do operador `**`.

A saída deve ser parecida com essa:

```
Digite o valor de x:  1
e^1=2.72
1!=1
log10(1+1)!=0.30
(pi+e)^1!=5.86
```

**Tarefa 2:** Crie um programa capaz de calcular a hipotenusa de um retângulo utilizando uma função do módulo `math`.

Sugestão de saída:

```
Digite o primeiro cateto: 3
Digite o segundo cateto: 4
A hipotenusa é 5
```

### Exemplo 3: `from` ... `import` ...

É muito chato toda vez que for utilizar alguma funcionalidade da função math, ter que escrever `math.` no início. Através da sintaxe:

```python
from [módulo] import [função1], [função2], [constante1], [etc]
```

Podemos incluir somente as funções e constantes que desejamos trabalhar e eliminamos a necessidade de utilizar `math.` no início. Veja o exemplo:

> ```python
> from math import pi
> pi
> ```
>
> 3.141592653589793

Vejamos um exemplo de como calcular o fatorial:

> ```python
> # Utilizando import
> import math 
> numero = int(input("Digite um valor: "))
> fat = math.factorial(numero)
> print("O fatorial de {} é {}.".format(numero, fat))
> ```

Percebemos agora, a maneira mais simples de importar um módulo, que é simplesmente digitando `import` e o nome do módulo logo em seguida. Na hora de chamar a função `factorial`precisamos especificar que ela pertence ao módulo em questão, por isso a chamamos com `math.factorial()`.  

Agora suponha que iremos usar apenas a função `factorial`, sem usar as outras funções do módulo de matemática, a outra forma de faze-lo é.

> ```python
> # Utilizando from import
> from math import factorial
> numero = int(input("Digite um valor: "))
> fat = factorial(numero)
> print("O fatorial de {} é {}.".format(numero, fat))
> ```

**Tarefa:** Refaça a tarefa abaixo importando todas as funções necessárias utilizando a notação `from` `ìmport`

> Crie um código que aceite um ângulo em graus como entrada, e imprima na tela o seu correspondente em radianos, o seu seno, cosseno e tangente.

### Exemplo 4: `from` ... `import` *

Caso não soubermos as funções que iremos utilizar, ou se iremos utilizar muitas funções de um determinado módulo, podemos importar todas as funções deste módulo utilizando a notação:

```python
from [módulo] import *
```

Veja o exemplo abaixo:

> ```python
> from math import *
> ang_graus = int(input("Digite um ângulo (Em graus): "))
> ang_rad = ang_graus*pi/180 #Observe que estamos utilizando a constante pi
> print("O seno de {}° é {:.2g}".format(ang_graus,sin(ang_rad)))
> ```
>
> Digite um ângulo (Em graus):  60  
> O seno de 60° é 0.87

`import *` é **prático**! Mas **tome cuidado**!

Segue alguns motivos para **não usar** o `import *`:

- Seu código não fica legível
- Não fica implícito no código da onde vem aquela função
- Caso um ou mais módulos tenham duas funções com o mesmo nome, **você não tem como escolher**, sempre será selecionada a última função importada!
- Bugs inesperados
- Etc

Isso não quer dizer que usar o `import *` é sempre ruim. Ele pode ser prático em códigos pequenos, ou em módulos que você já conhece bem e que você saiba o que está fazendo.

Para mais detalhes clique [aqui](https://www.geeksforgeeks.org/why-import-star-in-python-is-a-bad-idea).

### Exemplo 5: Outros módulos _built-in_

Além do módulo math, existem outros módulos _built-in_ e você pode encontrá-los na documentação do Python, em `Library reference` (A página tem o título `Python Library Standard `)

![image-20201014045717891](images/bibliotecas.png)

Esta página mostra diversos módulos em formas de categorias.

Para continuarmos os nossos exercícios vamos utilizar uma outro módulo de matemática, o módulo `random`. Ele está na seção `Numeric and Mathematical Modules`. Vamos ver um exemplo com a função `random()`:

> ```python
> from random import random # A função random() gera um float aleatório de 0.0 <= x < 1.0
> from math import floor # A função ceil() arredonda para baixo
> ```
>
> ```python
> aleatorio=floor(10*random()) # Gera um número aleatório de 0 a 9
> aleatorio
> ```
>
> 5

Observe que nesse exemplo para conseguir esse efeito combinamos duas funções de módulos diferentes.

**Tarefa 1:** Olhando a documentação do módulo `random` refaça o exemplo sem utilizar o módulo `math`.

**Tarefa 2:** Lendo a documentação indique quais módulos são mais adequados para:

- Trabalhar com o tempo (Horas, dias, semanas)
- Trabalhar com arquivos de audio do tipo WAV
- Criar programas com interface gráfica (GUI)
- Trabalhar com frações

### Exemplo 6: Renomeando módulos

Uma outra forma de importar módulos é renomeando-o. Observe novamente o exemplo do fatorial:

> ```python
> import math as m
> numero = int(input("Digite um valor: "))
> fat = m.factorial(numero)
> print("O fatorial de {} é {}.".format(numero, fat))
> ```
>
> Digite um valor:  5  
> O fatorial de 5 é 120.

Observe que a sintaxe `import math as m` tornou o mesmo módulo disponível agora por um nome diferente, no caso, `mat`. Dessa forma, podemos chamar uma função do módulo como `m.função`, como mostrado acima. Essa funcionalidade é particularmente útil quando o nome do módulo é grande e a tarefa de escreve-lo diversas vezes torna-se chata, como é mostrado abaixo:

> ```python
> import matplotlib.pyplot as plt # Sub-módulo para plotar gráficos
> ```

Sempre **prefira essa notação ao invés de `ìmport `**, pois desta forma você deixa o código legível e evita a tarefa chata de ter que escrever o nome do módulo toda vez que vai utilizar uma funcionalidade do módulo.

**Tarefa:** Considere o código abaixo, substituia o `from math import *` por `ìmport math as m`:

```python
from math import *
ang_graus = int(input("Digite um ângulo (Em graus): "))
ang_rad = ang_graus*pi/180 #Observe que estamos utilizando a constante pi
print("O seno de {}° é {:.2g}".format(ang_graus,sin(ang_rad)))
```

## Parte 2: Pacotes do Anaconda





























Lembra daquele código que foi executado na aula 1 que gerava um gráfico? 

```python
import matplotlib.pyplot as plt
import numpy as np
t = np.linspace(-12, 10, num=100)
y = t**2+2*t+3 
plt.plot(t, y) 
plt.xlabel('t - Tempo (s)') 
plt.ylabel('y - Saída') 
plt.title('Função quadrática') 
plt.show()
```

Vamos disseca-lo para entender melhor como funcionam os módulos.

O python possui muitas funções e operadores que nativa da própria linguagem de programação `Python` como os operadores básicos (+,-,\*,/), potenciação (\*\*) impressão de valores (print), e etc. No entanto, há algumas funcionalidades que você irá precisar para produzir seu código, mas que não vem no Python, podemos então importar tais funcionalidades para o nosso trabalho como módulos. 

Por padrão, o Python não possui nenhuma ferramenta que plote gráficos ou que gere uma sequência de números. No entanto, existem os pacotes `numpy` e `matplotlib` que podem nos oferece-las. Podemos identificar as duas primeiras linhas do código acima, que importam, ou seja, trazem os módulos para podermos utilizar. 





