describe('End-to-End Test', () => {
  beforeEach(() => {
    cy.visit('https://www.tutorialspoint.com/html/menu.htm');
  });

  it('completes the specified tasks', () => {
    cy.contains('Agree').click()
    cy.contains('About us').click()
      .then(() => addLog('Clicked on "About Us"'));

    // Get the URL of the new page
    cy.url().then((url) => {
      addLog(`The URL of the new page is ${url}`);
    });

    // List all unique URLs on the page that start with "http"
    cy.get('a')
      .then(($links) => {
        const uniqueUrls = new Set();

        $links.each((_index, element) => {
          const href = Cypress.$(element).prop('href');
          if (href.startsWith('http')) {
            uniqueUrls.add(href);
          }
        });

        uniqueUrls.forEach((url) => {
          addLog(`URL: ${url}`);
        });
      });

    // List all buttons of type 'button' and 'a' tags with class 'btn' by their id
    cy.get('button, a.btn')
      .then(($buttons) => {
        $buttons.each((_index, element) => {
          const id = Cypress.$(element).attr('id');
          addLog(`Button: ${id}`);
        });
      });

    // List all text input fields on the page
    cy.get('input').each(($input, index) => {
      const textInput = $input.attr('name') || $input.attr('id') || `Input ${index + 1}`;
      addLog(`Text Input: ${textInput}`);
    });
  });

  after(() => {
    // Save the logs to a file
    const logFilePath = 'logs.txt';
    const logContent = logs.join('\n');
    cy.writeFile(logFilePath, logContent);

    // Read the file to verify the logs were saved correctly
    cy.readFile(logFilePath).should('eq', logContent);
  });

  // Define an array to store the logs
  const logs = [];

  // Function to add logs to the array
  function addLog(log) {
    logs.push(log);
    cy.log(log); // Log the message using Cypress cy.log()
  }
});
