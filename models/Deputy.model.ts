import {Human} from "./Human.model";

export class Deputy extends Human {
    firstName: string;
    lastName: string;
    age: number;
    bribeTaker: boolean;
    sizeBribe: number;

    constructor(firstName: string, lastName: string, age: number, bribeTaker: boolean, sizeBribe: number, weight: number, height: number) {
        super(weight, height);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.sizeBribe = sizeBribe;
    }

    giveBribe() {

        if (!this.bribeTaker) {
            return console.log('NO');
        } else if (!this.bribeTaker && this.sizeBribe >= 1000000) {
            return console.log('Take a bribe');
        } else if (this.bribeTaker) {
            return console.log('Take a bribe $$$');
        }
    }
}