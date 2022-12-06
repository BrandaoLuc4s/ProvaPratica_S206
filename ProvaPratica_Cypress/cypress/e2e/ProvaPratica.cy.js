describe('Criando cenário de teste para o site automationintesting', ()=> {

  it('Caso de teste: Enviando mensagem com falha, sem preencher os campos de dados(name, email, Phone, Subject) ', ()=> {

    cy.visit('https://automationintesting.online/')
    cy.get('#submitContact').click()
    cy.get('.alert').should('contains.text','Phone may not be blank')

  })
  
  it('Caso de teste: Testando se a mensagem foi enviada pro usuário', ()=> {

    let info = criarUsuario()

  })

  it('Caso de teste: Alugando um quarto com falha, não selecionar as datas da reserva ', ()=> {

    cy.visit('https://automationintesting.online/')
    cy.get('.col-sm-7 > .btn').click()
    cy.get('.room-booking-form > .form-control').type('Brandao')
    cy.get('.col-sm-4 > :nth-child(2) > .form-control').type('Lucas')
    cy.get('.col-sm-4 > :nth-child(3) > .form-control').type('BrandaoLucas@inatel.br')
    cy.get('.col-sm-4 > :nth-child(4) > .form-control').type('(35)9984-82283')
    cy.get('.col-sm-4 > .btn-outline-primary').click()
    cy.get('.alert').should('contains.text','não deve ser nulo')

  })

})

function criarUsuario(){
  let horas = new Date().getHours().toString();
  let minutos = new Date().getMinutes().toString();
  let segundos = new Date().getSeconds().toString();
  let email = 'Lucas' + horas + minutos + '@gmail.com'
  let phone = '(35)' + horas + segundos + '1234'

  cy.visit('https://automationintesting.online/')
  cy.get('[data-testid="ContactName"]').type('Lucas')
  cy.get('[data-testid="ContactEmail"]').type(email)
  cy.get('[data-testid="ContactPhone"]').type(phone)
  cy.get('[data-testid="ContactSubject"]').type('Prova Pratíca s206L1')
  cy.get('[data-testid="ContactDescription"]').type('Parabéns, Lucas. Nota da prova = 100')
  cy.get('#submitContact').click()
  cy.get(':nth-child(2) > div > h2').should('contain.text','Thanks for getting in touch Lucas!')

}