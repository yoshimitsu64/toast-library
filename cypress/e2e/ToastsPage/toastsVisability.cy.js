import { getIframeBody } from './iframe';

describe('Toasts visability', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/toasts-page--toasts');
  });

  it('should show 2 toasts', () => {
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').find('div[data-test=toast]').should('have.length', 2);
  });

  it('should close 2 toasts', () => {
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').find('div[data-test=close]').click({ multiple: true });
    getIframeBody().find('[data-test=slot]').find('div[data-test=toast]').should('have.length', 0);
  });

  it('should show only 3 toasts', () => {
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').find('div[data-test=toast]').should('have.length', 3);
  });

  it('should make autoclose', () => {
    cy.get('#control-duration').clear().type('5');
    getIframeBody().find('[data-test=toast-gen]').click();
    cy.wait(5000);
    getIframeBody().find('[data-test=slot]').should('have.length', 0);
  });
});
