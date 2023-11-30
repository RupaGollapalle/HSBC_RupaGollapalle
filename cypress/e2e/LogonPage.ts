class LogonPage{
    checkContinueButtonDisabled(){
        cy.get('button[name="continue"]').should('be.disabled')
    }
    
    checkRemCBIisUnchecked(){
        cy.get('[type="checkbox"]').should('not.be.checked')
    }
    getUsername(){
        return cy.get('input[name="name"]')
    }
    checkUsernameIsBlank(){
        const un = this.getUsername()
        un.should('have.value','')
    }
    enterUsername(username:any){
        const un = this.getUsername()
        un.type(username)
    }
    clearUsername(){
        const un = this.getUsername()
        un.clear()
    }
    checkRMBcheckbox(){
        cy.get('[type="checkbox"]').check()

    }
    checkRemCBIischecked(){
        cy.get('[type="checkbox"]').should('be.checked')
    }

    checkContinueBuuttonEnabled(){
        cy.get('button[name="continue"]').should('be.enabled')
    }
    clickContinueButton(){
        cy.get('button[name="continue"]').click()
    }
    helpWithUsername(){
        cy.get('a[class="help-link-on-page pull-right"]').click({force:true})
    }
    checkHelp(){
        cy.get('div[id = "help_content_1"]').contains("Example").should("be.visible")
    }
    closeHelp(){
        //input[id="Close_dob_exception"] or input[value="Close"]
        cy.get('input[value="Close"]').click({force:true})
    }
}

export default LogonPage;

//input[id="Close_dob_exception"] or input[value="Close"]