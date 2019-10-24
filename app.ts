class Human {
    weight: number;
    height: number;
    constructor(weight: number, height: number){
        this.weight = weight;
        this.height = height;
    }
}

class Deputy extends Human{
    firstName: string;
    lastName: string;
    age: number;
    bribeTaker: boolean;
    sizeBribe: number;
    constructor(firstName: string, lastName: string, age: number, bribeTaker: boolean, sizeBribe: number){
        super(weigth, heigth);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.sizeBribe = sizeBribe;
    }
    buyOver(){

        if (!this.bribeTaker){
            console.log('NO');
        }
        if (!this.bribeTaker && this.sizeBribe > 1000000) {
            console.log('Take a bribe $$$');
        }
        if (this.bribeTaker){
            console.log('Take a bribe $$$');
        }
    }
}

class Faction {
    listOfDeputies: string;
    constructor(listOfDeputies: string){
        this.listOfDeputies = listOfDeputies;
    }

    addDeputy() {
    }
    deleteDeputy(){
    }
    deleteDeputyBribe(){
    }
    getDeputiMaxBribe(){
    }
    getAllDeputies(){
    }
    deleteAllDeputy(){
    }
    getSumBribeFaction(){
    }
}