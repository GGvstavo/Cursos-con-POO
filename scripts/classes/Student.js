import User from "./User.js";

export default class Student extends User {
    constructor(name, lastname, image, premium) {
        super(name, lastname, image)
        this.premium = premium
    }
    getPremium() {
        return this.premium
    }

    setPremium() {
        this.premium = newPremium
    }
}