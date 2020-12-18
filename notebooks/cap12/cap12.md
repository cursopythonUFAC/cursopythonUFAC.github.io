<center><div style="font-size:32px;display:inline-block;line-height:1.1;font-weight:bold;margin:0 0 15px" class="aula-title">Capítulo 12: Classes</div></center>

Classes são formas de organizar e dar atributos aos objetos em Python. Uma classe é definida pelo `class` e tem a estrutura parecida à de uma função:

```python
    class nomedaclasse():
        propriedade1 = 'alguma coisa'
        propriedade2 = 'outra coisa'
        
        def metodo(self):
            print(self.propriedade1)
            
```
Onde a função `metodo` que foi definida na classe `nomedaclasse` é uma função que existe apenas nos objetos que são membros daquela classe.

# Atividade 1: Escopo e _Namespace_
Agora que vimos o que é uma classe e entendemos um pouco de seu funcionamento vamos explorar o conceito de __escopo__ e __namespace__.
O namespace consiste em todos os nomes que estão definidos no atual estado do interpretador, por exemplo, quando você importa o módulo `math` você adiciona todos aqueles nomes definidos no módulo math para o seu código.   
O escopo se trata de quais objetos você pode acessar diretamente, vamos a um exemplo simples:

```python
var1 = 0

def teste():
    var2 = 0
```
Neste código temos 2 escopos, um global onde a variável `var1` está definida e um local onde temos além da `var1` está definida a `var2`. O mesmo ocorrem com as classes, todas as váriaveis definidas dentro de uma função ou classe são locais a não ser que seja explicitamente dito que ela é global.

> ```python
> var1 = 0
> class teste():
>        var2 = 1
>        global var3
>        var3 = 3
> ```
>```python
>print(var1, var3)
>```
>0 3
>
>```python
>var2
>```
>
>```java
>---------------------------------------------------------------------------
>NameError                                 Traceback (most recent call last)
><ipython-input-3-5395c735b10d> in <module>
>----> 1 var2
>
>NameError: name 'var2' is not defined
>```

Preste bastantteste.var2e atenção que o erro exibido ao tentar apresentar a `var2` é um erro de nome, pois ela não está definida globalmente, portanto, só faz parte do namespace da classe `teste`.

> ```python
> teste.var2
> ```
>
> 1

# Atividade 2: Classes
### Exemplo 1: Comando Type
Tudo, ou quase tudo, no Python é baseado em classes. Por exemplo, observe as saídas do comando `type`:

> ```python
> print(type('a'))
> print(type(1))
> print(type([1,2]))
> ```
>
> <class 'str'>   
> <class 'int'>   
> <class 'list'>


Observe, que a saída é a `classe` a qual aquele objeto pertece.

### Exemplo 2: Criando uma classe simples 
Imagine a seguinte classe:

> ```python
> class cachorro():
>     nome = 'bob'
>     idade = 2
>     peso = 10
> ```

Essa classe tem três __atributos__, o nome, a idade e o peso. Todos os objetos __instanciados__ com essa classe terão os mesmos três __atributos__, com o mesmo valor.
>OBS: Um objeto e instância são utilizados como sinônimos. Por exemplo, uma string é uma _instância_ da classe `string`, um número inteiro é um _objeto_ da classe `int` e compartilha os mesmos atributos de todos os objetos membros da mesma.

Vamos criar um objeto da classe `cachorro`:

> ```python
> bob = cachorro()
> ```
>
> ```python
> bob.nome
> ```
>
> 'bob'

Além dos valores padrão da classe, podemos criar atributos temporários, esses são chamados atributos _instanciados_:

> ```python
> bob.altura = 100
> ```
>
> ```python
> bob.altura
> ```
>
> 100

Se criarmos um atributo instanciado com o mesmo nome de um atributo de classe, o interpretador vai utilizar o valor instanciado:

> ```python
> print(bob.peso)
> bob.peso = 15
> print(bob.peso)
> ```
>
> 10  
> 15


###  Exemplo 3: Inicialização de classe
Agora vamos utilizar um método chamado `__init__`, esse método é utilizado para inicializar uma classe com valores. O argumento `self` é uma convenção e indica o uso do próprio objeto instanciado, isto é, permite utilizar as propriedades já atribuídas na classe.

> ```python
> class cachorro():
>     def __init__(self, nome, idade, peso):
>         self.nome = nome
>         self.idade = idade
>         self.peso = peso
>         self.espécie = 'Canis familiaris'
> ```

Assim podemos instanciar um objeto da classe `cachorro`, com os valores personalizados:

> ```python
> bob = cachorro('bob', 2, 10)
> ```
>
> ```python
> bob.espécie
> ```
>
> 'Canis familiaris'

### Exemplo 4: Métodos de classe
Os métodos de classes são funções específicas para os objetos membros, isto é, elas estão definidas apenas para aqueles instancias da classe.

