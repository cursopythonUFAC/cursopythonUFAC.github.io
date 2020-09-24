---
layout: default
---

<center><div style="font-size:32px;display:inline-block;line-height:1.1;font-weight:bold;margin:0 0 15px" class="aula-title">Capítulo 2: Saída de dados e sentenças lógicas</div></center>

----

# Atividade 1: Saída de dados

----

## Parte 1: Introdução

No capítulo anterior vimos que a função `print()` permite imprimir uma determinada saída abaixo da célula. Além disso, vimos que esta função tem vários aspectos e existem diversas maneiras de customizar a saída da função `print()`.

### Exemplo 1: Função `print()` com um único argumento

Esta é uma das maneiras mais simples de utilizar a função `print()`. Vimos ela no capítulo anterior, iremos relembrar novamente aqui. Veja alguns exemplos:

> ```python
> # A função print() pode imprimir um inteiro
> print(10)
> ```
>
> 10
>
> ```python
> # A função print() pode imprimir um float
> print(3.111111)
> ```
>
> 3.111111
>
> ```python
> # A função print() pode imprimir uma string
> print("A temperatura de Rio Branco é de 35 graus célsius.")
> ```
>
> A temperatura de Rio Branco é de 35 graus célsius.
>
> ```python
> # Podemos utilizar operação de concatenação de strings para criar uma string maior
> numero=float(input("Digite um número:"))
> print("O número escolhido foi "+str(numero)+"\nO número dividido por dois é"+str(numero/2))
> ```
>

**Tarefa: ** Crie um programa capaz de imprimir `x` vezes uma `palavra` escolhida pelo usuário. A saída do programa deve ser:

> A palavra "[palavra]" será repetida "[x]" vezes: 
>
> "[string resultante]"

Por exemplo:

> A palavra "Abacaxi" será repetida "2" vezes: 
>
> "Abacaxi Abacaxi"

Utilize a função `print()`, a operação de concatenação de strings `+` e a operação de replicação de strings `*`.

### Exemplo 2: Função `len()`

A função `len()` retorna a quantidade, ou tamanho, de uma string. Veja o exemplo abaixo:

> ```python
> Tam_1 = len("Oi")
> Tam_2 = len('Eu tenho um gato que mia bastante.')
> Tam_3 = len('')
> print("O tamanho da Frase 1 é "+str(Tam_1)+";")
> print("O tamanho da Frase 2 é "+str(Tam_2)+";")
> print("E o tamanho da Frase 3 é "+str(Tam_3)+".")
> ```
>
> O tamanho da Frase 1 é 2;  
> O tamanho da Frase 2 é 34;  
> E o tamanho da Frase 3 é 0.

**Tarefa:** Crie um programa que tenha como entrada uma frase, que deve ser digitada pelo usuário, e tenha como saída o tamanho dessa frase.

### Exemplo 3: Função `print()` com múltiplos argumentos

Nos exemplos anteriores trabalhamos com a função `print()`  recebendo um único argumento de entrada (parâmetro). Entretanto esta função permite que você insira mais de argumento (parâmetro).  Seguindo a sintáxe mostrada abaixo:

```python
print(arg1,arg2,arg3,...)
```

Veja os exemplos abaixo:

> ```python
> # Imprimindo vários inteiros
> print(1,2,3,5,7,8,9)
> ```
>
> 1 2 3 5 7 8 9
>
> ```python
> # Misturando inteiros e ponto flutuante
> print(1,1.5,2,2.5,3)
> ```
>
> 1 1.5 2 2.5 3
>
> ```python
> # Imprimindo strings
> print("A casa é","branca.")
> ```
>
> A casa é branca.
>
> ```python
> # Misturando strings e números
> print("A raiz de 2 é",2**0.5,"e o dobro de 2 é",2*2)
> # Tem o mesmo efeito de
> print() # Um print vazio indica uma nova linha
> print("A raiz de 2 é "+str(2**0.5)+" e o dobro de 2 é "+str(2*2))
> ```
>
> A raiz de 2 é 1.4142135623730951 e o dobro de 2 é 4 
>
> A raiz de 2 é  1.4142135623730951  e o dobro de 2 é  4

Observe que nos exemplos acima não houve necessidade de adicionar espaço no final da string. A própria função `print()` fez isso para a gente. 

**Tarefa 1:** Execute a célula abaixo:

> ```python
> # Misturando strings e números (outro exemplo)
> print("A raiz de 2 é "+str(2**0.5),"e o dobro de 2 é ",2*2)
> ```

Responda: "Quantos argumentos tem esta função `print()` (E quais os tipos deles? Use a função `type()` para isso)."

> **Dica:**  Os argumentos são separados por vírgula.

**Tarefa 2:** Execute a célula abaixo:

> ```python
> nome = 'Lucas'
> dia = 19
> mês='Abril'
> print('O meu nome é',nome,'e minha data de aniversário é',dia,'de',mês,'.')
> ```
>

Porque o ponto final não ficou próximo ao mês? (Exemplo: " Abril.") (Escreva a resposta em Markdown)

**Tarefa 3:** Crie um programa que peça como entrada três palavras e forme uma frase com essas três palavras. A saída deve ser mostrada como:

>A frase formada com essas três palavras é:  
>[palavra1] [palavra2] [palavra3]

