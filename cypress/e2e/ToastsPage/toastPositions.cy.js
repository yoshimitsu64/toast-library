import {getIframeBody} from './iframe'

describe('Toasts positions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/toasts-page--toasts');
  });

  it('shoult have different positions', () => {
    cy.get('#control-position-0').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').should('have.class', 'top-left');

    cy.get('#control-position-1').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').should('have.class', 'top-center');

    cy.get('#control-position-2').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').should('have.class', 'top-right');
  });

  it('should have position bottom-left', () => {
    cy.get('#control-position-3').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').should('have.class', 'bottom-left');
  });

  it('should have position bottom-center', () => {
    cy.get('#control-position-4').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').should('have.class', 'bottom-center');
  });

  it('should have position bottom-right', () => {
    cy.get('#control-position-5').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-test=slot]').should('have.class', 'bottom-right');
  });
});
