Feature: Gestão de tarefas

   Manipulação da tarefas

   Scenario: Adiciona uma tarefa à lista

    Variant: Adiciona uma tarefas ao clicar em 'Adicionar'
      Given that I am on "http://localhost:4200/"
      When I type "tarefa teste" in #inputtask2
        And I click #btnAdd
      Then I not see "Não há tarefas adicionadas"
