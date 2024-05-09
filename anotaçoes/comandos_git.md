
A imagem abaixo mostra alguns comandos

![captura.git1.png](./imagens/Capturar.git1.png)


# Lista de comandos git

# git init

O comando `git init` é o primeiro passo para começar a usar o Git em um novo projeto ou em um projeto existente. Ele cria a estrutura necessária para o controle de versão e prepara o caminho para que você possa começar a fazer commits e gerenciar as alterações no seu código. 

Aqui estão os principais pontos sobre o `git init`:

1. **Iniciar um Repositório Git**:
   - Ao executar `git init`, um novo repositório Git vazio é criado no diretório atual.
   - Isso significa que você pode começar a rastrear as alterações nos arquivos, controlar diferentes versões e colaborar com outros desenvolvedores de forma eficiente.

2. **Como Utilizar o `git init`**:
   - Abra o terminal e navegue até o diretório raiz do seu projeto.
   - Execute o comando `git init` para iniciar o repositório Git.
   - Agora, seu diretório é um repositório Git local.

3. **Estrutura do Repositório**:
   - Após a execução do `git init`, o Git cria uma subpasta oculta chamada `.git` no diretório atual.
   - Essa pasta contém todos os metadados, histórico de versões e informações sobre as ramificações do projeto.

4. **Próximos Passos**:
   - Depois de inicializar um novo repositório Git, você pode:
     - Adicionar arquivos ao controle de versão usando `git add <arquivo>`.
     - Criar um commit com `git commit -m "<mensagem>"`.
     - Explorar o histórico de commits com `git log`.

O `git init` é essencial para começar a usar o Git e manter o controle de versão dos seus projetos.

Em conclusão, o git init é o ponto de partida para o controle de versão em um projeto Git. Ou seja, ao utilizá-lo, criamos um repositório Git local e podemos aproveitar todos os recursos do Git para controlar e rastrear as versões dos arquivos, explorar o histórico, criar ramificações e colaborar com outros desenvolvedores.




# git status

O comando git status exibe as condições do diretório de trabalho e da área de staging. Ele permite que você veja quais alterações foram despreparadas, quais não foram e quais arquivos não estão sendo monitorados pelo Git. Os resultados de status não exibem qualquer informação sobre o histórico de projetos que recebeu commit. O comando confere o status e reporta que não existe nada para fazer um commit, o que quer dizer que o repositório está com o atual estado do diretório de trabalho e não existem modificações a serem gravadas.

# git branch

O comando **`git branch`** é uma ferramenta versátil em nossa caixa de ferramentas de desenvolvimento. Ele nos ajuda a criar, experimentar e organizar nossos projetos de forma eficiente. Vamos explorar o que ele faz:

1. **Criar ramificações**: O comando `git branch` permite criar novas ramificações no seu repositório Git. Essas ramificações são como linhas isoladas de desenvolvimento, onde você pode trabalhar em novas funcionalidades ou correções de bugs sem afetar a ramificação principal (geralmente chamada de "main" ou "master").

2. **Listar ramificações**: Você pode usar `git branch` para listar todas as ramificações existentes no seu projeto. Isso ajuda a visualizar o histórico de desenvolvimento e ver quais recursos estão sendo trabalhados.

3. **Renomear ramificações**: Se você precisar renomear uma ramificação, o `git branch` também permite fazer isso. Por exemplo, se você deseja mudar o nome de uma ramificação de "feature-x" para "nova-funcionalidade", pode usar esse comando.

4. **Excluir ramificações**: Quando uma ramificação não é mais necessária, você pode excluí-la com `git branch -d nome-da-ramificação`. Isso ajuda a manter seu repositório limpo e organizado.

Lembre-se de que o `git branch` não permite alternar entre as ramificações ou reunir um histórico bifurcado novamente. Para alternar entre as ramificações, use o comando `git checkout`, e para mesclar alterações de uma ramificação para outra, use `git merge`⁴⁵⁶.

Em resumo, o `git branch` é uma ferramenta essencial para gerenciar o fluxo de trabalho do Git e manter seu código organizado! 🌟




# git config

O comando `git config` é utilizado no sistema de controle de versão Git para configurar opções específicas do usuário, repositório ou sistema¹. Ele permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o Git aparece e opera. Aqui estão algumas das principais funcionalidades do `git config`:

