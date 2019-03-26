// Generated with ❤ by Concordia
// source: C:\Users\silvoney.dsn.erp\Desktop\Docs\lista-tarefas\src\__tests__\e2e\features\task.testcase
//
// THIS IS A GENERATED FILE - MODIFICATIONS CAN BE LOST !

Feature("Gestao de tarefas");

Scenario("Adiciona uma tarefa a lista | Adiciona uma tarefas ao clicar em Adicionar - 1", (I) => {
    I.amOnPage("http://localhost:4200/"); // (12,3)  [Lista de tarefas]
    I.fillField('#inputtask2', "tarefa teste"); // (13,3)
    I.click('#btnAdicionar'); // (14,5)
    I.see("tarefa teste"); // (15,3)
});

Scenario("Adiciona e deleta uma tarefa | Deleta uma tarefa apos adiciona-la a lista - 1", (I) => {
    I.amOnPage("http://localhost:4200/"); // (21,3)  [Lista de tarefas]
    I.fillField('#inputtask2', "tarefa teste"); // (22,3)
    I.click('#btnAdicionar'); // (23,5)
    I.see("tarefa teste"); // (24,3)
    I.click('#btnDelete'); // (25,3)
    I.dontSee("tarefa teste"); // (26,3)
});

Scenario("Adiciona e renomeia uma tarefa | Renomeia uma tarefa apos adiciona-la a lista - 1", (I) => {
    I.amOnPage("http://localhost:4200/"); // (32,3)  [Lista de tarefas]
    I.fillField('#inputtask2', "tarefa teste"); // (33,3)
    I.click('#btnAdicionar'); // (34,5)
    I.see("tarefa teste"); // (35,3)
    I.click('#btnEdit'); // (36,3)
    // COMMAND NOT ACCEPTED -> "location": {"line":37,"column":3}, "action": "fill", "options": ["popup","with"], "targets": [], "targetTypes": [], "values": ["teste"]
    // COMMAND NOT ACCEPTED -> "location": {"line":38,"column":3}, "options": [], "targets": [], "targetTypes": [], "values": []
    I.see("teste"); // (39,3)
});

Scenario("Adiciona uma tarefa e seta como pronto | Seta como pronto a tarefa recem adicionada - 1", (I) => {
    I.amOnPage("http://localhost:4200/"); // (45,3)  [Lista de tarefas]
    I.fillField('#inputtask2', "tarefa teste"); // (46,3)
    I.click('#btnAdicionar'); // (47,5)
    I.see("Não"); // (48,3)
    I.see("tarefa teste"); // (49,3)
    I.click('#btnDone'); // (50,3)
    I.see("Sim"); // (51,3)
});

