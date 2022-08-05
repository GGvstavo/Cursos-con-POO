export default class Curso {
    constructor(name, poster, price) {
        this.name = name
        this.poster = poster
        this.price = price
        this.enrolled = []
    }

    getName() {
        return this.name
    }
    
    getPoster() {
        return this.poster
    }

    getPrice() {
        return this.price
    }

    getEnrolled() {
        return this.enrolled
    }

    setName(name) {
        this.name = name
    }

    setPoster(poster) {
        this.poster = poster
    }

    setPrice(price) {
        this.price = price
    }

    setEnrolled(enrolled) {
        this.enrolled = enrolled
    }
}