1. **Configuração de Identidade:**
   - A primeira coisa que você deve fazer ao instalar o Git é configurar seu nome de usuário e endereço de e-mail. Isso é importante porque cada commit usa essa informação, e ela é carimbada de forma imutável nos commits que você cria. Para configurar sua identidade, use os seguintes comandos:
     ```
     $ git config --global user.name "Seu Nome"
     $ git config --global user.email seu@email.com
     ```
     Lembre-se de substituir "Seu Nome" e "seu@email.com" pelos valores corretos.

2. **Configuração do Editor de Texto:**
   - O Git permite escolher o editor de texto padrão que será chamado quando você precisar inserir uma mensagem de commit. Se você não configurar um editor, o Git usará o padrão (geralmente o Vim). Para definir um editor diferente, use o seguinte comando:
     ```
     $ git config --global core.editor nome_do_editor
     ```
     Substitua "nome_do_editor" pelo nome do editor de sua preferência (por exemplo, "emacs" ou "nano").

3. **Níveis de Configuração:**
   - As variáveis de configuração podem ser armazenadas em três lugares diferentes:
     - `/etc/gitconfig`: válido para todos os usuários no sistema e todos os repositórios.
     - `~/.gitconfig` ou `~/.config/git/config`: Somente para o seu usuário. Use a opção `--global` para ler e escrever neste arquivo.
     - `.git/config` no diretório de qualquer repositório específico: específico para esse repositório.

Lembre-se de que você só precisa configurar essas opções uma vez, a menos que deseje substituí-las para projetos específicos¹².



# git add

O comando git add é uma parte fundamental do sistema de controle de versão Git. Ele é usado para adicionar alterações de arquivos no diretório de trabalho ao índice do Git, também conhecido como área de staging. Isso prepara as alterações para serem incluídas no próximo commit1.

Aqui está um resumo do que o comando faz:

Adiciona arquivos novos ou modificados ao índice.
Prepara os arquivos para que suas alterações sejam comitadas.
Pode ser usado para adicionar partes específicas de um arquivo modificado ao índice.
Permite que você verifique quais alterações estão prontas para serem comitadas usando o comando git status.
Por exemplo, se você modificou um arquivo chamado example.txt e quer prepará-lo para commit, você usaria:

git add example.txt

Se quiser adicionar todas as alterações no diretório atual, você usaria:

git add .

Lembre-se de que o git add não afeta o repositório remoto. As alterações só serão enviadas para o repositório remoto após você comitar as alterações com git commit e então enviar esses commits com git push.

# git log

 ## comando para vizualizar commit como mostra o exemplo abaixo.

 O comando git log é usado para explorar o histórico de um repositório. Ele mostra todo o histórico de commits usando a formatação padrão. O comando exibe diversas informações, incluindo um hash do commit, uma identificação única de cada commit. Com o git log, é possível ver todo o histórico do projeto pelo log, quem fez um commit, quando ele foi feito, entre outras coisas.


![imagem commit](./imagens/imagem%20commit.PNG)



# git rm 

O comando `git rm` é usado para **remover arquivos de um repositório Git**. Ele pode ser considerado como o inverso do comando `git add`. Vamos dar uma olhada mais detalhada:

- **Visão geral do `git rm`**:
  - O `git rm` pode ser usado para remover arquivos individuais ou uma coleção de arquivos.
  - Sua principal função é **remover arquivos rastreados do índice de Git**.
  - Também pode ser usado para remover arquivos do índice de staging e do diretório de trabalho.
  - **Não é possível remover um arquivo de apenas um diretório de trabalho**; os arquivos sendo operados devem ser idênticos aos arquivos no HEAD atual.
  - Se houver diferença entre a versão do HEAD de um arquivo e a versão do índice de staging ou da árvore de trabalho, o Git bloqueará a remoção como mecanismo de segurança para evitar a perda de mudanças em progresso.
  - **Observe que o `git rm` não remove as ramificações**.
