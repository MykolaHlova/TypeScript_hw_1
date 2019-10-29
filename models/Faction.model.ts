import {Deputy} from "./Deputy.model";

export class Faction {
    listOfDeputies: Array<Deputy> = [];

    constructor(listOfDeputies: Array<Deputy>) {
        this.listOfDeputies = listOfDeputies
    }

    addDeputy(deputy: Deputy) {
        this.listOfDeputies.push(deputy);
    }

    deleteDeputy(deputy: Deputy) {
        const deputyDelete = this.listOfDeputies.findIndex((dept: Deputy) => {

            return deputy.firstName == dept.firstName && deputy.lastName == dept.lastName
        });
        this.listOfDeputies.splice(deputyDelete, 1);
    }

    deleteAllDeputyBribe() {
        const deputyBribeDelete = this.listOfDeputies.filter((deputy: Deputy) => {

            return !deputy.bribeTaker && deputy.sizeBribe >= 1000000
        });
        this.listOfDeputies.splice(0, this.listOfDeputies.length);
        this.listOfDeputies = [...deputyBribeDelete]
    }

    getDeputyMaxBribe() {
        const [maxBribe] = this.listOfDeputies.sort((deputy1: Deputy, deputy2: Deputy) => {

            return deputy2.sizeBribe - deputy1.sizeBribe;
        });
        console.log(maxBribe)
    }

    getAllDeputies() {
        console.log(this.listOfDeputies)
    }

    getAllBribeDeputies() {
        const allBriberDeputies = this.listOfDeputies.filter((deputy: Deputy) => deputy.bribeTaker);

        allBriberDeputies.forEach(deput => {
            console.log(deput);
        })
    }

    deleteAllDeputy() {
        this.listOfDeputies = []
    }

    getSumBribeFaction() {
        const SumBribeFaction = this.listOfDeputies.reduce((deputy1: number, deputy2: Deputy) => {
            return deputy1 + deputy2.sizeBribe
        }, 0);
        console.log(SumBribeFaction)
    }
}
