///<reference types="cypress"/>


describe('ini tes case unfollow ig', () => {

  let user = null;
  let pass = null;
  before('get api user', () =>{
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
    cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl')
      .click()
    cy.get(':nth-child(1) > .xnz67gz > ._aa48 > ._aa4b')
      .type(user)
      .should('have.value', user)
    cy.get(':nth-child(2) > .xnz67gz > ._aa48 > ._aa4b')
      .type(pass)
      .should('have.value', pass)
    cy.get(':nth-child(3) > ._acan')
      .click()
    cy.get(':nth-child(2) > .x4k7w5x > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2')
      .click()
    cy.get('.x1lugfcp')
    .type('ferdinand.rizky')
    cy.wait(5000)
    cy.get('[href="/ferdinand.rizky/"] > .xxbr6pl > .xl56j7k > .xozqiw3 > .xs83m0k > .x1ja2u2z > .x1iyjqo2 > .x9f619 > .x1lliihq').click()
    cy.wait(20000)
    cy.get('._acan')
      .click()
    cy.wait(5000)
    cy.get('body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div > div:nth-child(8) > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1pi30zi.x1swvt13.x1l90r2v.xyamay9.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1')
      .should('be.visible')
      .click()

  })
})