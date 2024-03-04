class AddEmploye{

    getadmin(){
        return cy.xpath('//span[text()="Admin"]')
    }
    getadd(){
        return cy.xpath(' //button[text()=" Add "]')
    }
    getuserrole(){
        return cy.xpath('//label[text()="User Role"]/following::div[text()="-- Select --"][1]')
    }
    getuserroleval(){
        return cy.xpath('//label[text()="User Role"]/following::div[text()="-- Select --"][1]/following::span[text()="Admin"]')
    }
    getempname(){
        return cy.xpath('//label[text()="Employee Name"]/following::input[@placeholder="Type for hints..."]')
    }
    getempnameval(){
        return cy.xpath('//div[@role="listbox"]/div[2]')
    }
    getstatus(){
        return cy.xpath('//label[text()="Status"]/following::div[text()="-- Select --"]')
    }
    getstatusval(){
        return cy.xpath('//span[text()="Enabled"]')
    }
    getusername(){
        return cy.xpath('//label[text()="Username"]/following::input[1]')
    }
    getpassword(){
        return cy.xpath('//label[text()="Password"]/following::input[1]')
    }
    getconfirmpassword(){
        return cy.xpath('//label[text()="Confirm Password"]/following::input')
    }
    getsavebtn(){
        return cy.xpath('//button[@type="submit"]')
    }

    clickadmin(){
        this.getadmin().click()
    }
    clickadd(){
        this.getadd().click()
    }
    clickuserrole(){
        this.getuserrole().click()
        this.getuserroleval().click()
    }
    clickempname(a){
        this.getempname().type(a)
        this.getempnameval().click()
    }
    clickstatus(){
        this.getstatus().click()
        this.getstatusval().click()
    }
    clikusername(dd){
        this.getusername().type(dd)
    }
    clickpassword(ee){
        this.getpassword().type(ee)
    }
    clickconfirmpassword(ff){
        this.getconfirmpassword().type(ff)
    }
    clicksavebtn(){
        this.getsavebtn().click()
    }

}
export default AddEmploye