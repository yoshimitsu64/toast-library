import { getIframeBody } from './iframe';

describe('Toasts animations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/toasts-page--toasts');
  });

  it('should have smooth animation', () => {
    cy.get('#control-animation-0').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-animation=smooth]');
  });

  it('should have bounce animation', () => {
    cy.get('#control-animation-1').click();
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody().find('[data-animation=bounce]');
  });
});
