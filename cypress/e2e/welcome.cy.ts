describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('http://localhost:5173');
      expect(true).to.equal(true)
    })
})