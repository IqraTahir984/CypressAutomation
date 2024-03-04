class Login{


    getusername(){
       return cy.xpath('//input[@name="username"]')

    }
    getpassword(){
       return  cy.xpath('//input[@type="password"]')
    }
    getsubmit(){
        return cy.xpath('//button[@type="submit"]')
    }





    typeusername(nn){
        this.getusername().type(nn)
    }
    typepassword(mm){
        this.getpassword().type(mm)
    }
    clicksubmit(){
        this.getsubmit().click()
    }
}
export default Login