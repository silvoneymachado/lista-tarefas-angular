// Generated with ❤ by Concordia
// source: c:\code\cefet\pis-2019-1-silvoney\lista-tarefas\src\__tests__\e2e\features\bugs.testcase
//
// THIS IS A GENERATED FILE - MODIFICATIONS CAN BE LOST !

Feature("Gestao de tarefas");

Scenario("Adiciona uma tarefa a lista | Trocar estado de pronto de tarefa em edição perde troca", (I) => {
    I.amOnPage("http://localhost:4200/"); // (9,5)
    I.waitForText("A Fazer"); // (10,5)
    I.fillField('#inputtask2', "Comprar leite"); // (11,7)
    I.click('#btnAdicionar'); // (12,7)
    I.see("Comprar leite", '.table'); // (13,5)
    I.see("Não", '.table'); // (14,7)
    I.click('#btnEdit'); // (16,5)
    I.click('#btnDone'); // (18,5)
    I.see("Sim", '.table'); // (19,5)
    I.fillField('#inputtask2', "Comprar leite e pão"); // (21,5)
    I.click('#btnAdicionar'); // (22,7)
    I.see("Comprar leite e pão", '.table'); // (23,5)
    I.see("Sim", '.table'); // (24,7)
});

Scenario("Adiciona uma tarefa a lista | Remover tarefa em edição faz não readicionar", (I) => {
    I.amOnPage("http://localhost:4200/"); // (30,5)
    I.waitForText("A Fazer"); // (31,5)
    I.fillField('#inputtask2', "Comprar leite"); // (32,7)
    I.click('#btnAdicionar'); // (33,7)
    I.see("Comprar leite", '.table'); // (34,5)
    I.see("Não", '.table'); // (35,7)
    I.click('#btnEdit'); // (37,5)
    I.click('#btnDelete'); // (39,7)
    I.acceptPopup(); // (40,7)
    I.fillField('#inputtask2', "Comprar leite e pão"); // (41,7)
    I.click('#btnAdicionar'); // (42,7)
    I.see("Comprar leite e pão", '.table'); // (44,5)
});

