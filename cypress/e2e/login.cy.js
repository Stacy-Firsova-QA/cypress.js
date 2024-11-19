describe("Проверка формы логина и пароля", function () {
  it("Верный логин и верный пароль", function () {
    cy.visit("https://login.qa.studio"); // зашли на сайт (подрубились к сайпресу для наведения на элементы)
    cy.get("#mail").type("german@dolnikov.ru"); // вели логин
    cy.get("#pass").type("iLoveqastudio1"); // вели пароль
    cy.get("#loginButton").click(); // кликнули по кнопке войти
    cy.get("#messageHeader").contains("Авторизация прошла успешно"); // проверяем, что авторизовались
    cy.get("#messageHeader").should("be.visible"); // Текст виден пользователю
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // есть крестик и он виден пользователю
  });
  it("Верный логин и НЕверный пароль", function () {
    cy.visit("https://login.qa.studio");
    cy.get("#mail").type("german@dolnikov.ru");
    cy.get("#pass").type("Loveqastudio1"); // неверный пароль
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Такого логина или пароля нет");
    cy.get("#messageHeader").should("be.visible");
    cy.get("#exitMessageButton > .exitIcon").should("be.visible");
  });
  it("НЕверный логин и верный пароль", function () {
    cy.visit("https://login.qa.studio");
    cy.get("#mail").type("erman@dolnikov.ru"); // неверный логин
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Такого логина или пароля нет");
    cy.get("#messageHeader").should("be.visible");
    cy.get("#exitMessageButton > .exitIcon").should("be.visible");
  });
  it("Логин без @", function () {
    cy.visit("https://login.qa.studio");
    cy.get("#mail").type("germandolnikov.ru"); // логин без @
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Нужно исправить проблему валидации");
    cy.get("#messageHeader").should("be.visible");
    cy.get("#exitMessageButton > .exitIcon").should("be.visible");
  });
  it("Восстановление пароля", function () {
    cy.visit("https://login.qa.studio");
    cy.get("#forgotEmailButton").should("have.css", "color", "rgb(0, 85, 152)"); // проверка цвета кнопки
    cy.get("#forgotEmailButton").click();
    cy.get("#mailForgot").type("german@dolnikov.ru");
    cy.get("#restoreEmailButton").click();
    cy.get("#messageHeader").contains("Успешно отправили пароль на e-mail");
    cy.get("#messageHeader").should("be.visible");
    cy.get("#exitMessageButton > .exitIcon").should("be.visible");
  });
  it("Приведение к строчным буквам в логине", function () {
    cy.visit("https://login.qa.studio");
    cy.get("#mail").type("GerMan@Dolnikov.ru"); // разный шрифт
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Авторизация прошла успешно");
    cy.get("#messageHeader").should("be.visible");
    cy.get("#exitMessageButton > .exitIcon").should("be.visible");
  });
});
