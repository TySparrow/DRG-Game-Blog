import Miner from "./Miner.js";

const gunner = new Miner(
  "Gunner.jpg",
  "Gunner",
  {
    name: "'Thunderhead' Heavy Autocannon",
    perks: [
      "Expanded Ammo Bags: +220 Max Ammo",
      "Lighter Barrel Assembly: +0.6 Min. Rate of Fire, x1.5 RoF Scaling Rate",
      "Loaded Rounds: +2 Area Damage",
      "Shrapnel Rounds: 0.6 Area of Effect Radius",
      "Feedback Loop: x1.1 Direct and Area Damage when at Max Rate of Fire",
    ],
    overclock: [
      "Big Bertha",
      "+12 Direct Damage, x0.7 Base Spread, x0.5 Magazine Size, -110 Max Ammo, -1.5 Max Rate of Fire",
    ],
  },
  {
    name: '"Bulldog" Heavy Revolver',
    perks: [
      "Perfect Weight Balance: x0.3 Base Spread",
      "Increased Caliber Rounds: +10 Direct Damage",
      "Hollow-Point Bullets: +35% Weakpoint Bonus",
      "High Velocity Rounds: +10 Direct Damage",
      "Dead-Eye: No aim penalty while moving",
    ],
    overclock: [
      "Six Shooter",
      "+2 Magazine Size, +6 Max Ammo, +2 Rate of Fire, x1.5 Base Spread, +0.5s Reload Time",
    ],
  },
  "Cluster Grenade", //Throwable
  {
    name: "Zipline Launcher",
    perks: [
      "Upgraded Connection Joint: Increases the operational angle of the zipline",
      "Reinforced Cable: Zipline can span a greater distance",
      "Disconnection Protection: Take less damage if you fall off the zipline",
    ],
  },
  {
    name: "Shield Generator",
    perks: [
      "Improved Projector: Shield projects a larger area",
      "Larger Capacitors: Shield lasts longer",
      "Supercharged Coils: Shield projects a larger area",
    ],
  }
);
const driller = new Miner(
  "Driller.jpg",
  "Driller",
  {
    name: "'CRSPR' Flamethrower",
    perks: [
      "High Capacity Tanks: +25 Tank Size",
      "Unfiltered Fuel: +4 Damage per Particle",
      "More Fuel: +75 Max Fuel",
      "Sticky Flame Duration: +3 sec Sticky Flame Duration",
      "Targets Explode: If the direct stream kills an enemy, there's a 50% chance that they will explode and deal 55 Fire Damage and 55 Heat to all enemies within a 3m radius.",
    ],
    overclock: [
      "Sticky Additive",
      "+1 Damage per Particle, +1 sec Sticky Flame duration",
    ],
  },
  {
    name: "Experimental Plasma Charger",
    perks: [
      "Larger Battery: +25 Battery Size",
      "Overcharged Plasma Accelerator: +25% Regular Shot Velocity",
      "Hollow-Point Bullets: +35% Weakpoint Bonus",
      "High Density Battery: +24 Battery Size",
      "Thin Containment Field: Shoot the Charged Shot with a Regular Shot before it impacts anything to make it detonate for 240 Damage and carve terrain within a 3m radius. Additionally: x0.8 Heat per Regular Shot and x0.8 Heat per Charged Shot.",
    ],
    overclock: [
      "Heavy Hitter",
      "x1.6 Regular Shot Direct and Area Damage, x1.5 Heat per Regular Shot, -32 Battery Size",
    ],
  },
  "Impact Axe", //Throwable
  {
    name: "Reinforced Power Drills",
    perks: [
      "Hardened Drill Tips: Drill Faster",
      "Magnetic Refrigeration: Faster cooling for the drills when not in action",
      "Supercharged Motor: Drill Faster",
      "Increased Tank Pressure: Carries more fuel",
    ],
  },
  {
    name: "Satchel Charge",
    perks: [
      "Fragmented Shell: Larger Damage Radius",
      "Kill Switch: Disarm and pick up an unused charge",
      "Volatile Compound: New more powerful experimental explosives but can detonate if damaged.",
      "Rock Mover: Blast carves a much larger area.",
    ],
  }
);

// Function to generate HTML content for perks
function generatePerksHTML(perksArray) {
  if (!perksArray || perksArray.length === 0) return "";
  let htmlContent = "<ul>";
  perksArray.forEach((perk) => {
    htmlContent += `<li>${perk}</li>`;
  });
  htmlContent += "</ul>";
  return htmlContent;
}

/**
 * Function to generate HTML content for a class object
 * @param {*} classObject
 * Initialize empty string to store HTML content
 * Wrap entire black in div for styling for each class it generates
 *
 * @param {*} classHTML
 *
 * Adds miner class name to the heading
 * Fill in Initial contents of primary weapon
 * Call generatePerksHTML function to loop through perk array and fill into a list
 * Repeat for secondary weapon
 *
 * @returns classHTML
 */
function generateClassHTML(classObject) {
  if (
    classObject.minerClass == "Gunner" ||
    classObject.minerClass == "Driller"
  ) {
    let classHTML = "";

    classHTML += `<div class="class-container">`;
    classHTML += `<h2 class="miner-class">Class: ${classObject.minerClass}</h2>`;

    classHTML += `<h3>Primary Weapon: ${classObject.primaryWeapon.name}</h3>`;
    classHTML += `<h3>Overclock: ${classObject.primaryWeapon.overclock[0]}</h3>`;
    classHTML += `<p>Description: ${classObject.primaryWeapon.overclock[1]}</p>`;

    if (classObject.primaryWeapon && classObject.primaryWeapon.perks) {
      classHTML += "<h3>Primary Weapon Perks:</h3>";
      classHTML += generatePerksHTML(classObject.primaryWeapon.perks);
    }

    classHTML += `<h3>Secondary Weapon: ${classObject.secondaryWeapon.name}</h3>`;
    classHTML += `<h3>Overclock: ${classObject.secondaryWeapon.overclock[0]}</h3>`;
    classHTML += `<p>Description: ${classObject.secondaryWeapon.overclock[1]}</p>`;

    if (classObject.secondaryWeapon && classObject.secondaryWeapon.perks) {
      classHTML += "<h3>Secondary Weapon Perks:</h3>";
      classHTML += generatePerksHTML(classObject.secondaryWeapon.perks);
    }

    classHTML += `<h3>Throwable: ${classObject.throwable}</h3>`;
    classHTML += `</div>`;
    return classHTML;
  }
}

/**
 * Select the element id in index.html for main-container
 * Populate images
 * Populate info sections
 * Append the main-container elements
 *
 */
function populateClassesHTML() {
  const mainContainer = document.getElementById("main-container");

  const gunnerImage = document.createElement("img");
  gunnerImage.src = "Gunner.jpg";
  gunnerImage.alt = "Gunner";
  gunnerImage.classList.add("miner-image");

  const drillerImage = document.createElement("img");
  drillerImage.src = "Driller.jpg";
  drillerImage.alt = "Driller";
  drillerImage.classList.add("miner-image");

  const gunnerInfo = generateClassHTML(gunner);
  const drillerInfo = generateClassHTML(driller);

  mainContainer.appendChild(gunnerImage);
  mainContainer.insertAdjacentHTML("beforeend", gunnerInfo);
  mainContainer.appendChild(drillerImage);
  mainContainer.insertAdjacentHTML("beforeend", drillerInfo);
}

populateClassesHTML();
