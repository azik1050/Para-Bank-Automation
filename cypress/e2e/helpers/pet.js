export class Pet {
    constructor(baseUrl, petId, petName, petStatus) {
        this.baseUrl = baseUrl;
        this.petId = petId;
        this.petName = petName;
        this.petStatus = petStatus;
    
        this.petJSON = {
            id: this.petId, 
            category: {
                id: this.petId, 
                name: this.petName 
            },
            name: this.petName, 
            photoUrls: [
                "string"
            ],
            tags: [
                {
                    id: this.petId, 
                    name: this.petName 
                }
            ],
            status: this.petStatus 
        };
    }    

    getPet(petId) {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}/pet/${petId}`,
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    addPet() {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/pet`,
            headers: {
                'content-type': 'application/json'
            },
            body: this.petJSON
        })
    }

    deletePet() {
        return cy.request({
            method: 'DELETE',
            url: `${this.baseUrl}/pet/${this.petId}`
        })
    }
}