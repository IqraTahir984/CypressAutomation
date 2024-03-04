class PIM{

    getpim(){
        return cy.xpath('//span[text()="PIM"]')
    }
    getempid(){
        return cy.xpath('//label[text()="Employee Id"]/following::input[1]')
    }
    getsubmitbtn(){
        return cy.xpath('//button[@type="submit"]')
    }
    getpimdetails(){
        return cy.xpath('//div[@role="cell"][2]')
    }
    clickpim(){
        this.getpim().click();

    }
    typeempid(ab){
        this.getempid().type(ab)
    }
    clicksubmitbtn(){
        this.getsubmitbtn().click()
    }
    clickpimdetails(){
        this.getpimdetails
    }

}
export default PIM