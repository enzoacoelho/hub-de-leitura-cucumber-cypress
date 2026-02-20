      # language: pt
      Funcionalidade: Login no Hub de Leitura


      Contexto:
      Dado que acesso a tela de login

      Esquema do Cenário: Login com sucesso como Administrador e Usuário Padrão
      Quando eu tento logar como "<tipo_usuario>"
      Então devo ser autenticado com sucesso
      E o sistema deve exibir "<mensagem_welcome>" e "<nome_usuario>" na página inicial e menu do topo

      Exemplos:
      | tipo_usuario | nome_usuario        | mensagem_welcome      |
      | admin        | Bibliotecário Admin | Painel Administrativo |
      | padrao       | Usuário Padrão      | Olá, Usuário Padrão!  |


      Esquema do Cenário: Login sem sucesso por credenciais inválidas
      Quando eu tento logar com o usuário "<usuario>" e a senha "<senha>"
      Então não devo ser autenticado
      E o sistema deve exibir a mensagem "<mensagem_erro>"
      

      Exemplos:
      | usuario              | senha        | mensagem_erro                      | 
      | admin@biblioteca.com |              |                                    | 
      | admin@biblioteca.com | errada123    | Email ou senha incorretos.         | 
      |                      | admin123     | Por favor, insira um email válido. | 
      | usuario@teste.com    |              |                                    | 
      | usuario@teste.com    | errada@teste | Email ou senha incorretos.         | 
      |                      | user123      | Por favor, insira um email válido. | 



