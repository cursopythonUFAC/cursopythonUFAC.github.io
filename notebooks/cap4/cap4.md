<center><div style="font-size:32px;display:inline-block;line-height:1.1;font-weight:bold;margin:0 0 15px" class="aula-title">Capítulo 4: Estruturas de decisão</div></center>

# Atividade 1: Extensões do Jupyter

Enquanto os módulos e pacotes permitem adicionar funcionalidades ao Python, as extensões permitem adicionar funcionalides ao Jupyter Lab (Ou Jupyter Notebook).

Para instalar as extensões podemos ir no Menu lateral do Jupyter e clicar no ícone em formato de uma peça de quebra cabeças:

![Menu de extensões](images/Menu_de_extensoes.png) 

Muito provavelmente as extensões do Jupyter estarão desativadas. Para ativá-las clique em **Enable**. Ao clicar no botão diversas extensões irão aparecer no menu **DISCOVER**, onde você pode pesquisar por novas extensões.

![Menu Discovery](images/menu_discovery.png)

Lá você vai encontrar opções como **área de busca** para pesquisar por extensões. O Link para o repositório (Código fonte) e um botão para instalar a extensão (Botão **Install**).

Com as extensões podemos adicionar diversas funcionalidades como:

- Widgets (Várias extensões)
- Suporte ao LaTeX (`@jupyter-widgets/jupyterlab-manager`)
- Criação de diagrama de blocos (`jupyterlab-drawio`)

### Exemplo 1: Instalando a primeira extensão

Muitas extensões tem dependências, portanto, caso você não tenha todas dependências instaladas irá aparecer um aviso de erro. A Figura abaixo mostra o que acontece se você **tentar instalar a extensão `@jupyterlab/toc`**. 

![image-20201018161650128](images/Mensagem_de_erro.png)

Nela basicamente diz que eu não tenho instalado na minha máquina o `Node.js`.  

**Entre no respositório da extensão `jupyterlab-toc`**:

![image-20201018165341621](images/repositorio_jupyter_toc_prerequisitos.png)

Descendo para **Prerequisitos** veremos que para essa extensão funcionar precisamos do **JupterLab** e do **NodeJS**. O JupyterLab já temos, falta o NodeJS.

Feche o Jupyter Notebook e instale a dependência `Node.js` utilizando o comando abaixo:

```bash
conda install nodejs
```

![Instalando o Nodejs](images/Instalando o nodejs.png)

Agora podemos podemos abrir o Jupyter Lab e **instalar a extensão clicando em install**. 

Depois de instalada a extenção irá aparecer na aba **Installed** e um pop-up azul apareça perguntando se você quer reconstruir (**Rebuild**) o Jupyter. Clique neste opção.

![Extensão instalada](images/extensao_instalada.png)

> **Observação:** Ao clicar em **Rebuild** pode ser que demore um pouco.

Feito isso irá aparecer uma caixa de mensagem perguntando se você quer reiniciar a página. Clique em **Reload**:

![image-20201018180357896](imgs/cap4/image-20201018180357896.png)

O Jupyter irá reiniciar e aparecerá um novo ícone no menu lateral. Clique nele e verá que agora o Jupyter Lab tem suporte à sumário. A Figura abaixo mostra o sumário do capítulo 3.

![image-20201018180543896](images/icone_toc.png)

> **Observação:**  Tente sempre instalar no ambiente do Anaconda.

Alternativamente, podemos instalar uma extensão diretamente no terminal através do comando:

```bash
jupyter labextension install [nome_da_extensão]
```

Como o nome da nossa extensão é `@jupyterlab/toc`, utilizamos o comando:

```bash
jupyter labextension install @jupyterlab/toc
```

![image-20201018165439608](images/repositorio_jupyter_toc_instalacao.png)

Assim como é recomendado no próprio repositório da extensão. 

**Tarefa:** Explore a extensão. Como eu faço para:

- Adicionar ou remover numeração aos títulos;
- Mostra ou esconder células de código na aba da extensão;
- Mostrar ou esconder células de Markdown na aba da extensão.

# Atividade 2: Bloco if

<!---

> Aqui Gustavo vai falar do IF

-->

Blocos de instrução são um conjunto de instrução que estão no mesmo nível de indentação. Até o momento sempre trabalhamos com instruções sem identação. No caso de instruções multi-linha, a indentação só é contada na primeira linha da instrução.

Por exemplo, neste código nenhuma instrução está indentada:

> ```python
> print("Instrução 1") #Início da instrução 1
> print( #Início da instrução 2
>   "Instrução 2"
> )
> 
> print( #Início da instrução 3
>  "Instrução 3"
> )
> ```
>
> Instrução 1  
> Instrução 2  
> Instrução 3

Os blocos de instrução constroem hierarquias e estas, podem ser reconhecidas visualmente, até porque, níveis hierarquicos diferentes, estarão a distâncias diferentes da margem esquerda do editor.