## Parte 2: Parâmetros opcionais de `print()`

Quando trabalhamos com múltiplos objetos de entrada, percebemos que sempre entre um argumento e outro, é adicionado um **espaço em branco**. Além disso, ao final do `print()` havia sempre uma **quebra linha**.  Este é o comportamento padrão da função `print()` , entretanto podemos alterá-lo mudando os parâmetros opcionais `sep=` e `end=`.

| Parâmetro opcional | Função                                     | Valor padrão     |
| :----------------: | ------------------------------------------ | ---------------- |
|        sep=        | Modifica o espaçamento entre os parâmetros | Espaço em branco |
|        end=        | Modifica o final                           | `\n`             |

Sendo assim a notação da função `print()` é da seguinte forma:

```python
print(arg1,arg2,arg3,...,[sep=valor_do_sep,end=valor_do_end])
```

> **Observações:** `sep=` e `end=` são opcionais, portanto você deve adicioná-los somente se houver necessidade de modificar o espaçamento entre os argumentos ou o final.

### Exemplo 1: Parâmetro `sep=`

Veja e execute o exemplo abaixo:

```python
ano1 = '1980'
ano2 = '1990'
ano3 = '2000'
ano4 = '2010'
print(ano1, ano2, ano3, ano4, sep=',')
```

**Tarefa:** Repita o exemplo acima mudando o espaçamento entre as strings para:

- `"|"`
- `"->"`
- `"-"`

### Exemplo 2: Parâmetro `end=`

O parâmetro opcional `end=`  é utilizado para alterar o fim da saída da função `print()`.

Veja e execute o exemplo:

> ```python
> animal1="Cachorro"
> animal2="Gato"
> animal3="Pato"
> animal4="Boi"
> print(animal1,end=" | ")
> print(animal2,end=" | ")
> print(animal3,end=" | ")
> print(animal4,end=" | ")
> print() #print() em branco quebra linha
> ```
>

**Tarefa 1:** Repita o exemplo acima mudando o final do `print()` para:

- `";\n"`
- `",\n"`
- `" - "`
- `".\n"`

**Tarefa 2:** Execute a célula abaixo

> ```python
> print(end="|")
> ```

Pergunta: "Porque o `print()` quebra uma linha?"

**Tarefa 3:** Corrija o programa abaixo de tal forma que mostre a seguinte frase na saída:

> ```
> O meu nome é [nome] e minha data de aniversário é [dia] de [mês].
> ```

```python
nome = input("Digite seu nome: ")
dia = input("Digite o dia do seu aniversário: ")
mês = input("Digite o mês do seu aniversário: ")
print('O meu nome é',nome,'e minha data de aniversário é',dia,'de',mês,'.')
```

> **Observação:** O erro é: tem um espaço entre o [mes] e o ponto final.

### Exemplo 3: Combinando os parâmetros

Podemos combinar os parâmetros opcionais `sep=` e `end=` para customizar a saída de uma ou mais funções `print()` Por exemplo:

> ```python
> fruta1="maça"
> fruta2="abacaxi"
> fruta3="laranja"
> print("Eu gosto das seguintes frutas",end=": ")
> print(fruta1,fruta2,fruta3,sep=", ",end=".\n")
> ```
>
> Eu gosto das seguintes frutas: maça, abacaxi, laranja.

**Tarefa:** Crie um programa no qual o usuário deve digitar 3 números para formar a seguinte frase:

> Os números digitados foram: [n1], [n2], [n3].

> **Dica:** Você pode utilizar mais de uma função `print()` para alcançar este resultado.

## Parte 3: Método `.format()`

Métodos são funções aplicadas à um determinado dado que pertence à uma determinada classe de dados.

> **Observação:** O "dado" citado é também chamado de objeto. Classes e objetos são conceitos abstratos da programação orientada a objeto. Não chegaremos à abordar com detalhes a programação orientada à objeto, mas como o Python é uma linguagem orientada à objeto, teremos que trabalhar com alguns conceitos dessa abordagem de programação.

O método `.format()` é utilizado em dados (ou objetos) da classe string. Esse método nos permite uma melhor customização de uma string sem de operadores de concatenação.

### Exemplo 1: Apresentando o `.format()`

Você pode pensar que tudo que eu falei é complicado, contudo tudo vai ficar mais claro com exemplos. Relembre a tarefa do exemplo 5:

> O meu nome é [nome] e minha data de aniversário é [dia] de [mês].

Com o método `.format()`  podemos reescrever o exemplo da seguinte forma:

> ```python
> nome = input("Digite seu nome: ")
> dia = input("Digite o dia do seu aniversário: ")
> mês = input("Digite o mês do seu aniversário: ")
> print('O meu nome é {} e minha data de aniversário é {} de {}.'.format(nome,dia,mês))
> ```
>
> Digite seu nome:  Lucas  
> Digite o dia do seu aniversário:  19  
> Digite o mês do seu aniversário:  Abril  
> O meu nome é Lucas e minha data de aniversário é 19 de Abril.

Observe que ao utilizar o método `.format()`, substituimos o local onde as variávels [nome], [dia] e [mês] apareciam pela máscara `{}`. Depois adicionamos as variáveis como argumentos do método `.format()`.

Como o método `.format()` é um método para a classe string, podemos ter o mesmo resultado sem a necessidade da função `print()`. Execute o exemplo abaixo:

