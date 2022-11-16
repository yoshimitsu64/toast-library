import { getIframeBody } from './iframe';

describe('Toast message', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/toasts-page--toasts');
  });

  it('should have message', () => {
    cy.get('#control-message').clear().type('Custom message');
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=toast]').contains('Custom message');
  });
});
