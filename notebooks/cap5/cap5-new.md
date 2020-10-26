<center><div style="font-size:32px;display:inline-block;line-height:1.1;font-weight:bold;margin:0 0 15px" class="aula-title">Capítulo 5: Widgets</div></center>

# Atividade 1: Introdução aos Widgets

Até o momento vimos como entrada de dados a função `input()`.  Contudo existem outras formas de entrada mais elegantes, como através do uso de **pacotes e extensões do IPython**.  

O IPython é o backend do Jupyter e ele traz suporte a diversos itens de iteratividade que pode ser adicionados através de pacotes e extensões para o Jupyter. Um desses itens são os **Widgets**, que adiciona o suporte de entrada de dados de forma interativa.

### Exemplo 1: Adicionando suporte à Widgets

Até o momento vimos como entrada de dados a função `input()`. Contudo existem outras formas de entrada mais elegantes, como através do uso de Widgets. 

Para adicionar suporte ao Widgets vamos recorrer ao pacote `ipywidgets`, cujo a documentação é apresentada em: 

> [https://ipywidgets.readthedocs.io/](https://ipywidgets.readthedocs.io/)

Para apresentar os widgets vamos começar adicionando um `IntSlider()`.

> ```python
> import ipywidgets as widget #Importando o pacote com o apelido de widgets
> widget.IntSlider() #Adicionando um slider de inteiros através da função intSlider
> ```
>
> IntSlider(value=0)

Contudo, ao executar esse código irá aparecer apenas um texto. Desta forma, **a inclusão do pacote no código não é suficiente para adicionar o suporte a Widgets**. Vamos resolver isso instando os **Jupyter Widgets:**

![Instalando a extensao do IpyWidgets](./images/ipywidgets-extensao.png)

Instale a extensão `@jupyter-widgets/jupyterlab-manager` e execute o código novamente:

> ```python
> import ipywidgets as widget #Importando o pacote com o apelido de widgets
> widget.IntSlider() #Inicializando um IntSlider
> ```
>
> <p>
> <input type="range" min="0" max="100" value="0" class="slider" id="slider-1">
> <span id="val-1"></span>
> </p>
> <script>
>  var slider1 = document.getElementById("slider-1");
>  var output1 = document.getElementById("val-1");
>  output1.innerHTML = slider1.value;
>  slider1.oninput = function() {
>    output1.innerHTML = this.value;
>  }
> </script>

Verá que irá aparecer um `Slider` de inteiro.

Alternativamente, podemos mostrar sliders através da função `display()`, do módulo `IPython.display`:

> ```python
> from ipywidgets import IntSlider #Importando a função IntSlider
> from IPython.display import display #Importando a função display
> 
> slider=IntSlider() #Inicializando o IntSlider
> display(slider) #Mostra o slider
> ```
>
> <p>
> <input type="range" min="0" max="100" value="0" class="slider" id="slider-2">
> <span id="val-2"></span>
> </p>
> <script>
>  var slider2 = document.getElementById("slider-2");
>  var output2 = document.getElementById("val-2");
>  output2.innerHTML = slider2.value;
>  slider2.oninput = function() {
>    output2.innerHTML = this.value;
>  }
> </script>

Provavelmente não será necessário importar a função display, pois ela já é carregada no Jupyter. Desta forma o código acima simplifica em:

> ```python
> from ipywidgets import IntSlider #Importando a função IntSlider
> 
> slider=IntSlider() #Inicializando o IntSlider
> display(slider) #Mostra o slider
>```
> 
> <p>
> <input type="range" min="0" max="100" value="0" class="slider" id="slider-3">
> <span id="val-3"></span>
></p>
> <script>
> var slider3 = document.getElementById("slider-3");
> var output3 = document.getElementById("val-3");
> output3.innerHTML = slider3.value;
> slider3.oninput = function() {
> output3.innerHTML = this.value;
> }
> </script>

**Tarefa:** Além do `IntSlider` existe uma extensa lista de Widgets que podem ser vista. Tente inicializar e mostrar os seguintes Widgets:

- Text
- Checkbox
- FloatSlider

### Exemplo 2: Customizando Widgets

De forma similar aos gráficos que aprendemos a plotar no capítulo anterior, os Widgets também são customizáveis. 

Todas as opções de customizações de todos os tipos de sliders podem ser vistos na [documentação](https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20List.html#). Porém, abaixo segue o exemplo com algumas opções de alguns Widgets que utilizaremos neste capítulo. Tentem executar todos os códigos:

- `IntSlider` retorna inteiros:

> ```python
> widget.IntSlider(
>   value=5, # Valor inicial
>   min=0, # Valor mínimo
>   max=10, # Valor máximo
>   step=1, # Passo
>   description='Número:' #Descrição
> )
> ```
>
> <p>
> Número:  
> <input type="range" min="0" max="10" value="5" class="slider" id="slider-6">
> <span id="val-6"></span>
> </p>
> <script>
> var slider6 = document.getElementById("slider-6");
> var output6 = document.getElementById("val-6");
> output6.innerHTML = slider6.value;
> slider6.oninput = function() {
> output6.innerHTML = (this.value).toString();
> }
> </script>

- `FloatSlider` retorna ponto flutuante:

> ```python
> widget.FloatSlider(
>   value=5.5, # Valor inicial
>   min=-10.0, # Valor mínimo
>   max=10.0, # Valor máximo
>   step=0.5, # Passo
>   description='Decimal:' #Descrição
> )
> ```
>
> <p>
> Decimal:  
> <input type="range" min="-100" max="100" value="55" step="5" class="slider" id="slider-7">
> <span id="val-7"></span>
> </p>
> <script>
> var slider7 = document.getElementById("slider-7");
> var output7 = document.getElementById("val-7");
> output7.innerHTML = (slider7.value/10).toFixed(2);
> slider7.oninput = function() {
> output7.innerHTML = (this.value/10).toFixed(2);
> }
> </script>

- `Checkbox` retorna booleano (Verdadeiro ou falso):

> ```python
> widget.Checkbox(
>   value=False, # Valor inicial
>   description='Booleano', # Descrição
>   indent=False # Indentação
> )
> ```
>
> <p>
> Booleano: 
> <input type="checkbox" class="check">
> </p>

- `Text` retorna uma string:

> ```python
> widget.Text(
>   value='', # Valor inicial
>   placeholder='Digite seu nome', #Nome que aparece quando não escreve nada
>   description='Nome: ' # Descrição
> )
> ```
>
> <p>
>  Nome: 
>  <input type="text" placeholder="Digite seu nome">
> </p>

### Exemplo 3: Acessando os valores dos Widgets

Toda vez que declaramos um Widget ele inicializa com um valor inicial no parâmetro `value`. 

Por exemplo, digamos que queremos criar um slider chamado em uma célula:

> ```python
> # Célula 1: Declarando o widget chamado Peso
> Peso = widget.FloatSlider(
>  value=5, # Valor inicial
>  min=30, # Valor mínimo
>  max=100, # Valor máximo
>  step=0.1, # Passo
>  description='Peso (kg):' # Descrição
> )
> ```

E em outra célula mostramos o widget (através da função `display()`):

> ```python
> # Célula 2: Mostrando o widget
> display(Peso)
> ```

E na última célula mostramos o resultado:

> ```python
> # Célula 3: Mostrando o valor do Peso
> print("O valor do peso é {} kg.".format(Peso.value))
> ```

No final o conjunto das três células é a seguinte:

> ```python
> # Célula 1: Declarando o widget chamado Peso
> Peso = widget.FloatSlider(
> value=5, # Valor inicial
> min=30, # Valor mínimo
> max=100, # Valor máximo
> step=0.1, # Passo
> description='Peso (kg):' # Descrição
> )
> ```
>
> ```python
> # Célula 2: Mostrando o widget
> display(Peso)
> ```
>
> <p>
> Peso (kg): 
> <input type="range" min="300" max="1000" value="429" step="1" class="slider" id="slider-5">
> <span id="val-5"></span>
> </p>
> <script>
> var slider5 = document.getElementById("slider-5");
> var output5 = document.getElementById("val-5");
> output5.innerHTML = (slider5.value/10).toFixed(2);
> slider5.oninput = function() {
> output5.innerHTML = (this.value/10).toFixed(2);
> }
> </script>
>
>
> ```python
> # Célula 3: Mostrando o valor do Peso
> print("O valor do peso é {} kg.".format(Peso.value))
> ```
>
> O valor do peso é 42.9 kg.

Observe que **declaramos o widget em uma célula** e **mostramos o widget em outra célula**. Isso é necessário pois **toda vez que você declara um Widget ele sempre inicializa com o valor padrão**, desta forma caso o `display()` esteja na mesma célula toda iteração sera perdida ao executar esta célula novamente.

**Veremos maneiras mais eficiente de contornar este problema! **

# Atividade 2: Usando `interact()`

### Exemplo 1: Introdução ao `interact`

Na atividade anterior aprendemos o conceito de Widgets e vimos como eles são úteis para construção de entradas mais elegantes. Porém, **a maneira que utilizamos não é eficiente, pois precisavamos interagir o widget e executar a célula seguinte separadamente**.

A função `interact()` permite a criação de widgets de forma muito mais simples do que vimos anteriormente. Além disso, com este método é possível executar o código ao interagir com o widget. 

Para trabalhar com o `interact()` precisamos utilizar os blocos `def`. No contexto do `interact()`, **os blocos `def` são um conjunto de instruções que são executadas toda vez que se interage com um widgets**.

Os blocos `def` são trechos de códigos que tem como entrada os argumentos:

```python
def nome_do_bloco(argumento1,argumento2,argumento3,...):
   """
   Instruções do bloco
   """
```

O `interact()` associado à este bloco `def` tem a seguinte notação:

```python
def bloco_def_associado(argumento1,argumento2,argumento3,...):
   # Bloco 1 (Nível 1)
   """
   Instruções do bloco
   """
# Bloco principal (Nível 0)
interact(bloco_def_associado,argumento1=val1,argumento2=val2,...)
```

Observe que o `ìnteract()` está no nível 0 e o conteúdo do bloco `def` está no nível 1.

Para exemplificar o conceito de `interact()` e blocos `def` veja o exemplo abaixo:

> ```python
> # Bloco principal (Nível 0)
> from ipywidgets import interact
> def f(x):
>   # Bloco 1 (Nível 1)
>   print("O valor de x é {:d}".format(x))
> # Bloco principal (Nível 1)
> interact(f,#Bloco def que se deseja associar
> x=5 #Valor ou widget
> )
> ```
>
> <p>
> x  
> <input type="range" min="-5" max="15" value="5" class="slider" id="slider-B">
> <span id="val-B"></span><br>
> O valor de x é 5<br>
> &lt;function __main__.f(x)&gt;
> </p>
> <script>
> var sliderB = document.getElementById("slider-B");
> var outputB = document.getElementById("val-B");
> outputB.innerHTML = sliderB.value;
> sliderB.oninput = function() {
> outputB.innerHTML = (this.value).toString();
> }
> </script>

Observe também foi imprimido um valor indesejado:

```
<function __main__.f(x)>
```

Isso aconteceu porque a função interact retorna o tipo da função `<function __main__.f(x)>`. Desta forma, a função foi salva na variável `_` e imprimida na tela. Veja o que acontece quando mandamos imprimir `_`.

> ```python
> _
> ```
>
> <function \_\_main\_\_.f(x)>

Podemos remover essa saída adicionando `;` ao final da instrução `ìnteract()`, assim suprimimos a saída.

> ```python
> # Bloco principal (Nível 0)
> from ipywidgets import interact
> def f(x):
>    # Bloco 1 (Nível 0)
>    print("O valor de x é {}".format(x))
> # Bloco principal (Nível 0)
> interact(f,x=5);
> ```
>
> <p>
> x  
> <input type="range" min="-5" max="15" value="5" class="slider" id="slider-C">
> <span id="val-C"></span><br>
> O valor de x é 5
> </p>
>
>
> <script>
> var sliderC = document.getElementById("slider-C");
> var outputC = document.getElementById("val-C");
> outputC.innerHTML = sliderC.value;
> sliderC.oninput = function() {
> outputC.innerHTML = (this.value).toString();
> }
> </script>

**Tarefa:** O tipo de Widget criado pela função `ìnteract()` depende do tipo de entrada. Repita o exemplo anterior considerando:

- `x=2.0`
- `x=1`
- `x=True`
- `x=""`
- `x="Digite o seu nome"`

### Exemplo 2: Utilizando a notação `@interact`

Podemos simplificar ainda mais o uso de widgets ao utilizar a notação `@interact`. Vamos refazer o exemplo anterior:

> ```python
> from ipywidgets import interact
> @interact(x=5)
> def f(x):
>     return print("O valor de x é {}.".format(x))
> ```
>
> <p>
> x  
> <input type="range" min="-5" max="15" value="5" class="slider" id="slider-XC">
> <span id="val-XC"></span><br>
> O valor de x é 5
> </p>
>
> <script>
> var sliderXC = document.getElementById("slider-XC");
> var outputXC = document.getElementById("val-XC");
> outputXC.innerHTML = sliderXC.value;
> sliderXC.oninput = function() {
> 	outputXC.innerHTML = (this.value).toString();
> }
> </script>

### Exemplo 3: Abreviação  de Widgets

Quando você passa um argumento inteiro, como `5` (`x=5`) para o interact. A função cria um slider de inteiro no intervalo de $x\in[-5;3\cdot5]$. Neste caso `5` é abreviação de:

```python
IntSlider(min=-5, max=15, step=1, value=5)
```

De fato, conseguimos o mesmo resultado quando passamos o próprio `IntSlider` como valor de `x`:

> ```python
> # Bloco principal (Nível 0)
> from ipywidgets import interact
> @interact(x=widget.IntSlider(min=-5, max=15, step=1, value=5))
> def f(x):
>   # Bloco 1 (Nível 0)
>   print("O valor de x é {}".format(x))
> ```
>
> <p>
> x  
> <input type="range" min="-5" max="15" value="5" class="slider" id="slider-D">
> <span id="val-D"></span><br>
> O valor de x é 5
> </p>
>
> 
>
> <script>
> var sliderD = document.getElementById("slider-D");
> var outputD = document.getElementById("val-D");
> outputD.innerHTML = sliderD.value;
> sliderD.oninput = function() {
> outputD.innerHTML = (this.value).toString();
> }
> </script>

A tabela abaixo mostra os diferentes tipos de argumentos:

| Argumento                                                  | Widget      |
| ---------------------------------------------------------- | ----------- |
| Valor booleano: `True` ou `False`                          | Checkbox    |
| String: `"Uma frase"` ou `""`                              | Text        |
| Inteiro: `valor`, `(min,max)` ou `(min,max,passo)`         | IntSlider   |
| Ponto flutuante: `valor`, `(min,max)` ou `(min,max,passo)` | FloatSlider |

Se o segundo parâmetro de `interact()` for passado como `x=(min,max)`  é produzido um slider com um valor mínimo e máximo com os respectivos valores de `min` e `max`. O valor do passo é por padrão `1` e o valor inicial é o meio do intervalo (Considerando o passo).

Por exemplo:

> ```python
> # Bloco principal (Nível 0)
> from ipywidgets import interact
> @interact(x=(0,10)) #widget.IntSlider(min=0, max=10)
> def f(x):
>   # Bloco 1 (Nível 0)
>   print("O valor de x é {}".format(x))
> ```
>
> <p>
> x  
> <input type="range" min="0" max="10" value="5" class="slider" id="slider-F">
> <span id="val-F"></span><br>
> O valor de x é 5
> </p>
>
>
> <script>
> var sliderF = document.getElementById("slider-F");
> var outputF = document.getElementById("val-F");
> outputF.innerHTML = sliderF.value;
> sliderF.oninput = function() {
> outputF.innerHTML = (this.value).toString();
> }
> </script>

E se o segundo parâmetro for passado como `x=(min,max,passo)` irá produzir um slider com o valor mínimo, máximo e o passo definido:

> ```python
> # Bloco principal (Nível 0)
> from ipywidgets import interact
> def f(x):
>    # Bloco 1 (Nível 0)
>    print("O valor de x é {}".format(x))
> # Bloco principal (Nível 0)
> interact(f,x=(0.0,10.0,0.5)); #widget.FloatSlider(min=0.0, max=10.0,step=0.5)
> ```
>
> <p>
> x  
> <input type="range" min="0" max="100" value="50" class="slider" id="slider-H">
> <span id="val-H"></span><br>
> O valor de x é 5.0
> </p>
>
>
> <script>
> var sliderH = document.getElementById("slider-H");
> var outputH = document.getElementById("val-H");
> outputH.innerHTML = (sliderH.value/10).toFixed(2);
> sliderH.oninput = function() {
> outputH.innerHTML = ((this.value)/10).toFixed(2);
> }
> </script>

**Tarefa:** Crie um programa capaz de calcular a área, $A$, e o volume, $V$ de uma esfera. Considere as equações abaixo para fazer o cálculo:
$$
A=4\pi r^2
$$

$$
V=\frac{4}{3}\pi r^3
$$

O programa deve ter como entrada o raio $r$, que deve ser representado na forma de FloatSlider com valor mínimo de 1, máximo de 10 e passo de 0,1.

A saída deve ser:

<p>
r  
<input type="range" min="0" max="100" value="50" class="slider" id="slider-W">
<span id="val-W"></span><br>
Com o raio de 5 m a área da esfera é 314.16 m² e o volume é 523.60 m³.
</p>

<script>
var sliderW = document.getElementById("slider-W");
var outputW = document.getElementById("val-W");
outputW.innerHTML = (sliderW.value/10).toFixed(2);
sliderW.oninput = function() {
outputW.innerHTML = (this.value/10).toFixed(2);
}
</script>

### Exemplo 3: Widgets e gráficos

Ao utilizar o `iteract()` podemos criar gráficos que atualizam em tempo real. Para exemplificar vamos criar um gráfico de uma espiral e interagir com ele.

<!---

> Gustavo dá uma aula sobre Espiriais e equações paramétricas​ (Pode dá o exemplo da elipse)

--->

m coordenadas cartesianas as espirais devem utilizar equações paramétricas. A forma geral das espirais no plano cartesiano é:
$$
h(\theta)=\begin{cases}
	x(\theta)=\theta^n\cdot \cos(\theta)\\
	y(\theta)=\theta^n\cdot \sin(\theta)
\end{cases}
$$
Vamos plotar o gráfico de $h(\theta)$ utilizando a função `plot_parametric()` do pacote `sympy` (Figura 1):

```mermaid
classDiagram
	sympy .. plotting
	class sympy{
		pi
		symbols()
		cos()
		sin()
	}
	class plotting{
		plot()
		plot_parametric()
	}
```

> **Figura 1:** Funções do pacote `sympy` que iremos utilizar nesse capítulo.

O programa irá identificar se o figura geométrica é um círculo ou uma espiral e irá mostrar o valor de $n$ da espiral.

Abaixo segue o código do programa. Tente executá-lo.

> ```python
> from sympy import symbols, sin, cos, pi #Importando symbols, sin, cos e pi
> from sympy.plotting import plot_parametric #Importando plot_parametric
> style.use('seaborn-whitegrid')
> 
> def plotando_espiral(n):
>     theta = symbols('θ')
>     x = theta**n*sin(theta)
>     y = theta**n*cos(theta)
>     if n==0:
>         título='Cículo'
>     else:
>         título="Espiral com n={:.2f}".format(n)
>     plot_parametric(x,y,(theta,0,10*pi),
>           xlim=(-8,8.04),
>           ylim=(-8.06*3/4,8*3/4),
>           title=título,
>           xlabel="",
>           ylabel="")
> interact(plotando_espiral,n=(-2,2.0,0.1));
> ```
>
> aa