> ```python
> nome = input("Digite seu nome: ")
> dia = input("Digite o dia do seu aniversário: ")
> mês = input("Digite o mês do seu aniversário: ")
> 'O meu nome é {} e minha data de aniversário é {} de {}.'.format(nome,dia,mês)
> ```

**Tarefa:** Crie um programa capaz de somar dois números `a` e `b` e retorne como saída:

> A soma de [a] e [b] vale [resultado].

Utilize o método `.format()`.

### Exemplo 2: Numerando os argumentos

Podemos especificar manualmente a ordem em que os argumentos devem ser impressos, para isto basta colocar a ordem dentro da numeração da máscara  `{}`. Tente executar o exemplo abaixo:

> ```python
> nome = input("Digite seu nome: ")
> dia = input("Digite o dia do seu aniversário: ")
> mês = input("Digite o mês do seu aniversário: ")
> #.format(dia,mês,nome)
> #Máscara: {0} {1} {2}
> print('O meu nome é {2} e minha data de aniversário é {0} de {1}.'.format(dia,mês,nome))
> ```

Verá que mesmo trocando a ordem dos argumentos a saída continua a mesma, pois numeramos as máscaras e desta forma ficamos livres para escolher qualquer ordem que os argumentos apareçam.

**Tarefa:** Repita a tarefa do exemplo anterior colocando os parâmetros da seguinte ordem `.format(resultado,b,a)`. Relembrando:

> A soma de [a] e [b] vale [resultado].

### Exemplo 3: Nomeando os argumentos

Além de numerar os argumentos, podemos nomear os argumentos tornando muito mais fácil utilização do método `.format()` com vários argumentos. Para isso basta colocar o nome do argumento dentro da máscara (Ex: `{peso}`) e indicar o parâmetro com este nome (Ex: `.format(peso=valor)`).

Veja o exemplo abaixo:

> ```python
> print("Este programa resolve uma equação de segundo grau do tipo ax²+bx+c=0")
> a=int(input("Digite o valor de a: "))
> b=int(input("Digite o valor de b: "))
> c=int(input("Digite o valor de c: "))
> delta=b**2-4*a*c
> x1=(-b+delta**(1/2))/(2*a)
> x2=(-b-delta**(1/2))/(2*a)
> print("As soluções da equação {a}x²+{b}x+{c}=0 são: x1={x_1} e x2={x_2}.".format(a=a,b=b,c=c,x_1=x1,x_2=x2))
> # Exemplos:
> # 1) a=1, b=-10 e c=24 
> # 2) a=2, b=8 e c=-24 
> ```

**Tarefa:** Crie um programa capaz de usando a sintaxe que permite nomear os argumentos capaz de determinar o antecessor e sucessor

> O número escolhido é [número], seu antecessor é [antecessor]  e seu sucessor é [sucessor].

### Exemplo 4: Formatando a saída

Veja o que acontece ao executar o exemplo anterior considerando `a=1`,`b=2`,`c=-10`.

> ```python
> print("Este programa resolve uma equação de segundo grau do tipo ax²+bx+c=0")
> a=int(input("Digite o valor de a: "))
> b=int(input("Digite o valor de b: "))
> c=int(input("Digite o valor de c: "))
> delta=b**2-4*a*c
> x1=(-b+delta**(1/2))/(2*a)
> x2=(-b-delta**(1/2))/(2*a)
> print("As soluções da equação {a}x²+{b}x+{c}=0 são: x1={x_1} e x2={x_2}.".format(a=a,b=b,c=c,x_1=x1,x_2=x2))
> ```
>
> Este programa resolve uma equação de segundo grau do tipo ax²+bx+c=0  
> Digite o valor de a:  1  
> Digite o valor de b:  2  
> Digite o valor de c:  -10  
> As soluções da equação 1x²+2x+-10=0 são: x1=2.3166247903554 e x2=-4.3166247903554.

Observe que a string de `x1` e `x2` apresenta muitas casas decimais e isto pode dificultar a leitura. Contudo podemos deixar a saída mais bonita através do método `.format()`.  Na tabela abaixo mostra alguns especificadores:

| Tipo | Significado                                                  |
| ---- | ------------------------------------------------------------ |
| d    | Mostra o argumento como um `int`                             |
| c    | Mostra o argumento como caractere (Código unicode)           |
| b    | Mostra o argumento como binário                              |
| o    | Mostra o argumento como octal                                |
| X    | Mostra o argumento como hexadecimal                          |
| f    | Mostra o argumento como `float`                              |
| e    | Mostra o argumento no formato de notação científica          |
| g    | Arredonda o argumento em `p` números significativos (Valor padrão 6 significativos) |
| %    | Mostra o argumento como porcentagem (Multiplica por 100 e coloca % no final) |

Por exemplo, podemos modificar a saída de `x1` e `x2` para arredondar para 6 algoritmos significativos. E mostrar os argumentos `a`, `b` e `c` como float.

