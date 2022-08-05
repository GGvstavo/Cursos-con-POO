export default class User {
    constructor(name, lastname, image) {
        this.name = name,
        this.lastname = lastname,
        this.image = image
    }

    getName() {
        return this.name
    }

    getLastname() {
        return this.lastname
    }

    getImage() {
        return this.image
    }

    setName() {
        this.name = newName
    }

    setLastname() {
        this.lastname = newLastname
    }

    setImage() {
        this.image = newImage
    }

}