> ```python
> class cachorro():
>     def __init__(self, nome, idade, peso):
>         self.nome = nome
>         self.idade = idade
>         self.peso = peso
>         self.espécie = 'Canis familiaris'
>     
>     def latido(self):
>         print(3*'au')
>         
> bob = cachorro('bob', 2, 10)
> ```
>
> 

Ao invocarmos seu método temos:

> ```python
> bob.latido()
> ```
>
> auauau


### Exemplo 5: Copia de objetos de classe

As classes tem comportamento parecido ao das listas quando se fala de cópias:

> ```python
> roscoe = bob
> roscoe.nome = 'roscoe'
> print(roscoe.nome, bob.nome)
> ```
>
> roscoe roscoe

Se quisermos copiar devemos utilizar o `copy`:

> ```python
> import copy
> 
> bob = copy.copy(roscoe)
> bob.name = 'bob'
> print(bob.name, roscoe.nome)
> ```
>
> bob roscoe


### Exemplo 6: Herança de Classe
__Tarefa 1: __ Vamos criar uma classe simples de empregados, essa classe deve apresentar o nome, salário, função e ter um método de reajuste salárial.

> ```python
> class empregado():
>     def __init__(self, nome:str, sal:float, fun:str):
>         self.nome = nome
>         self.salario = sal
>         self.funcao = fun
>     
>     def info(self):
>         ret = 'Nome: {}\nSalário: R$ {}\nFunção: {}'.format(
>             self.nome,self.salario,self.funcao)
>         return ret
>     
>     def reajuste(self, ajuste):
>         self.salario *= ajuste 
> ```
>
> ```python
> joao = empregado('João', 1500, 'Aux. Adminstrativo')
> print(joao.info())
> joao.reajuste(15)
> print(joao.info())
> ```
>
> Nome: João  
> Salário: R<span>$</span> 1500  
> Função: Aux. Adminstrativo  
> Nome: João  
> Salário: R<span>$</span> 22500  
> Função: Aux. Adminstrativo

Funções também podem ser criadas a partir de uma já existente, vamos tomar a classe `empregado` como base para a classe `jornalista`:

> ```python
> class jornalista(empregado):
>     def __init__(self, nome: str, sal: float):
>         empregado.__init__(self, nome, sal, fun='Jornalista')
>     
>     def reajuste_porcento(self, ajuste: float) -> float:
>         empregado.reajuste(ajuste/100)
>         return self.salario
> ```
>
> ```python
> juca = jornalista('Juca', 2500)
> print(juca.info())
> ```
>
> Nome: Juca   
> Salário: R$ 2500   
> Função: Jornalista

__Tarefa 2:__  Vamos criar uma classe música com atributos básicos de nome da música, álbum, artista/banda, ano, gênero. Depois crie uma subclasse com atributos específicos apresentado abaixo:

>Jazz, Subgênero.  
>Rock, artista da banda.  
>Eletronica, BPM.  

Se quiser, use o https://musicbrainz.org/

> ```python
> class musica():
>     def __init__(self, data: dict):
>         self.nome = data['nome']
>         self.album = data['album']
>         self.artista = data['artista']
>         self.ano = data['ano']
>         self.genero = data['genero']
>     
>     def info(self) -> str:
>         ret = '{} - {} - {}\n'.format(self.artista, self.album, self.nome)
>         ret += 'Gênero: {}\nAno: {}'.format(self.genero, self.ano)
>         return ret
>     
>     def info_dict(self) -> dict:
>         ret = {
>             'nome': self.nome, 
>             'album': self.album, 
>             'artista': self.artista, 
>             'ano': self.ano,
>             'genero': self.genero,
>         }
>         return ret
> 
> class musica_jazz(musica):
>     def __init__(self, data: dict):
>         musica.__init__(self, data)
>         self.subgenero = data['subgenero']
>     
>     def info(self) -> str:
>         ret = musica.info(self)
>         if isinstance(self.subgenero, list):
>             for subgenero in self.subgenero:
>                 ret += '\nsubgenero: {}'.format(subgenero)
>         else:
>             ret += '\nSubgenero: {}'.format(self.subgenero)
>         return ret
> ```
>
> ```python
> data1 = {
>     'nome': 'Time Alone With You',
>     'album': 'Djessie Vol. 3', 
>     'artista': 'Jacob Collier', 
>     'ano': 2020,
>     'genero': 'Jazz',
>     'subgenero': ['Contemporary Jazz', 'Funk'],
> }
> musica1 = musica_jazz(data1)
> ```
>
> ```python
> print(musica1.info())
> ```
>
> Jacob Collier - Djessie Vol. 3 - Time Alone With You   
> Gênero: Jazz   
> Ano: 2020   
> subgenero: Contemporary Jazz   
> subgenero: Funk


# Atividade 3: Além-Mar
Vamos explorar alguns códigos já feitos:
>[Programa de Estoque](https://github.com/Leonardobat/Estoque-pyside2)  
>[Jogo de F1](https://github.com/Leonardobat/Paddock_Manager)
>[Servidor TCP](https://github.com/Leonardobat/Exemplos_Python/blob/master/Exemplo_Servidor_TCP.py)