> ```python
> print("Este programa resolve uma equação de segundo grau do tipo ax²+bx+c=0")
> a=int(input("Digite o valor de a: "))
> b=int(input("Digite o valor de b: "))
> c=int(input("Digite o valor de c: "))
> delta=b**2-4*a*c
> x1=(-b+delta**(1/2))/(2*a)
> x2=(-b-delta**(1/2))/(2*a)
> print("As soluções da equação {a:f}x²+{b:f}x+{c:f}=0 são: x1={x_1:g} e x2={x_2:g}".format(a=a,b=b,c=c,x_1=x1,x_2=x2))
> ```
>
> Este programa resolve uma equação de segundo grau do tipo ax²+bx+c=0  
> Digite o valor de a:  1  
> Digite o valor de b:  2  
> Digite o valor de c:  -10  
> As soluções da equação 1.000000x²+2.000000x+-10.000000=0 são: x1=2.31662 e x2=-4.31662

Observe que a sintáxe de formatação de string é independente da sintáxe de numeração ou nomeação. Veja o mesmo exemplo anterior sem essa sintáxe

> ```python
> print("Este programa resolve uma equação de segundo grau do tipo ax²+bx+c=0")
> a=int(input("Digite o valor de a: "))
> b=int(input("Digite o valor de b: "))
> c=int(input("Digite o valor de c: "))
> delta=b**2-4*a*c
> x1=(-b+delta**(1/2))/(2*a)
> x2=(-b-delta**(1/2))/(2*a)
> print("As soluções da equação {:f}x²+{:f}x+{:f}=0 são: x1={:g} e x2={:g}".format(a,b,c,x1,x2))
> ```

Veja mais um exemplo:

> ```python
> #Código do emoji em decimal
> código=int('1F602',16) #Função converte uma string hexadecimal em um inteiro
> 
> # Mostra o código em hexadecimal e o emoji resultante
> print("O código unicode em hexadecimal '{0:X}' resulta no caractere {0:c}.".format(código))
> ```
>
>  O código unicode 1F601 resulta em 😁.

**Tarefa:** Crie um programa capaz de analisar um código hexadecimal digitado pelo usuário e mostrar os seguintes dados:

- Valor em decimal do código
- Valor em binário do código
- Valor em octal do código
- Caractere equivalente

A saída do programa deve ser:

> Analisando o código '[hexadecimal]'...
>
> DEC: [decimal] | BIN: [binário] |OCT: [octal] | Caractere: [Caractere]

Teste os seguintes valores

- 2702
- 26BD
- 1F64C
- 0041
- 0169

### Exemplo 5:  Largura mínima

Além dos especificadores de tipo é possível customizar uma série de outros detalhes na saída do argumento.  Veja a estrutura base:

```
:[preencher][alinhar][sinal][largura][precisão][tipo]
```

| Campo     | Função $\rightarrow$Notação                                  |
| --------- | ------------------------------------------------------------ |
| preencher | Preenche com o caracter escolhido (`0` no caso de números)   |
| alinhar   | `<` $\rightarrow$ esquerda<br />`>` $\rightarrow$ direita<br />`^` $\rightarrow$ centro |
| sinal     | `+` $\rightarrow$ Sinal para positivo e negativo<br />`-` $\rightarrow$ Sinal apenas em negativos |
| largura   | Largura mínima do campo (Um número)                          |
| precisão  | Largura máxima do campo (Deve ser iniciada com o `.`)        |
| tipo      | Especificador citado anteriormente                           |

A campo de `largura`  define a largura mínima do argumento (incluindo o ponto decimal). Veja e execute o exemplo abaixo:

> ```python
> print("{:d}".format(12))
> # Inteiro com largura mínima (5 dígitos)
> print("{:5d}".format(12))
> # Preenchendo com zeros
> print("{:05d}".format(12))
> ```

**Tarefa 1:** Repita o código acima considerando `3` casas decimais considerando os tipos `d`  e `g`.

**Tarefa 2:** Explique porque a largura dos exemplos abaixo não são de 2 dígitos.

```python
print("{:2d}".format(1234))
print("{:2g}".format(999.8))
```

### Exemplo 6:  Precisão

O campo de `precisão` varia de acordo com o tipo de dado. Mas de uma forma geral ele determina o número máximo de dígitos de um número.

- No tipo `f` precisão determina o número de casas decimais
- No tipo `g`  precisão determina o número total de digitos.

> **Observação:** Tanto o tipo `g` vem de "Geral", portanto, dependendo da precisão ele pode mostrar o número como inteiro como decimal ou em notação científica (Equivalente ao tipo `e`).

Veja o exemplo abaixo:

> ```python
> # O número tem largura mínima de 8 espaços (incluindo o ponto)
> # E 3 casas decimais de "precisão" 
> # Neste caso há um arredondamento
> print("{:8.3f}".format(12.2346)) 
> print("{:08.3f}".format(12.2346)) #Preenchendo com '0'
> ```
>
> 0012.235

**Tarefa 1:** Modifique o exemplo acima para mostrar todos os dígitos, sem arredondamentos.

**Tarefa 2:** Modifique o exemplo acima utilizando o tipo `g`. Explique o que aconteceu.

### Exemplo 7: Outras customizações

Podemos fazer outras customizações utilizando o método `.format()` Como:

1. Customização em relação ao sinal:

