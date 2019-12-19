// https://docs.cypress.io/api/introduction/api.html

describe('Home Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'The Blog of Blogs');
    cy.get('[data-test="post-listing"]').its('length').should('eq', 7);

    // Click on post
    cy.get('[data-test="post-link"]').first().click();
    cy.contains('h2', 'Ullamco');

    //Favorite
    cy.contains('button', 'Favorite');
    cy.get('button').first().click();
    cy.contains('button', 'Unfavorite');
    
    //View and Count Favorites
    cy.get('[data-test="favorites-link"').click();
    cy.get('[data-test="post-listing"]').its('length').should('eq', 1);

    //Remove Favorite
    cy.get('[data-test="post-link"]').first().click();
    cy.get('button').first().click();
    cy.get('[data-test="favorites-link"').click();
    cy.contains('p', "Sorry, you don't have any favorite posts yet.");

    //Test Complaints
    cy.get('[data-test="complaint-link"').click();
    cy.get('button').should('be.disabled');
    cy.get('textarea').type('I love testing.');
    cy.get('input').type('ian.callahan');
    cy.get('button').should('be.disabled');
    cy.get('input').clear().type('ian.callahan@gmail.com');
    cy.get('button').should('not.be.disabled');
    cy.get('button').click();
    cy.contains('h3', '1');

    //Test Categories
    cy.get('[data-test="category-link"').first().click();
    cy.get('[data-test="post-listing"]').its('length').should('eq', 2);



  
  })

  

})
