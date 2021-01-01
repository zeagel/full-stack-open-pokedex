describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function() {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })

  it('next pokemon page is opened when "Next" is clicked', function() {
    cy.contains('ivysaur').click()
    cy.contains('Next').click()
    cy.contains('venusaur')
  })

  it('previous pokemon page is opened when "Previous" is clicked', function() {
    cy.contains('ivysaur').click()
    cy.contains('Previous').click()
    cy.contains('bulbasaur')
  })
})