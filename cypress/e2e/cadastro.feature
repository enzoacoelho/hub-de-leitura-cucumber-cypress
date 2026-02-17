# language: pt
Funcionalidade: Cadastro no Hub de Leitura

 
  Contexto:
    Dado que acesso a tela de cadastro do Hub de Leitura 


  Cenário: Cadastro com sucesso 
    Quando eu preencho todos os campos obrigatórios com dados válidos
    Então o sistema deve exibir a mensagem de cadastro "Conta criada com sucesso! Fazendo login..."
    E devo ser redirecionado para o dashboard
    E o sistema deve exibir a saudação personalizada com o meu nome

    Cenário: Validar tentativa de cadastro com email já existente
    Quando eu tento me cadastrar com um email já existente 
    Então o sistema deve exibir a mensagem "Erro ao criar conta. Tente novamente."
    
    
    Cenário: Validação de senha e confirmar senha diferentes 
    Quando eu tento me cadastrar com senha e confirmar senha diferentes 
    Então o sistema deve alertar abaixo do campo senha "Senhas não coincidem"

    
    Cenário: Validação de tentativa de cadastro com campos obrigatórios vazios
    Quando eu tento me cadastrar com campos obrigatórios vazios
    Então o sistema deve exibir a mensagem "Nome deve ter pelo menos 2 caracteres" e "Email válido é obrigatório"
    E os campos de senha e termos obrigatórios devem ficar inválidos


    Cenário: Validação de tentativa de cadastro com e-mail no formato inválido
    Quando eu tento me cadastrar com um email no formato inválido
    Então o sistema deve alertar no campo e-mail "Email válido é obrigatório"
    

