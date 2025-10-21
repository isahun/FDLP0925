"use strict"

class Car {

    //properties default, no cal declarar
    //mètodes
    
    constructor(name,year,price) {
        this._name = name;
        this._year = year;
        this._price = price;
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }

    getDiscount() {
        if (this.age() > 10) {
            return this._price - 150;
        }
    }

}
    console.log(this);
    
    


