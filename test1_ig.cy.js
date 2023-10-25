///<reference types="cypress" />

describe('template spec', () => {

  let user = null;
  let pass = null;
  before('passes', () => {
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
    cy.visit('https://www.instagram.com/')
    cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl').click()
    cy.wait(5000)
    cy.get(':nth-child(1) > .xnz67gz > ._aa48 > ._aa4b')
      .type(user)
      .should('have.value', user)
    cy.get(':nth-child(2) > .xnz67gz > ._aa48 > ._aa4b')
      .type(pass, {log : false})
      // .should('have.value', pass, {log : false})
    cy.get(':nth-child(3) > ._acan').click()
    cy.get(':nth-child(2) > .x4k7w5x > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2').click()
    cy.get('.x1lugfcp').type('ferdinand.rizky')
    cy.wait(10000)
    cy.get('[href="/ferdinand.rizky/"] > .xxbr6pl > .xl56j7k > .xozqiw3 > .xs83m0k > .x1ja2u2z > .x1iyjqo2 > .x9f619 > .x1lliihq').click()
      
      })
})