- **Uso**:
  - `git rm <file>`: Especifica os arquivos a serem removidos. O valor da opção pode ser um arquivo individual ou uma lista de arquivos delimitada por espaços (por exemplo, `file1 file2 file3`) ou um glob de arquivo curinga (por exemplo, `~./directory/*`).
  - `-f` ou `--force`: Substitui a verificação de segurança que o Git faz para garantir que os arquivos no HEAD correspondam ao conteúdo atual no índice de staging e no diretório de trabalho.
  - `-n` ou `--dry-run`: Executa o comando `git rm`, mas não exclui efetivamente os arquivos. Exibe quais arquivos seriam removidos.
  - `-r`: Abreviação para "recursive". Remove o diretório alvo e todos os seus conteúdos.
  - `--`: Usada para fazer distinção explícita entre uma lista de nomes de arquivos e os argumentos transmitidos ao `git rm`.
  - `--cached`: Remove apenas do índice de staging, mantendo os arquivos no diretório de trabalho.
  - `--ignore-unmatch`: Fecha com o status sigterm 0, mesmo se nenhum arquivo corresponder. Útil em scripts de shell maiores.
  - `-q` ou `--quiet`: Oculta o resultado do comando `git rm`.

Lembre-se de que a execução do `git rm` não é uma atualização permanente. As mudanças só persistirão após a criação de um novo commit e a adição dessas mudanças ao histórico de commits¹². Espero que isso esclareça o uso desse comando! 😊



# git checkout

O comando `git checkout` é uma ferramenta essencial no Git e serve para **alternar entre versões diferentes de arquivos, commits ou ramificações**. Vamos explorar os principais usos desse comando:

1. **Alternar entre Ramificações (Branches):**
   - Quando você está trabalhando em um repositório Git que contém várias ramificações, o `git checkout` permite que você mude de uma ramificação para outra.
   - Por exemplo, se você tem as ramificações `main`, `feature_inprogress_branch` e `another_branch`, pode alternar para a ramificação `feature_inprogress_branch` usando o seguinte comando:
     ```
     $ git branch
     main
     another_branch
     feature_inprogress_branch
     $ git checkout feature_inprogress_branch
     ```
   - Isso atualiza os arquivos no diretório atual para corresponder à versão armazenada na ramificação selecionada e permite que você trabalhe nessa linha de desenvolvimento específica⁴.

2. **Criar Novas Ramificações:**
   - O `git checkout` também funciona em conjunto com o `git branch` para criar novas ramificações.
   - Para criar uma nova ramificação chamada `new_branch` a partir da ramificação `main`, você pode fazer o seguinte:
     ```
     $ git branch new_branch
     $ git checkout new_branch
     ```
   - Agora você está trabalhando na nova ramificação e pode fazer alterações sem afetar a `main`⁴.

3. **Restaurar Arquivos:**
   - Se você deseja restaurar um arquivo específico para a versão mais recente do commit ou da ramificação, pode usar o `git checkout`.
   - Por exemplo, para restaurar o arquivo `meu_arquivo.txt` para a versão mais recente da ramificação atual, execute:
     ```
     $ git checkout meu_arquivo.txt
     ```
   - Isso descarta quaisquer alterações não confirmadas no arquivo e o restaura para o estado mais recente⁶.

Em resumo, o `git checkout` é uma ferramenta versátil que permite alternar entre ramificações, criar novas ramificações e restaurar arquivos. Use-o conforme necessário para gerenciar seu fluxo de trabalho no Git!



# Referencias Plataformas

 [github](https://github.com/)

 plataforma que permite o acesso remoto do repositorio 

 [gitlab](https://about.gitlab.com/)

[bitbuck](https://www.bitbuckt.org)


# git commit

git commit: Este comando é usado para salvar as alterações que você fez no seu repositório local. É como um ponto de salvamento que registra o estado atual do seu projeto. Cada commit deve ter uma mensagem associada que descreve o que foi alterado. Esses commits são armazenados no histórico do seu repositório local e podem ser visualizados com o comando git log. Você pode ter vários commits antes de decidir enviar essas alterações para um repositório remoto.

# git push

git push: Depois de fazer um ou mais commits, você usa git push para enviar essas alterações para o repositório remoto. Esse comando atualiza o repositório remoto com os commits que você fez localmente. Se outras pessoas estiverem trabalhando no mesmo projeto, elas poderão ver suas alterações após um push. É importante notar que cada novo commit local requer um novo push para sincronizar com o repositório remoto
