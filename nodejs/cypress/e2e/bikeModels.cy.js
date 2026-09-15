describe('testBikeModels', () => {
  it('BikeModel_Create1', () => {
    cy.visit('http://localhost:8080')
    cy.get('div.list-group a[href="/bikeModels"]').click();
	cy.get('a.btn-primary').click();
	
    cy.get('[name="brandName"]').type('Focus');
    cy.get('[name="model"]').type('Mares');
    cy.get('[name="year"]').type('2020');

    cy.get('input.btn').click();
  })
})
