import { getIframeBody } from './iframe';

describe('Toast color', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/toasts-page--toasts');
  });

  it('should have margins', () => {
    cy.get('#control-backgroundColor').clear().type('rgb(154, 97, 97)');
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=toast]').should('have.css', 'background-color', 'rgb(154, 97, 97)');
    cy.get('#control-backgroundColor').clear();
  });
});
