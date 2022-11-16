export const getIframeBody = () => {
  return cy
    .get('#storybook-preview-iframe')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
};
