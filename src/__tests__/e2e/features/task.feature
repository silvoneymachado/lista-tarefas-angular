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
      # Then I seeInPopup("Deseja realmente apagar a tarefa?")
      # Then I acceptPopup()
      Then I not see "tarefa teste"

    Scenario: Adiciona e renomeia uma tarefa

      Variant: Renomeia uma tarefa apos adiciona-la a lista
      Given that I am in the [Lista de tarefas]
      When I fill <#inputtask2> with "tarefa teste"
        And I click on <#btnAdicionar>
      Then I see "tarefa teste"
      Then I click on <#btnEdit>
      Then I fill popup with "teste"
      Then I confirm popup
      Then I see "teste"

    Scenario: Adiciona uma tarefa e seta como pronto

      Variant: Seta como pronto a tarefa recem adicionada
      Given that I am in the [Lista de tarefas]
      When I fill <#inputtask2> with "tarefa teste"
        And I click on <#btnAdicionar>
      Then I see "Não"
      Then I see "tarefa teste"
      Then I click on <#btnDone>
      Then I see "Sim"


    # Variant: Adiciona uma tarefas ao clicar em Adicionar
    #   Given that I am in the [Lista de tarefas]
    #   When I fill {InputAdicionar} with {taskName}
    #     And I click on {BtnAdicionar}
    #     And I wait for 1
    #   Then I see {taskName}
        # And I wait for 2


Constants:
  - "Lista de tarefas" is "http://localhost:4200/"

# Table: Tarefas
#   | name         |
#   | tarefa teste |

# UI Element: taskName
#   - value comes from "SELECT name FROM [Tarefas]"
#     # Otherwise <#btnAdicionar> is disabled

# UI Element: InputAdicionar
#   - ID is inputtask2

# UI Element: BtnAdicionar
#   - ID is btnAdicionar
