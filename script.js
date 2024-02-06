import Miner from "./Miner.js";

const gunner = new Miner(
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
    overclock: {
      name: "Big Bertha",
      stats:
        "+12 Direct Damage, x0.7 Base Spread, x0.5 Magazine Size, -110 Max Ammo, -1.5 Max Rate of Fire",
    },
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
    overclock: {
      name: "Six Shooter",
      stats:
        "+2 Magazine Size, +6 Max Ammo, +2 Rate of Fire, x1.5 Base Spread, +0.5s Reload Time",
    },
  },
  {
    name: "Cluster Grenade",
    description:
      "When one grenade just won't cut it. This thing is basically Armageddon in the palm of your hand.",
  },
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
    overclock: {
      name: "Sticky Additive",
      stats: "+1 Damage per Particle, +1 sec Sticky Flame duration",
    },
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
    overclock: {
      name: "Heavy Hitter",
      stats:
        "x1.6 Regular Shot Direct and Area Damage, x1.5 Heat per Regular Shot, -32 Battery Size",
    },
  },
  {
    name: "Impact Axe",
    description:
      "The Impact Axe is the connoisseur choice for the dwarf of tomorrow. Compact and easy to carry, extends to full size upon throwing, and discharges a lethal burst of electricity upon impact with any living target. Can be safely retrieved by the user in case of bad aim.",
  },
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

const main = document.querySelector(".main-content");

const content = `<div class="miner-container">
${generateClassHTML(gunner.minerClass)}
${generateClassHTML(driller.minerClass)}</div>`;

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

// Function to generate HTML content for a class object
function generateClassHTML(classObject) {
  console.log(classObject);
  if (
    classObject.minerClass == "Gunner" ||
    classObject.minerClass == "Driller"
  ) {
    let classHTML = ""; // Initialize empty string to store HTML content
    classHTML += `<div class="class-container">`;
    classHTML += `<h2 class="miner-class">Class: ${classObject.minerClass}</h2>`; // Add class name as h2 heading

    classHTML += `<h3>Primary Weapon: ${classObject.primaryWeapon.name}</h3>`;

    console.log(classObject.primaryWeapon);

    if (classObject.primaryWeapon && classObject.primaryWeapon.perks) {
      console.log(classObject.primaryWeapon.perks);
      classHTML += "<h3>Primary Weapon Perks:</h3>"; // Add heading for primary weapon perks
      classHTML += generatePerksHTML(classObject.primaryWeapon.perks); // Generate HTML content for primary weapon perks
    }

    classHTML += `<h3>Secondary Weapon: ${classObject.secondaryWeapon.name}</h3>`;
    // Check if class object has perks array within secondaryWeapon
    if (classObject.secondaryWeapon && classObject.secondaryWeapon.perks) {
      //console.log('Primary weapon perks:', classObject.primaryWeapon.perks);
      classHTML += "<h3>Secondary Weapon Perks:</h3>"; // Add heading for secondary weapon perks
      classHTML += generatePerksHTML(classObject.secondaryWeapon.perks); // Generate HTML content for secondary weapon perks
    }
    classHTML += `</div>`;
    return classHTML; // Return generated HTML content
  }
}

// Populate HTML content for all classes
function populateClassesHTML() {
  let allClassesHTML = ""; // Initialize empty string for all classes HTML

  // Generate HTML content for each class object
  allClassesHTML += generateClassHTML(gunner); // Generate HTML content for gunner class
  allClassesHTML += generateClassHTML(driller); // Generate HTML content for driller class

  main.innerHTML = allClassesHTML; // Populate HTML content in container
}

populateClassesHTML();
