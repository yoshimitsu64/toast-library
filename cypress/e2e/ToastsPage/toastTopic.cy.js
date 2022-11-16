import { getIframeBody } from './iframe';

describe('Toast topic', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/toasts-page--toasts');
  });

  it('should have topic', () => {
    cy.get('#control-topic').clear().type('Custom topic');
    getIframeBody().find('[data-test=toast-gen]').click();
    getIframeBody()
      .find('[data-test=toast]')
      .then(($els) => {
        const win = $els[0].ownerDocument.defaultView;
        const before = win.getComputedStyle($els[0], 'before');
        const contentValue = before.getPropertyValue('content');
        expect(contentValue.replace('**')).to.eq('"Custom topic"');
      });
  });
});
