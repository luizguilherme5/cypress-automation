# Cypress End-to-End Test Suite Documentation

This repository contains an end-to-end test suite developed using Cypress for the 'https://www.tutorialspoint.com' website. The test suite performs various tasks, interacts with different pages and elements, and validates the expected behaviors.

## Functionalities Implemented

### create_new_acc.cy.js

This test script allows the creation of a new account on the 'https://www.tutorialspoint.com/market/login.asp' page. The implemented functionalities include:

- Clicking on the 'Sign Up' button.
- Filling in the registration form with user details.
- Generating a random email address and password.
- Checking the 'Promotional Email' checkbox.

### interact_iframe.cy.js

This test script demonstrates the interaction with iframes on the 'https://www.tutorialspoint.com/html/html_iframes.htm' page. The implemented functionality includes:

- Finding an iframe with the source '/html/menu.htm'.
- If the iframe is found, get the intended source URL.

### about_us.cy.js

This test script showcases interaction with nested iframes on the 'https://www.tutorialspoint.com/html/menu.htm' page. The implemented functionalities include:

- Clicking on elements with text 'Agree' and 'About Us'.
- Logging the URL of the new page.
- Listing unique URLs on the page that start with "http".
- Listing buttons and 'a' tags with class 'btn' by their ID.
- Listing text input fields on the page.

## Motivations

The implemented functionalities were developed to fulfill the requirements specified for the end-to-end test suite. Each script addresses a specific scenario and interacts with different elements and pages of the website. The functionalities aim to validate the expected behavior and ensure a smooth user experience.

## Improvements for Future Development

During the implementation of the test suite, the following issues were encountered that could be improved in future iterations:

1. **Error Handling**: The test scripts currently do not handle potential errors or unexpected situations gracefully. Adding proper error handling mechanisms would enhance the robustness and reliability of the test suite. Additionally, connecting the files to create a cohesive user journey was challenging. The Tutorialspoint website has several flaws, and accessing it with Cypress requires handling various unhandled errors. Furthermore, the presence of numerous advertisements on the site impacts its performance and makes it slower. Ideally, the files should work together as one cohesive journey, with each step representing an interaction.

2. **Test Data Management**: The test data used in the scripts, such as names, email addresses, and passwords, are currently hardcoded or generated randomly. Implementing a more structured approach for test data management, such as using test data fixtures or external data sources, would make the test suite more flexible and maintainable. Additionally, the registration process requires email validation, which has not been implemented, preventing successful completion of the registration.

3. **Interaction with iFrames**: Interacting with iFrames was problematic, and wrapping them for seamless interaction was challenging. The chosen plugin for iFrame interaction is outdated and lacks proper documentation. Exploring alternative plugins or custom approaches to handle iFrame interactions would improve the reliability and maintainability of the test suite.

4. **Test Modularity**: The current implementation of the test scripts focuses on individual functionalities. However, to improve maintainability and reusability, the test suite could be structured in a more modular way, with reusable functions or custom commands that can be easily shared among different test scripts.

5. **Enhanced Reporting**: Integrating Cypress with reporting tools or frameworks, such as Mochawesome or Allure, would provide more detailed and visually appealing test reports, making it easier to analyze test results and track issues.

6. **Optimized Test Execution**: Considering test execution time is crucial, especially when dealing with complex interactions or large test suites. Evaluating test execution performance and optimizing where necessary can significantly improve the overall test suite efficiency.

These identified areas for improvement should be taken into consideration for future development and refinement of the test suite.