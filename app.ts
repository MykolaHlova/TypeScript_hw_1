import {Deputy, Faction, VerkhovnaRada} from "./models";

//Create deputy
const Petro = new Deputy('Petro', 'Savchyk', 28, true, 500000, 75, 178);
const Oleg = new Deputy('Oleg', 'Hryb', 24, false, 1500000, 80, 165);
const Oksana = new Deputy('Oksana', 'Hrynyk', 30, true, 2000000, 50, 168);
const Mykola = new Deputy('Mykola', 'Hlova', 27, false, 500000, 83, 184);
const Misha = new Deputy('Misha', 'Darmoriz', 32, true, 5000000, 75, 181);
const Vitalik = new Deputy('Vitalik', 'Petryk', 28, false, 800000, 80, 175);

//Create faction
const factionZelenykh = new Faction([]);
factionZelenykh.addDeputy(Petro);
factionZelenykh.addDeputy(Misha);
factionZelenykh.addDeputy(Mykola);

const factionDemocratic = new Faction([]);
factionDemocratic.addDeputy(Oleg);
factionDemocratic.addDeputy(Oksana);
factionDemocratic.addDeputy(Vitalik);

console.log(factionZelenykh);
console.log(factionDemocratic);

//Create 'Verhovna Rada'
const VR = new VerkhovnaRada([]);
VR.addFaction(factionZelenykh);

console.log(VR);
