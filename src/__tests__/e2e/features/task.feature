Feature: Gestao de tarefas

   Manipulação da tarefas

    Scenario: Adiciona uma tarefa a lista

    Variant: Adiciona uma tarefas ao clicar em Adicionar
      Given that I am in the [Lista de tarefas]
      When I fill <#inputtask2> with "tarefa teste"
        And I click on <#btnAdicionar>
      Then I see "tarefa teste"

    Scenario: Adiciona e deleta uma tarefa

      Variant: Deleta uma tarefa apos adiciona-la a lista
      Given that I am in the [Lista de tarefas]
      When I fill <#inputtask2> with "tarefa teste"
        And I click on <#btnAdicionar>
      Then I see "tarefa teste"
      Then I click on <#btnDelete>
      Then I accept the confirmation
      Then I not see "tarefa teste"

    Scenario: Adiciona e renomeia uma tarefa

      Variant: Renomeia uma tarefa apos adiciona-la a lista
      Given that I am in the [Lista de tarefas]
      When I fill <#inputtask2> with "tarefa teste"
        And I click on <#btnAdicionar>
      Then I see "tarefa teste"
      Then I click on <#btnEdit>
      Then I see <#btnCancelarEdicao>
      Then I fill <#inputtask2> with "novo"
      Then I click on <#btnAdicionar>
      Then I see "novo"
      Then I wait 3

    Scenario: Adiciona uma tarefa e seta como pronto

      Variant: Seta como pronto a tarefa recem adicionada
      Given that I am in the [Lista de tarefas]
      When I fill <#inputtask2> with "tarefa teste"
        And I click on <#btnAdicionar>
      Then I see "Não"
      Then I see "tarefa teste"
      Then I click on <#btnDone>
      Then I see "Sim"

Constants:
  - "Lista de tarefas" is "http://localhost:4200/"