> ```python
> # Mostre o sinal +
> print("Mostre o sinal '+'")
> print("{:+6.2f} | {:+6.2f}".format(12.23, -12.23))
> print("{:+6.5g} | {:+6.5g}".format(12.23, -12.23))
> 
> # Mostre apenas o sinal -
> print("Mostre apenas o sinal '-'")
> print("{:-6.2f} | {:-6.2f}".format(12.23, -12.23))
> print("{:-6.5g} | {:-6.5g}".format(12.23, -12.23))
> ```
>
> Mostre o sinal '+'  
> +12.23 | -12.23  
> +12.23 | -12.23  
> Mostre apenas o sinal '-'  
>  12.23 | -12.23  
>  12.23 | -12.23

2. Customização em relação ao alinhamento:

```python
# integer numbers with right alignment
print("{:5d}".format(12))

# float numbers with center alignment
print("{:^10.3f}".format(12.2346))

# integer left alignment filled with zeros
print("{:<05d}".format(12))
```

3. Aplicação em strings

> ```python
> # Preenchendo o espaço vazio com ___
> print("Formatando o número á direita:")
> print("A palavra é:'{:_>8}'".format('Casa'))
> print("Formatando o número á esquerda:")
> print("O palavra é: '{:_<8}".format('Casa'))
> print("Formatando o número no centro:")
> print("O palavra é: '{:_^8}".format('Casa'))
> ```
>
> Formatando o número á direita:  
> A palavra é:'\_\_\_\_Casa'  
> Formatando o número á esquerda:  
> O palavra é: 'Casa\_\_\_\_  
> Formatando o número no centro:  
> O palavra é: '\_\_Casa\_\_

