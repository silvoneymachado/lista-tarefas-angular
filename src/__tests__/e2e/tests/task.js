// Generated with ❤ by Concordia
// source: c:\code\cefet\pis-2019-1-silvoney\lista-tarefas\src\__tests__\e2e\features\task.testcase
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
    I.acceptPopup(); // (26,3)
    I.dontSee("tarefa teste"); // (27,3)
});

Scenario("Adiciona e renomeia uma tarefa | Renomeia uma tarefa apos adiciona-la a lista - 1", (I) => {
    I.amOnPage("http://localhost:4200/"); // (33,3)  [Lista de tarefas]
    I.fillField('#inputtask2', "tarefa teste"); // (34,3)
    I.click('#btnAdicionar'); // (35,5)
    I.see("tarefa teste"); // (36,3)
    I.click('#btnEdit'); // (37,3)
    I.seeElement('#btnCancelarEdicao'); // (38,3)
    I.fillField('#inputtask2', "novo"); // (39,3)
    I.click('#btnAdicionar'); // (40,3)
    I.see("novo"); // (41,3)
    I.wait(3); // (42,3)
});

Scenario("Adiciona uma tarefa e seta como pronto | Seta como pronto a tarefa recem adicionada - 1", (I) => {
    I.amOnPage("http://localhost:4200/"); // (48,3)  [Lista de tarefas]
    I.fillField('#inputtask2', "tarefa teste"); // (49,3)
    I.click('#btnAdicionar'); // (50,5)
    I.see("Não"); // (51,3)
    I.see("tarefa teste"); // (52,3)
    I.click('#btnDone'); // (53,3)
    I.see("Sim"); // (54,3)
});

