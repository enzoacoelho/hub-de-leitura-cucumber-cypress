            # language: pt
            Funcionalidade: Cadastro no Hub de Leitura


            Contexto:
            Dado que acesso a tela de cadastro do Hub de Leitura


            Cenário: Cadastro com sucesso
            Quando eu preencho todos os campos obrigatórios com dados válidos
            Então o sistema deve exibir a mensagem de cadastro "Conta criada com sucesso! Fazendo login..."
            E devo ser redirecionado para o dashboard
            E o sistema deve exibir a saudação personalizada com o meu nome

            Esquema do Cenário: Validação de tentativa de cadastro com dados inválidos
            Quando eu tento me cadastrar com "<cenario_invalido>"
            Então o sistema deve exibir a <mensagem_erro> no cadastro
            E os "<campos_relacionados>" devem ser marcados como inválidos

            Exemplos:
            | cenario_invalido                   | mensagem_erro                           | campos_relacionados        |
            | email já existente                 | "Erro ao criar conta. Tente novamente." | nao_invalido               |
            | senha e confirmar senha diferentes | "Senhas não coincidem"                  | fica_invalido_senhas       |
            | campos obrigatórios vazios         | "Nome deve ter pelo menos 2 caracteres" | fica_invalido_obrigatorios |
            | email em formato inválido          | "Email válido é obrigatório"            | nao_invalido               |


