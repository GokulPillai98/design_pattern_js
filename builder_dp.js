class Address {
    constructor(street, phno) {
        this.street = street;
        this.phno = phno;
    }
}

class User {
    constructor(id, name, age, address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        return [this.id, this.name, this.age, this.address]
    }
}

// I want to set only name and address
console.log(new User(1, 'Gokul', undefined, new Address('Leadmill', '123456789'))) // inorder to set name ond address we need to pass undefined or null to other members
// we can overcome this by builder pattern

class UserBuilder {
    constructor(name) {
        this.name = name;
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    setAddress(address) {
        this.address = address;
        return this;
    }

    build() {
        return this;
    }
}

console.log(new UserBuilder('Kiran').build()) /// we eliminated the undefines we passed to the object before
console.log(new UserBuilder('Kiran').setAddress(new Address('Hosur', '1234567')).build()) // we managed to set name and address without passing undefined 
// and the chaning became possible because because we returned this




