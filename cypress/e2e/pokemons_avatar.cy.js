describe("Покемоны", function () {
  it("Покупка нового аватара", function () {
    cy.visit("https://pokemonbattle.ru/login");
    cy.wait(5000);
    cy.get(":nth-child(1) > .auth__input").type("anpogodina2001@yandex.ru");
    cy.get("#password").type("28032001W");
    cy.get(".auth__button").click(); // авторизовались
    cy.get(".header__container > .header__id").click();
    cy.get('[href="/shop"]').click(); // перешли в магазин
    cy.wait(3000);
    cy.get(".available > button").first().click({ force: true });
    cy.wait(3000);
    cy.get(".pay__payform-v2 > :nth-child(2) > .pay_base-input-v2").type(
      "4111111111111111"
    );
    cy.get(":nth-child(1) > .pay_base-input-v2").type("10/25");
    cy.get(".pay-inputs-box > :nth-child(2) > .pay_base-input-v2").type("125");
    cy.get(".pay__input-box-last-of > .pay_base-input-v2").type(
      "german dolnikov"
    );
    cy.get(".pay-btn").click(); // подтверждаем введенные данные карты
    cy.wait(3000);
    cy.get(".payment__fielheader").contains("Подтверждение покупки");
    cy.get("#cardnumber").type("56456");
    cy.get(".payment__submit-button").click();
    cy.contains("Покупка прошла успешно").should("be.visible");
  });
});