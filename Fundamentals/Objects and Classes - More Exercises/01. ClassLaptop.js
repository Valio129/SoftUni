class Laptop {
    isOn = false;
    constructor(info, quality) {
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
        };
        this.quality = quality;
    }
    showInfo() {
        let result = JSON.stringify(this.info)
        return result;
    }
    turnOn() {
        this.isOn = true;
        this.quality--;
    }
    turnOff() {
        this.isOn = false;
        this.quality--;
    }
    get price() { return 800 - ((this.info.age) * 2) + ((this.quality) * 0.5) }
}

let info = { producer: "Dell", age: 2, brand: "XPS" }
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)


