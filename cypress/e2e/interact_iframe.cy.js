const fs = require('fs');

describe('End-to-End Test', () => {
  beforeEach(() => {
    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm');
  });

  it('completes the specified tasks', () => {
    // Find the iframe with the source '/html/menu.htm'
    cy.get('iframe[src="/html/menu.htm"]').then(($iframe) => {
      if ($iframe.length > 0) {
        const iframeUrl = 'https://www.tutorialspoint.com' + $iframe.attr('src');
        cy.visit(iframeUrl)
          .then(() => cy.log(`Visited ${iframeUrl}`));
      } else {
        cy.log('The iframe with the source "/html/menu.htm" was not found');
      }
    });
  });
});
