<center><div style="font-size:32px;display:inline-block;line-height:1.1;font-weight:bold;margin:0 0 15px" class="aula-title">Capítulo 9: Saída Markdown do IPython</div></center>

# Atividade 1: Introdução à saída Markdown

Nos capítulos anteriores vimos que o `print()` é a principal função de impressão do Python, mas não é a única. Neste capítulo será introduzido as saídas do **IPython**.

A saída IPython é muito rica, com ela podemos mostrar:

- Audio
- Videos (Inclusive do Youtube)
- Videos do Youtube
- LaTeX
- Equações
- HTML (E código JavaScript)
- Figuras
- Sites (IFrame)
- Markdown
- Dentre outros

Mais detalhes podem ser vistos na [documentação](https://ipython.org/ipython-doc/dev/api/generated/IPython.display.html).

### Exemplo 1: Saídas do Ipython

Veja alguns exemplos:

> ```python
> # Importando o IPython.display
> import IPython.display as ipy
> ```

**Audio:**

>```python
># Posso reproduzir um audio qualquer no meu notebook
>ipy.Audio(url="http://www.w3schools.com/html/horse.ogg")
>```
>
><p>
><audio controls>  
><source src="http://www.w3schools.com/html/horse.ogg" type="audio/ogg">
></audio>
>    </p>


**Imagem:**

> ```python
> # Posso mostrar imagens no meu notebook
> ipy.Image(url='http://www.google.fr/images/srpr/logo3w.png')
> ```
>
> <p><img src="http://www.google.fr/images/srpr/logo3w.png"/></p>

**Youtube:**

> ```python
> # Para colocar um vídeo basta colocar o código do vídeo
> ipy.YouTubeVideo('4Ifma_3ZB24')
> ```
>
> <p>
> <iframe width="400" height="300" src="https://www.youtube.com/embed/4Ifma_3ZB24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
> </p>

**Código HTML (Linguagem da Web):**

> ```python
> ipy.HTML('<p style="color:blue">Um texto azul em HTML.</p>')
> ```
> 
> <p style="color:blue">Um texto azul em HTML</p>

**Um site (IFrame):**

> ```python
> # Podemos colocar um IFrame, que de forma simplificada é uma página web incorporada ao Notebook
> ipy.IFrame(src="https://cursopythonufac.github.io/", width=400, height=300)
> ```
>
> <p><iframe src="https://cursopythonufac.github.io/" width=400 height=300></iframe></p>

### Exemplo 2: Função Markdown

Embora o IPython tenha várias saídas, neste capítulo vamos focar na saída Markdown. Afinal o Markdown permite inserir vários elementos, como imagens, tabelas, equações, código HTML, e você já está acostumado com a notação desta linguagem. Vamos começar com um exemplo simples:

> ```python
> TextoEmMarkdown="Este texto está em _itálico_ e este em **negrito**."
> 
> ipy.Markdown(TextoEmMarkdown)
> ```
>
> Este texto está em *itálico* e este em **negrito**.

Observe que todas as vezes que digitamos as saídas Markdown sempre apareceu aquele número em colchetes que fica do lado esquerdo da célula (Exemplo `[12]:`). Para eliminar isso basta chamar a função `ipy.Markdown()` dentro da função `display()`. Veja abaixo:

> ```python
> TextoEmMarkdown="Este texto está em _itálico_ e este em **negrito**."
> 
> display(ipy.Markdown(TextoEmMarkdown))
> ```
>
> Este texto está em *itálico* e este em **negrito**.

Ao invés de digitar `display(ipy.Markdown(TextoEmMarkdown))` toda vez que queremos executar um código em Markdown, podemos simplificar tudo através da função abaixo:

> ```python
> ## Função md
> 
> def md(Texto):
>     display(ipy.Markdown(Texto))
> ```
>
> ```python
> # Código
> md(TextoEmMarkdown)
> ```
>
> Este texto está em *itálico* e este em **negrito**.

Agora só precisaremos utilizar a função `md()` para executar qualquer coisa em Markdown.

### Exemplo 3: Markdown com multi-linha

Vimos nos primeiros capítulos como escrever strings multi-linhas. Quando queremos escrever textos longos  através da saída do IPython utilizar a notação multi-linha é util. Veja como podemos fazer uma lista de compras em Markdown:

> ```python
> md("""
> **Lista de compras:**
> 
> - Maça
> - Banana
> - Leite
> - Queijo
> """)
> ```
>
> **Lista de compras:**
>
> <ul style="margin-left:40px;margin-top:-20px">  
>        <li>Maça</li> 
>        <li>Banana</li> 
>        <li>Leite</li> 
>        <li>Queijo</li> 
> </ul>

### Exemplo 4: Markdown e interação com o usuário

Podemos combinar os poderosos Widgets com a saída Markdown para criar exemplos mais interessantes. Primeiramente vamos importar as bibliotecas necessárias:

> ```python
> # Importando os módulos de widgets
> import ipywidgets as widget
> import ipywidgets as widgets
> from ipywidgets import interact
> ```

Agora vamos **praticar** os **métodos de string** . 

O primeiro deles é o método `.splitlines()` . Ele quebra cada linha de uma string em um elemento de uma lista. Para entender como funciona veja o exemplo abaixo:

> ```python
> md("Escreva a sua lista de compras abaixo:")
> @interact(Lista=widget.Textarea(
>     description="Lista: ",             
>     placeholder='Separe os itens por quebra linha.')
> )
> def Lista_Saída(Lista):
>     if Lista: #Verifica se a string não é vazia 
>         ListaVec=Lista.splitlines() # Quebrando a string por linha (Lista.split('\n'))
>         display(ListaVec)
> ```
>
> ![Exemplo do método splitlines](images/lista_simples_1.gif)

Vamos substituir a linha `display(ListaVec)` por uma saída Markdown de lista não ordenada. Desta vez, **toda vez que o usuário digitar algo alfabético (excluindo os espaços)** o programa irá considerar como um item da lista. 

Para remover os espaços vamos utilizar **o método `.replace(' ','')`** que remove os espaços da linha.

> ```python
> md("Escreva a sua lista de compras abaixo:")
> @interact(Lista=widget.Textarea(
>     description="Lista: ",             
>     placeholder='Separe os itens por quebra linha.')
> )
> def Lista_Saída(Lista):
>     if Lista: #Verifica se a string não é vazia
>         ListaVec=Lista.splitlines() # Quebrando a string em uma lista
> 
>         saídaLista="Saída da lista de compras:\n" # Criando um acomulador:
>         for Item in ListaVec:
>             # Verifica se o item que o usuário digitou é alfabético (Sem espaços)
>             if Item.replace(' ','').isalpha():
>                 saídaLista+='- {}\n'.format(Item)  
>         md(saídaLista)
> ```
>
> ![Método replace](images/lista_md.gif)

Vamos permitir que o usuário possa digitar o preço da mercadoria através da seguinte notação

> `Item - preço`

Para isso vamos quebrar cada linha utilizando o **método `.split()`** . Veja o que acontece quando utilizamos este método:

> ```python
> md("Escreva a sua lista de compras abaixo:")
> @interact(Lista=widget.Textarea(
>     description="Lista: ",             
>     placeholder='Escreva Item - Preço.')
> )
> def Lista_Saída(Lista):
>     if Lista:
>         ListaVec=Lista.splitlines()
>         for Item in ListaVec:
>             #Utilizando o método split quebramos cada linha em duas partes
>             Item = Item.split(' - ') 
>             display(Item)
> ```
>
> ![Exemplo do método split](images/metodo_split.gif)

