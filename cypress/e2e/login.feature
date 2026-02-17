# language: pt
Funcionalidade: Login no Hub de Leitura


  Contexto:
    Dado que acesso a tela de login

  Cenário: Login com sucesso como Administrador
    Quando eu tento logar com o usuário "admin"
    Então devo ser autenticado com sucesso
    E o sistema deve exibir o Painel Administrativo

    Cenário: Login com sucesso como usuário padrão
    Quando eu tento logar com o usuário "padrão"
    Então devo ser autenticado com sucesso
    E o sistema deve exibir Olá, usuário padrão!
    
    Cenário: Login sem sucesso com campo senha vazio
    Quando eu tento logar com o e-mail "admin@biblioteca.com" e a senha vazia
    Então não devo ser autenticado
    E o campo de senha deve ser destacado com erro

    Cenário: Login sem sucesso com senha inválida
    Quando eu tento logar com o usuário "admin" mas com a senha "errada123"
    Então não devo ser autenticado
    E o sistema deve exibir a mensagem "Email ou senha incorretos."

