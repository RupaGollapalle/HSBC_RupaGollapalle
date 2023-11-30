import HomePage from "./HomePage"
import LogonPage from "./LogonPage"

describe("Login",()=> {

    let userdata: {email: any}
    before(function(){
        cy.fixture('example').then(function(data){
            userdata = data 
            return userdata 
        })
    }) 
    it('visits', ()=> {
        const homepage = new HomePage()
        const logon = new LogonPage()

        homepage.visit()
        homepage.clickLogonButton()


        logon.checkContinueButtonDisabled()
        logon.checkRemCBIisUnchecked()
        logon.checkUsernameIsBlank()
        logon.enterUsername(userdata.email)
        logon.checkRMBcheckbox()
        logon.checkRemCBIischecked()
        logon.checkContinueBuuttonEnabled()
        //logon.clickContinueButton()
        logon.helpWithUsername()
        logon.checkHelp()
        logon.closeHelp()
        
    })

})