```python
#bloco principal (Nível 0)
#bloco principal (Nível 0)
#bloco principal (Nível 0)
   #bloco 1 (Nível 1)
   #bloco 1 (Nível 1)
   #bloco 1 (Nível 1)
       #bloco 2 (Nível 2)
       #bloco 2 (Nível 2)
       #bloco 2 (Nível 2)
       #bloco 2 (Nível 2)
    #bloco 3 (Nível 1)
    #bloco 3 (Nível 1)
    #bloco 3 (Nível 1)
#bloco principal (Nível 0)
#bloco principal (Nível 0)
#bloco principal (Nível 0)
```

### Exemplo 1: Conhecendo o `if`

O `if` uma estrutura condicional presente em todas as linguagens. Ele estabelece uma relação lógica de *"se.. então"*.  No Python apresenta a seguinte sintaxe:

```python
if teste_lógico:
    # Instruções do bloco IF
```

Veja o exemplo abaixo:

> ```python
> print("Nível 0. Este código está rente a margem do código.")
> 
> var = 10
> if(var == 10): # Se x é igual a 10 então faça
>        print("Estamos no bloco 1, isto é, a 4 espaçamentos da margem.")
>        print("Essa é a segunda linha do bloco 'if'. ")
> print("Agora, voltamos para o bloco principal do programa.")
> ```
> Digite seu CPF:  12312asd
> CPF inválido.

Podemos utilizar mais de um bloco `if` na mesma célula, como é mostrado abaixo:

> ```python
> x = int(input("Digite o valor de x:"))
> if x < 10: # Se x menor que 10 então faça
>       print('{} é menor que 10.'.format(x))
> if x == 10: # Se x igual a 10 então faça
>       print('{} é igual a 10.'.format(x))
> if x > 10: # Se x maior que 10 então faça
>       print('{} é igual a 10.'.format(x))
> ```
>
> Digite o valor de x: 20  
> 20 é igual a 10.

Podemos utilizar o `if` em conjunto com os métodos de string:

> ```python
> cpf = input('Digite seu CPF: ')
> if not cpf.isdigit():
>     print('CPF inválido.')
> ```

**Tarefa:** Crie um programa que leia como entrada uma senha:

- Caso o usuário digite uma senha menor que 8 caracteres o programa deve acusar ao usuário:

```
Sua senha deve ter pelo menos 8 caracteres.
```

- Caso usuário digite uma senha maior que 16 caracteres o programa deve acusar ao usuário:

```
Sua senha deve ter menos de 16 caracteres.
```

- Caso o usuário digite uma senha entre 8 e 16 caracteres a senha é considerada válida.

### Exemplo 2: `if` alinhados

Existe ainda o if aninhado, que seria um bloco if dentro de um bloco if maior.

> ```python
> senha = input('SENHA: ')
> if len(senha) >= 8:
>     if len(senha) <= 16:
>          print('Senha válida.')
> if len(senha) < 8:
>     print('Senha inválida.')
> ```

**Tarefa:** As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.

Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

- salários até R\$ 280,00 (incluindo): aumento de 20%;
- salários entre R\$ 280,00 e R\$ 700,00: aumento de 15%¹; 
- salários entre R\$ 700,00 e R​\$ 1500,00: aumento de 10%²;
- salários de R\$ 1500,00 em diante: aumento de 5%;


Após o aumento ser realizado, informe na tela:

- o salário antes do reajuste;
- o percentual de aumento aplicado;
- o valor do aumento;
- o novo salário, após o aumento.

¹ Utilize o `if` alinhado para o caso de salários entre R\$ 280,00 e R\$ 700,00.

² Não utilize o `if` alinhado para o caso de salários entre R\$ 700,00 e R\$ 1500,00.

### Exemplo 3: `if-else`

Vimos há pouco que `if` verifica se um estado lógico é `True` ou `False` e retorna o bloco de código correspondente. O `else` vem para tratar o estado lógico oposto ao anterior.

> ```python
> senha = input('SENHA: ')
> if (len(senha) >= 8) and (len(senha) <= 16): #Se
>     print('Senha válida')
> else: #Se não
>     print('Senha inválida')
> ```
>
> SENHA:  Macarrão_com_carne   
> Senha inválida

**Tarefa:** Peça ao usuário uma senha. Você deve verificar se ela possui de 8 carácteres até 16 e se ela é composta por números, letras e caracteres especiais. Informe ao usuário se a senha é válida ou não¹.

¹ Utilize o `if-else`.

### Exemplo 4: `elseif`

O `elif` é a junção do bloco if e else. Ele nega a condição anterior, mas inputa uma nova condição.

> ```python
> nome = 'Eva'
> age = 35
> 
> if nome == 'Eva': #Se
>     print('Oi, Eva.')
> elif age > 18: #se não se
>     print('Você não é a EVA.')
> else: #se
>     print('Você não é a Eva e nem é maior de idade.')
> ```
>
> Oi, Eva.

**Tarefa:** Refaça o exemplo das organizações Tabajara utilizando `else` e `elseif`.

