import { getIframeBody } from './iframe';

describe('Toasts margins', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/toasts-page--toasts');
  });

  it('should have margins', () => {
    cy.get('#control-position-3').click();
    cy.get('#control-horizontalMargin').clear().type("80");
    cy.get('#control-verticalMargin').clear().type("30");
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').should('have.css', 'margin-bottom', "30px");
    getIframeBody().find('[data-test=toast]').should('have.css', 'margin-left', "80px");
  })
});
