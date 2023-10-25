describe('ini test dm instagram', () => {

  let user = null;
  let pass = null;
  before('get api user', () => {
    cy.request({
      method : 'GET',
      url : 'http://localhost/akses/getUser.php?order_id=1'
      })
      .then((response) =>{
          user = response.body.username
          pass = response.body.password
          // response = JSON.stringify(response)
          // var jsonData = JSON.parse(response)
          // cy.log(response.body.data[0])
      }) 
  })
  it('passes', () => {
    cy.visit('https://instagram.com')
    cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl')
      .click()
    cy.wait(10000)
    cy.get(':nth-child(1) > .xnz67gz > ._aa48 > ._aa4b')
      .type(user)
      .should('have.value', user)
    cy.get(':nth-child(2) > .xnz67gz > ._aa48 > ._aa4b')
      .type(pass, {log : false})
      // .should('have.value', pass)
    cy.get(':nth-child(3) > ._acan')
      .click()
    cy.wait(10000)
    cy.get(':nth-child(2) > .x4k7w5x > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2')
      .click()
    cy.get('.x1lugfcp')
      .type('ferdinand.rizky')
    cy.wait(20000)
    cy.get('[href="/ferdinand.rizky/"] > .xxbr6pl > .xl56j7k > .xozqiw3 > .xs83m0k > .x1ja2u2z > .x1iyjqo2 > .x9f619 > .x1lliihq').click()
    cy.wait(30000)
    cy.get('.x6ikm8r > .x1i10hfl')
      .should('be.visible')
      .contains('Message')
      .click()
    cy.wait(20000)
    cy.get('._a9_1')
      .should('be.visible')
      .click()
    cy.get('.xzsf02u > .xat24cr')
      .type('Hallo2')
      // .should('have.value', 'Hallo')
    cy.get('.x1gg8mnh > .xjyslct')
      .click()
  })
})