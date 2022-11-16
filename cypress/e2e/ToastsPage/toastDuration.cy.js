import { getIframeBody } from './iframe';

describe('Toast duration', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/toasts-page--toasts');
  });

  it('should have duration', () => {
    cy.get('#control-duration').clear().type('7');
    getIframeBody().find('[data-test=toast-gen]').click();
    cy.wait(7000);
    getIframeBody().find('[data-test=slot]').should('have.length', 0);
  });
});
