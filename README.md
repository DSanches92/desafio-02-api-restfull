### Regras da aplicação

### RF
- [ ] Deve ser possível criar um usuário
- [ ] Deve ser possível identificar o usuário entre as requisições
- [ ] Deve ser possível registrar uma refeição feita
- [ ] Deve ser possível editar uma refeição
- [ ] Deve ser possível apagar uma refeição
- [ ] Deve ser possível listar todas as refeições de um usuário
- [ ] Deve ser possível visualizar uma única refeição
- [ ] Deve ser possível visualizar o total de refeições registradas
- [ ] Deve ser possível visualizar o total de refeições dentro da dieta
- [ ] Deve ser possível visualizar o total de refeições fora da dieta
- [ ] Deve ser possível visualizar a sequência de refeições dentro da dieta

### RN
- O usuário só pode visualizar, editar e apagar as refeições o qual ele criou
- O usuário pode alterar todos os campos de um refeição, exceto campos chaves e FKs

### Tabela no banco de dados
  - A refeição deve conter os campos
    - ID { id: string }
    - Nome { name: string }
    - Descrição { description: string }
    - Data e Hora { created_at: Date }
    - Está dentro ou não da dieta { in_diet: number }
    - Usuário { user_id: string, FK user(id) }

  - O Usuário deve conter os campos
    - ID { id: string }
    - Nome { name: string }
    - Data e Hora { created_at: Date }
