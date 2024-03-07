export const randomName = ()=>{


    const userName = ()=> Cypress._.random(0,1e3)


    const id = userName()
    return `dummy${id}`


}

export const userName1 = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let randomString = "";

    for (let i = 0; i < 5; i++) {
        const randomIndex = Cypress._.random(0, alphabet.length - 1);
        randomString += alphabet[randomIndex];
    }

    return randomString;
}





    
