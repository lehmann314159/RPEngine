import * as SW from "./SimpleWorld";

let Mike = new SW.Character();
Mike.origin = "Human";
Mike.luckyPlanet = "Moon";
Mike.archetype = "Sneaker";

Mike.setTraitValue("Strength", 11);
Mike.setTraitValue("Dexterity", 15);
Mike.setTraitValue("Constitution", 11);
Mike.setTraitValue("Intelligence", 8);
Mike.setWalkingSpeed();

Mike.applyLuckyPlanet();
Mike.applyHealthBonus();
Mike.applyProficiencies();
Mike.applyInabilities();
Mike.applyResistances();

console.log(Mike);
