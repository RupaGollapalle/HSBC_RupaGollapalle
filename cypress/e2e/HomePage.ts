class HomePage{
    visit(){
        cy.visit("https://www.hsbc.co.in/")
    }
    clickLogonButton(){
        cy.get('.selected-item').contains(" Log On ").click({force: true})
    }
}

export default HomePage;