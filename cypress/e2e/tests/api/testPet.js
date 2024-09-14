import { Pet } from "../../helpers/pet";

const pet = new Pet('https://petstore.swagger.io/v2', 1, 'Bro', 'available')

describe('Test Pet API', () => {
    it('Add a pet', () => {
        pet.addPet().then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq(pet.petJSON)
        })
    });

    it('Find a pet', () => {
        pet.getPet(pet.petId).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq(pet.petJSON)
        })
    });

    it('Remove a pet', () => {
        pet.deletePet().then((response) => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        })
    });
});