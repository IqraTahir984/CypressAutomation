import Login from "../Pages/Loginpage"
import AddEmploye from "../Pages/AddingEmploye"
import PIM from "../Pages/PIM"
import { randomName } from "../Utils/utilis"


const loginpage = new Login
const emp = new AddEmploye
const pim = new PIM
const employeName = randomName()

describe("Orangehrm",function(){

 beforeEach (()=>{

    cy.visit(Cypress.env('appUrl'))
    // cy.url().should('include','orangehrmlive.com').and('contain','orangehrmlive.com')
    // cy.title().should('include', 'OrangeHRM')
    loginpage.typeusername(Cypress.env('appUserName'))
    loginpage.typepassword(Cypress.env('appPassword'))
    loginpage.clicksubmit()

})

it("addingemploye",function(){
    emp.clickadmin()
    emp.clickadd()
    emp.clickuserrole()
    emp.clickempname(this.testdata.adminData.empname)
    emp.clickstatus()
    emp.clikusername(employeName)
    emp.clickpassword(this.testdata.adminData.emppassword)
    emp.clickconfirmpassword(this.testdata.adminData.empconfirmpass)
    emp.clicksavebtn()
    
})
it("addingpimdetails",function(){
    pim.clickpim()
    pim.typeempid(this.testdata.pimData.clickpimid)
    pim.clicksubmitbtn()
    pim.clickpimdetails()
})

})