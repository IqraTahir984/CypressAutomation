export const randomName = ()=>{


    const userName = ()=> Cypress._.random(0,1e3)


    const id = userName()
    return `dummy${id}`

















}