Além dessa customização existem muitas outras. Para se aprofundar um pouco mais você pode ler [aqui](https://www.programiz.com/python-programming/methods/string/format).

**Tarefa:** Escreva um programa capaz de produzir a seguinte frase:

> "Olá, meu nome é \_\_[nome]\_\_, tenho \_\[idade]\_ anos, e minha idade daqui a 5 anos será \_[idade]\_."

O espaço para o nome deve ser de 16 caracteres e das idades de 3 caracteres. Veja o exemplo de saída:

```
Digite seu nome:  Lucas
Digite sua idade:  8
Olá, meu nome é ___Lucas____, tenho _8_ anos e minha idade daqui a 5 anos será 13_ anos.
```

# Atividade 2: Variáveis booleanas
As operações booleanas são operações que estão presentes na [álgebra booleana](http://www.inf.ufsc.br/~j.guntzel/isd/isd2.pdf), foi desenvolvida em 1854 por George Boole e é extensivamente utilizada para representar o comportamento de circutos eletrônicos. Neste curso iremos apenas apresentar a lógica, sem nos atermos aos conceitos matemáticos ou mais fundamentais da álgebra de Boole.  
A algebra boolena tem básicamente 3 operadores:
- `or` (OU) Adição lógica;
- `and` (E) Multiplicação lógica;
- `not` Negação ou inversão.

E as operações tem apenas dois resultados:  
- `True` (verdadeiro) ou 1;
- `False` (falso) ou 0.

As variáveis booleanas são do classe `bool` no Python:

> ```python
> type(True)
> ```
>
> bool

## Parte 1: Operação E

A multiplicação lógica é uma operação representada por `✕` e funciona bem similar a adição entre dois números reais, essa operação tem a seguinte tabela verdade:

|  A   |  B   |  ✕   |
| :--: | :--: | :--: |
|  0   |  0   |  0   |
|  0   |  1   |  0   |
|  1   |  0   |  0   |
|  1   |  1   |  1   |

Por exemplo, vamos inicializar duas variáveis: 
- `sentenca1`
- `sentenca2`

Em seguida, rodaremos a função `print()` para vermos o resultado gerado das combinações de acordo com o operador `and`:

### Exemplo 1: Apresentando o operador `and`

> ```python
> sentenca1 = False
> sentenca2 = False
> print("{} and {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 and sentenca2)))
> ```
>
> False and False resulta em False.
>
> ```python
> sentenca1 = False
> sentenca2 = True
> print("{} and {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 and sentenca2)))
> ```
>
> False and True resulta em False.
>
> ```python
> sentenca1 = True
> sentenca2 = False
> print("{} and {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 and sentenca2)))
> ```
>
> True and False resulta em False.
>
> ```python
> sentenca1 = True
> sentenca2 = True
> print("{} and {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 and sentenca2)))
> ```
>
> True and True resulta em True.

**Tarefa:** Monte uma tabela verdade do operador `and`  que mostre algo parecido com o texto mostrado abaixo:

```
|A    |B    |X    |
|False|False|False|
|False|True |False|
|True |False|False|
|True |True |True |
```

> **Dica:** Para manter a formatação de `True` ou `False`  use `str(True)`.

### Exemplo 2: Operador `and` com `int`

**Tarefa:** Veja o que acontece quando substituímos as variáveis booleanas (`True` e `False`) por `0` ou `1`:

> ```python
> #Célula 1: Um booleano e um número
> sentenca1 = True
> sentenca2 = 0
> print("{} and {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 and sentenca2)))
> type(sentenca1 and sentenca2)
> ```
>
> ```python
> #Célula 2: Dois números 1
> sentenca1 = 1
> sentenca2 = 1
> print("{} and {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 and sentenca2)))
> type(sentenca1 and sentenca2)
> ```
>
> ```python
> #Célula 3: Um número `0` e um número maior que 0
> sentenca1 = 0
> sentenca2 = 10
> print("{} and {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 and sentenca2)))
> type(sentenca1 and sentenca2)
> ```
>
> ```python
> #Célula 4: Dois números maiores que zero
> sentenca1 = 2
> sentenca2 = 10
> print("{} and {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 and sentenca2)))
> type(sentenca1 and sentenca2)
> ```

**Tarefa:** Responda:

- O que acontece quando utilizamos operador `and` em um `bool` e um `int`?
- O que acontece quando utilizamos o operador `and` e `int`?

## Parte 2: Operação OU

A adição lógica é uma operação representada por `+` e funciona  um pouco diferente da multiplicação entre dois números reais, essa operação tem a seguinte tabela verdade:

|  A   |  B   |  +   |
| :--: | :--: | :--: |
|  0   |  0   |  0   |
|  0   |  1   |  1   |
|  1   |  0   |  1   |
|  1   |  1   |  1   |

Para ilustrar o comportamento deste operador, abaixo vamos inicializar as seguintes variáveis:
- `sentenca1`
- `sentenca2`

E vamos ver os resultados com o operador `or`:

### Exemplo 1: Apresentando o operador `or`

Veja e execute o exemplo abaixo:

> ```python
> sentenca1 = False
> sentenca2 = False
> print("{} or {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 or sentenca2)))
> ```
>
> False or False resulta em False.
>
> ```python
> sentenca1 = False
> sentenca2 = True
> print("{} or {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 or sentenca2)))
> ```
>
> False or True resulta em True.
>
> ```python
> sentenca1 = True
> sentenca2 = False
> print("{} or {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 or sentenca2)))
> ```
>
> True or False resulta em True.
>
> ```python
> sentenca1 = True
> sentenca2 = True
> print("{} or {} resulta em {}.".format(sentenca1,sentenca2,(sentenca1 or sentenca2)))
> ```
>
> True or True resulta em True.

Em contrapartida ao operador anterior, o operador `or` retorna `True` quando, _pelo menos uma_ sentença for `True`.

**Tarefa 1:** Monte a tabela verdade com o operador `or`  semelhante àquela que você fez com o operador `and`.

**Tarefa 2:** Responda:

- O que acontece quando utilizamos operador `or` em um `bool` e um `int`?
- O que acontece quando utilizamos o operador `and` e `int`?

Se necessário, teste em uma célula antes de dá a resposta.

**Tarefa 3:** Crie duas variáveis booleanas, que usando todos os operadores booleanos retornem `True`.

## Parte 3: Operação *Inversão*

### Exemplo 1: Apresentando o operador `not`

A inversão lógica é uma operação representada por `¬` e retorna o  valor complementar da variável.

|  A   |  ¬   |
| :--: | :--: |
|  0   |  1   |
|  1   |  0   |

Para ilustrar exemplificar o operador `not`, podemos reutilizar as variáveis anteriores. Vamos pegar a `sentenca1` na célula 3.

> ```python
> sentenca=True
> print("not({}) resulta em {}.".format(sentenca,not(sentenca)))
> sentenca=False
> print("not({}) resulta em {}.".format(sentenca,not(sentenca)))
> ```
>
> not(True) resulta em False.  
> not(False) resulta em True.

O operador `not` nega o estado da variável. Para uma variável cujo valor seja `True`, ao utilizar o `not` a mesma variável passa a ser `False`. O mesmo vale para o inverso. Se ela for `False`, com o `not` passa a ser `True`.

**Tarefa:** Repita o exemplo acima substituíndo o `True` por `1` e `False` por `0`. Explique o que aconteceu?

### Exemplo 2: Combinando mais de um operador booleano

É possível combinar mais de uma operação booleana para criar expressões mais complexas. Porém, antes devemos lembrar da ordem de precedência das variáveis booleanas. A tabela abaixo mostra a ordem de precedência dos operadores do Python. Os primeiros operadores apresentam maior prioridade e os últimos apresentam menor prioridade.

|                        Operador                        |
| :----------------------------------------------------: |
|                   Parênteses (`( )`)                   |
| Operadores aritméticos (`+`,`-`,`*`,`/`,`//`,`%`, etc) |
|                         `not`                          |
|                         `and`                          |
|                          `or`                          |

Para entender melhor vamos à um exemplo:

Imagine a porta de um shopping que deve abrir se e somente se as seguintes condições forem verdadeiras:

- A lotação máxima do local não foi atingida.
- A porta não foi aberta nos últimos 10s.
- O horário atual é entre 13h e 22h. 

Vamos escrever a expressão lógica que representa a condição para a porta abrir:

> ```python
> print("Responda com (1 - True ou 0 - False)")
> lotacao_máxima_atingida=int(input("- A lotação máxima foi atingida? "))
> Porta_aberta_10_seg=int(input("- A porta abriu nos últimos 10 seg? "))
> Horário_atual_permitido=int(input("- O horário atual está entre 13h e 22h? "))
> porta_abrir=not(lotacao_máxima_atingida) and not(Porta_aberta_10_seg)and(Horário_atual_permitido)
> print("A porta abriu: {}".format(porta_abrir))
> ```

**Tarefa 1:** Execute o código acima e:

- Indique a condição lógica em que a porta abra.
- Indique três condições lógicas em que a porta **não abra** abra.

**Tarefa 2:** Construa um programa que identifique se o animal é um cachorro de acordo com as perguntas abaixo:

- Este animal tem quatro patas?
- Este animal é hebívoro?
- Este animal é grande (maior que 50 cm)?
- Este animal é pequeno (menor que 30 cm)?

> **Observação:** Existem cachorros grandes e pequenos.

> **Dica:** Utilize a mesma estrutura do exemplo da porta de shopping.

**Tarefa 3:** Considere uma tabela verdade, em que $x$ é o resultado da combinação lógica.

|   p   |   q   |   x   |
| :---: | :---: | :---: |
| True  | True  | True  |
| True  | False | False |
| False | True  | True  |
| False | False | True  |

Apresente uma expressão que produza a saída x, quaisquer sejam as proposições p e q.

> **Dica:** Para testar você pode utilizar o esquema do exemplo da porta de shopping.

### Exemplo 3: Transcrevendo texto em lógica

Considere a texto abaixo:

> João não tem uma boa alimentação, mas pratica exercícios, assim como Pedro. João quer muito ter uma reeducação alimentar, pois seu peso é elevado. 
>
> Pedro já teve uma reeducação alimentar, e aprendeu a gostar de frutas, assim não tem um peso elevado.

Vamos criar uma expressão lógica que descreva a frase acima:

> ```python
> """ Frase:
> João não tem uma boa alimentação, mas pratica exercícios, assim como Pedro. João quer muito ter uma reeducação alimentar, pois seu peso é elevado. 
> 
> Pedro já teve uma reeducação alimentar, e aprendeu a gostar de frutas, assim não tem um peso elevado.
> """
> João = (boa_alimentação==False) and (pratica_exercícios==True) and (reeducação_alimentar==False) and (peso_elevado==True)
> Pedro = (pratica_exercícios==True) and (reeducação_alimentar==True) and (gosta_de_frutas==True) and (peso_elevado==False)
> ```

**Tarefa:** Crie uma expressão lógica para a frase abaixo:

> Paulo mora em São Paulo há menos de 2 anos e não tem o costume de verificar a previsão do tempo. Ele sai para trabalhar e, ao olhar para o céu, percebe que está muito nublado, logo começou à chover e acabou tendo problemas com a chuva.
>
> Seu Raimundo mora em São Paulo há mais de 10 anos, como já está acosutumado com o clima imprevisível, sempre verifica a previsão do tempo. Por isso, ontem adquiriu um guarda chuvas.

Use as variáveis:

- Pessoas: `Paulo` e `Raimundo`.
- `Tempo_Nublado`.
- Características das pessoas: `tempo_em_São_Paulo`,  `verifica_previsão_tempo`, `Tem_guarda_chuva`, `Problemas_com_chuva`.

# Atividade 3: Operadores relacionais

Os operadores relacionais são operações que comparam o valor de duas variaveis de _mesmo tipo_. Retornando sempre `True` ou `False` . Costuma ser utilizado em operações com valore literais, i.e, números ou _strings_. 

### Exemplo 1: Apresentando os operadores relacionais

São eles:

**Maior que:** `>`

> ```python
> a = 5
> b = 2
> print(a > b) #a maior que b
> ```
>
> True

**Menor que:** `<`

> ```python
> a = 5
> b = 2
> print(a < b) # a menor que b
> ```
>
> False

**Igual a:** `==` 

> ```python
> a = 5
> b = 2
> res = a==b
> print("{} == {} resulta em {}.".format(a,b,res))
> res = a is b
> print("{} is {} resulta em {}.".format(a,b,res))
> a = 2
> b = 2
> res = a==b
> print("{} == {} resulta em {}.".format(a,b,res))
> res = a is b
> print("{} is {} resulta em {}.".format(a,b,res))
> ```
>
> 5 == 2 resulta em False.  
> 5 is 2 resulta em False.  
> 2 == 2 resulta em True.  
> 2 is 2 resulta em True.

**Diferente de:** `!=` ou `is not`

> ```python
> a = 5
> b = 2
> res = a!=b
> print("{} != {} resulta em {}.".format(a,b,res))
> res = a is not b
> print("{} is not {} resulta em {}.".format(a,b,res))
> a = 2
> b = 2
> res = a!=b
> print("{} != {} resulta em {}.".format(b,c,res))
> res = a is not b
> print("{} is not {} resulta em {}.".format(b,c,res))
> ```
>
> 5 != 2 resulta em True.  
> 5 is not 2 resulta em True.  
> 2 != 2 resulta em False.  
> 2 is not 2 resulta em False.

**Maior ou igual a:**

> ```python
> a = 5
> b = 2
> res = a >= b
> print("{} >= {} resulta em {}.".format(a,b,res))
> a = 2
> b = 2
> res = a >= b
> print("{} >= {} resulta em {}.".format(a,b,res))
> a = 2
> b = 3
> res = a >= b
> print("{} >= {} resulta em {}.".format(a,b,res))
> ```
>
> 5 >= 2 resulta em True.  
> 2 >= 2 resulta em True.  
> 2 >= 3 resulta em False.

**Menor ou igual a:**

> ```python
> a = 5
> b = 2
> res = a <= b
> print("{} <= {} resulta em {}.".format(a,b,res))
> a = 2
> b = 2
> res = a <= b
> print("{} <= {} resulta em {}.".format(a,b,res))
> a = 2
> b = 3
> res = a <= b
> print("{} <= {} resulta em {}.".format(a,b,res))
> ```
>
> 5 <= 2 resulta em False.  
> 2 <= 2 resulta em True.  
> 2 <= 3 resulta em True.

Os resultados das operações acima podem resultar em `True` ou `False`. 

**Tarefa:** Usando os operador `is` e `==` verifique se o float `2.0` e o int `2` são iguais (Ver o código abaixo).

```python
a = 2
b = 2.0
print(a is b)
print(a == b)
```

- De acordo com o resultado explique a diferença entre esses dois operadores.
- O que você pode explicar em relação ao `is not` e `!=`.

###  Exemplo 2: Operadores relacionais e operadores booleanos

Podemos juntar os operadores relacionais e os operadores booleanos? A resposta é __sim__. 

Os operadores lógicos tem as mesmas precedências. A tabela abaixo compara estes operadores com o 

|                           Operador                           |
| :----------------------------------------------------------: |
|                      Parênteses (`( )`)                      |
|    Operadores aritméticos (`+`,`-`,`*`,`/`,`//`,`%`, etc)    |
| Operadores relacionais (`==`,`!=`,`>`,`>=`,`<=`.`is`, `is not`) <- Mesma precedência |
|             Operadores lógicos (`and`, `or`, ``)             |
|                             `or`                             |

Veja o exemplo:

> ```python
> a = 5
> b = 2
> res=a > b
> print("{} > {} é {}.".format(a,b,res))
> ```
>
> 5 > 2 é True.
>
> ```python
> res=not(a > b)
> print("not({} > {}) é {}.".format(a,b,res))
> ```
>
> not(5 > 2) é False.
>
> ```python
> c = a + b
> res=c > a > b
> print("{c} > {a} > {b} é {res}.".format(a=a,b=b,c=c,res=res))
> ```
>
> 7 > 5 > 2 é True.
>
> ```python
> res=a < c  and a > b
> print("{a} < {c} and {a} > {b} é {res}.".format(a=a,b=b,c=c,res=res))
> ```
>
> 5 < 7 and 5 > 2 é True.
>
> ```python
> res=a > c  and a > b
> print("{a} > {c} and {a} > {b} é {res}.".format(a=a,b=b,c=c,res=res))
> ```
>
> 5 > 7 and 5 > 2 é False.

**Tarefa 1:** Um sensor de temperatura deve retornar `1` sempre que a temperatura estiver acima de 38 °C ou sempre que a temperatura estiver abaixo de 18 °C.

**Tarefa 2:** Imagine a porta de um shopping que deve abrir se e somente se as seguintes condições forem verdadeiras:

- A lotação máxima de 350 pessoas no local não foi atingida.
- A porta não foi aberta nos últimos 10s.
- O horário atual é entre 13h e 22h. 

Utilize como base as seguintes perguntas:

- Quantas pessoas estão no local?
- Há quantos segundos a porta foi aberta?
- Qual o horário do dia (Em horas)?

> **Dica:** Esse exercício já foi feito anteriormente. Pegue a estrutura do exercício anterior e adapte para a nova situação.

# Atividade 5: Para casa

## Exercício 1: Lista de compras

Crie um código, que faça uma lista de estoque formatada com largura máxima de cada linha de 50 caracteres, ela deverá informar o nome do item e a sua quantidade disponível. O código deverá pedir o usuário que entre com o nome e quantidade de pelo menos 3 itens. Considere que a quantidade máxima de cada item seja 999. Use como modelo a lista abaixo e use o método `.format`.
```
_________________Lista de estoque_________________
Item-----------------------------------------Quant
Item 1: Caixa de Leite-------------------------002
Item 2: Caixa de cereal------------------------024
Item 3: Lata de refrigerante-------------------255 
```

> Dica: Digite um `print()` para cada linha, e depois repita-o trocando os argumentos, use o seguinte código para começar.

Siga como base o exemplo abaixo:

```python
'''
INSIRA AQUI SEU CÓDIGO DE ENTRADA DE DADOS
'''
print("{:_^50}".format('Lista de estoque'))
print("{:-<45}{}".format("Item","Quant"))
print("<SEU CÓDIGO AQUI>")
print("<SEU CÓDIGO AQUI>")
print("<SEU CÓDIGO AQUI>")
```

## Exercício 2: Variáveis booleanas

Escreva o resultado de cada uma das seguintes expressões em Markdown:

- `(5 > 4) and (3 == 5)`
- `not (5 > 4)`
- `(5 > 4) or (3 == 5)`
- `not ((5 > 4) or (3 == 5))`
- `(True and True) and (True == False)`
- `(not False) or (not True)`

## Exercício 3: Semáforo

Um semáforo comum costuma ter de 2 a 4 fases e mais uma fase para os pedestres.
Crie uma expressão que represente um semáforo, as setas abaixo indicam o fluxo.

```
    ⇊          N
  ⇆   ⇆      L   O
    ⇵          S
```

Crie uma expressão para cada uma das fases deste cruzamento.

## Exercício 4: Ano bissexto

Escreva uma expressão (em função de uma incógnita ano) que resulte `True` caso o ano seja bissexto e False caso contrário.



