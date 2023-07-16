import { Person } from "./Person";

class Worker extends Person{
    constructor(name, age, company = undefined) {
        super(name, age);
        this.company = company;
    }
}


export{
    Worker
}