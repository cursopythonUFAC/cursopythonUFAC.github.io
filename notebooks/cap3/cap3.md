<center><div style="font-size:32px;display:inline-block;line-height:1.1;font-weight:bold;margin:0 0 15px" class="aula-title">Capítulo 3: Condicional, método de strings e módulos</div></center>

# Atividade 1: Método de string

Existem métodos para identificar o tipo de dado de um objeto. Utilizando a função `type()`, em que o parâmetro é a variável alvo é possível visualizar.

No caso de strings, existem outros métodos para ler a string inserida: se são números, letras, etc.

## Parte 1: Métodos `is`

### Exemplo 1: Método de identificação `.isalpha()`

O método `.isalpha()` é um método de strings que retorna `True` se uma string contiver apenas caracteres alfabeticos. Caso contrário, retorna `False`.

Refaça os exemplos abaixo para ver o resultado:

> ```python
> a = 'abcde'
> a.isalpha()
> ```
>
> True
>
> ```python
> b = '\u0030' # unicode para 0
> c = '\u0047' # unicode para G
> print('{b} é alfabético? {out}'.format(b=b,out=b.isalpha()))
> print('{c} é alfabético? {out}'.format(c=c,out=c.isalpha()))
> ```
>
> 0 é alfabético? False
> G é alfabético? True
>
> ```python
> s = 'lakers98'
> print('"{}" é alfabético? {}'.format(s,s.isalpha()))
> ```
>
> "lakers98" é alfabético? False
>
> ```python
> z = '1s d3c1m4l'
> print('"{}" é alfabético? {}'.format(z,z.isalpha()))
> ```

**Tarefa:** Guarde o nome do usuário, idade e e-mail, imprima utilizando o método `.format()`, diga o tamanho do nome e se é alfabético ou não.

### Exemplo 4: `.isidentifier()`

Verifica se a string segue o padrão de identificadores do Python. 

> ```python
> a = 'Oi'
> print(a.isidentifier())
> ```
>
> True
>
> ```Python
> senha_valida = 'eu1d0l4tr0'
> senha_invalida = '3u1d0l4tr0'
> print('{} é válida? {}'.format(senha_valida, senha_valida.isidentifier()))
> print('{} é válida? {}'.format(senha_invalida, senha_invalida.isidentifier()))
> ```
>
> True
>
> False

**Tarefa:** Peça ao usuário o login de e-mail e senha. Para cada variável, verifique os resultados aplicando os métodos: `isalpha`, `isdecimal`, `isdigit`, `isalnum`, `isidentifier`. Discorra sobre o que você entendeu dos métodos e as diferenças entre eles.

### Exemplo 5: Outros métodos

Existem diversos outros métodos para string. Você pode visualizar uma tabela com mais alguns métodos interessantes.

| Método       | Descrição                                                    |
| ------------ | ------------------------------------------------------------ |
| istitle()    | Retorna `True`se a string segue as regras e um título.       |
| capitalize() | Converte o primeiro caracter de uma string para maiúsculo    |
| split()      | Separa uma string em um separador especificado como parâmetro |
| upper()      | Converte toda a string para maiúsculo                        |
| lower()      | Converte toda a string para minúsculo                        |

Para mais métodos, você pode acessar a [documentação oficial do Python](https://docs.python.org/pt-br/3/) ou [o site da W3 Schools](https://www.w3schools.com/python/python_ref_string.asp).

**Tarefa:** Crie um programa capaz de dissecar uma entrada digitada pelo usuário. A saída desse exercício deve identificar os seguintes padrões:

1. A classe de [entrada]
2. [entrada] só tem espaços?
3. [entrada] é um número (use `isnumeric()`)?
4. [entrada] é alfabética?
5. [entrada] é alfanumérica?
6. [entrada] está em maiúsculas?
7. [entrada] está em minúsculas?
8. [entrada] está captalizada?
9. [entrada] pode ser utilizada como nome 

```
Digite algo: 123Bruxa
A classe de "123Bruxa" é <class 'str'>
"123Bruxa" só tem espaços? False
"123Bruxa" é um número? False
"123Bruxa" é alfabético? False
"123Bruxa" é alfanumérico? True
"123Bruxa" está em maiúsculas? False
"123Bruxa" está em minúsculas? False
"123Bruxa" está capitalizada? True
"123Bruxa" pode ser utilizada com nome de variável? False
```

Discorra sobre o que você entendeu dos métodos e as diferenças entre eles.

# Atividade 2: Condicionais

## Parte 1: Se `IF`

O `if` uma estrutura condicional presente em todas as linguagens. Ele estabelece uma relação lógica de *"se.. então"*. Veja o exemplo abaixo:

> ```python
> x = 10
> if x < 10:
> print('{} é menor que 10.'.format(x))
> if x == 10:
> print('{} é igual a 10.'.format(x))
> ```
>
> *10 é igual a 10* 

Genericamente, se uma condição for verdadeira (ou false) ele executará o bloco de código correspondente:

> ```python
> cpf = input('Digite seu CPF: ')
> if not cpf.isdigit():
>  print('CPF inválido.')
> ```
>

**Tarefa: ** Repita o exemplo do capítulo anterior, por convinência o exemplo será mostrado abaixo.

Imagine a porta de um shopping que deve abrir se e somente se as seguintes condições forem verdadeiras:

- A lotação máxima de 350 pessoas no local não foi atingida.
- A porta não foi aberta nos últimos 10s.
- O horário atual é entre 13h e 22h. 

Utilize como base as seguintes perguntas:

- Quantas pessoas estão no local?
- Há quantos segundos a porta foi aberta?
- Qual o horário do dia (Em horas)?



