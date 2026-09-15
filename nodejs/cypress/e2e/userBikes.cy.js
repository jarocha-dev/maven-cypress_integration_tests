describe('UserBikes', () => {
  it('User_Create', () => {
    cy.visit('http://localhost:8080')
    cy.get('div.list-group a[href="/userBikes"]').click();
    cy.get('a.btn-primary').click();
    
    cy.get('[name="name"]').click();
    cy.get('[name="name"]').type('John Doe');
    cy.get('[name="speedsRear"]').type('8');
    cy.get('[name="bikeModel"]').select('1');
    cy.get('input.btn').click();
  })
})
