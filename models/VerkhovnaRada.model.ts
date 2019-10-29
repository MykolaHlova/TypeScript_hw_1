import {Faction} from "./Faction.model";
import {Deputy} from "./Deputy.model";

export class VerkhovnaRada {
    listFaction: Array<Faction> = [];

    constructor(listFaction: Array<Faction>) {
        this.listFaction = listFaction
    }

    addFaction(faction: Faction) {
        this.listFaction.push(faction)
    }

    deleteFaction(faction: Faction) {
        const factionDelete = this.listFaction.findIndex((fact: Faction) => {
            return fact === faction;
        });
        this.listFaction.splice(factionDelete, 1)
    }

    getAllFactions() {
        console.log(...this.listFaction);
    }

    findFaction(faction: Faction) {
        const findFaction = this.listFaction.find((fact: Faction) => fact === faction);

        console.log(findFaction);
    }

    addDeputyToFaction(faction: Faction, deputy: Deputy) {
        faction.addDeputy(deputy)
    }

    deleteDeputyFromFaction(faction: Faction, deputy: Deputy) {
        faction.deleteDeputy(deputy)
    }

    getAllDeputyBribeFromFaction(faction: Faction) {
        faction.getAllBribeDeputies()
    }

    findMaxBribeDeputyFromFaction(faction: Faction) {
        faction.getDeputyMaxBribe()
    }

    findMaxBribeDeputyFromVerkhovnaRada(faction: Faction) {
        faction.getDeputyMaxBribe()
    }

    getAllDeputyFaction(faction: Faction) {
        faction.getAllDeputies()
    }
}