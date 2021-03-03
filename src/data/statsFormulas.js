import React from "react";

const statsMultipliers = {
  "druid": {
    baseDodge: 0,
    agiToDodge: 0.068,
    agiToCrit: 25.00,
    intToCrit: 80.00
  },
  "hunter": {
    baseDodge: 0,
    agiToDodge: 0,
    agiToCrit: 40.00,
    intToCrit: 80.00
  },
  "mage": {
    baseDodge: 0,
    agiToDodge: 0,
    agiToCrit: 25.00,
    intToCrit: 80.00
  },
  "paladin": {
    baseDodge: 0,
    agiToDodge: 0,
    agiToCrit: 25.00,
    intToCrit: 80.00
  },
  "priest": {
    baseDodge: 0,
    agiToDodge: 0,
    agiToCrit: 25.00,
    intToCrit: 80.00
  },
  "rogue": {
    baseDodge: 0,
    agiToDodge: 0,
    agiToCrit: 40.00,
    intToCrit: 0
  },
  "shaman": {
    baseDodge: 0,
    agiToDodge: 0,
    agiToCrit: 25.00,
    intToCrit: 80
  },
  "warlock": {
    baseDodge: 0,
    agiToDodge: 0,
    agiToCrit: 24.69,
    intToCrit: 81.97
  },
  "warrior": {
    baseDodge: 0,
    agiToDodge: 0,
    agiToCrit: 33.00,
    intToCrit: 0,
  }
};

export default statsMultipliers;

const ratingMultipliers = {
  WepS: 3.94, // TODO neviem co to je
  defense: 2.3654,
  dodge: 18.92,
  parry: 31.54,
  block: 7.88,
  meleeHit: 15.77,
  meleeCrit: 22.08,
  meleeHaste: 15.77,
  expertise: 3.9423,
  spellHit: 12.62,
  spellCrit: 22.08,
  spellHaste: 15.77,
  resilience: 39.42,
};

const expertiseMultiplier = 4;
const defenseMultiplier = 25;

function roundOnTwoDecimals(number) {
  return +number.toFixed(4);
}


// For one percent
export const ratingFor1Percent = (rating) => ratingMultipliers[rating];
export const agilityFor1PercentDodge = (wowClass) => statsMultipliers[wowClass].agiToDodge;
export const agilityFor1PercentCrit = (wowClass) => statsMultipliers[wowClass].agiToCrit;
export const intellectFor1Crit = (intellect, wowClass) => statsMultipliers[wowClass].intToCrit;
export const expertiseFor1PercentReduction = () => expertiseMultiplier;
export const expertiseRatingFor1Expertise = () => ratingMultipliers.expertise;
export const defenseFor1PercentReduction = () => defenseMultiplier;
export const defenseRatingFor1Defense = () => ratingMultipliers.defense;

// Defenses
export const armorCapForLevel = (level) => (1402.5 * level) - 66502.5;
export const resistanceCapForLevel = (level) => 5 * level;
export const blockRatingToBlock = (blockRating) => roundOnTwoDecimals(blockRating / ratingMultipliers.block);
export const defenseRatingToDefense = (defenseRating) => roundOnTwoDecimals(defenseRating / ratingMultipliers.defense);
export const defenseSkillToBonus = (defenseSkill) => roundOnTwoDecimals(defenseSkill / defenseMultiplier);
export const dodgeRatingToDodge = (dodgeRating) => roundOnTwoDecimals(dodgeRating / ratingMultipliers.dodge);
export const agilityToDodge = (agility, wowClass) => roundOnTwoDecimals(agility / statsMultipliers[wowClass].agiToDodge);
export const parryRatingToParry = (parryRating) => roundOnTwoDecimals(parryRating / ratingMultipliers.parry);
export const resilienceRatingToCritReduction = (resilience) => roundOnTwoDecimals(resilience / ratingMultipliers.resilience);

// Melee
export const critRatingToCrit = (critRating) => roundOnTwoDecimals(critRating / ratingMultipliers.meleeCrit);
export const agilityToCrit = (agility, wowClass) => roundOnTwoDecimals(agility / statsMultipliers[wowClass].agiToCrit);
export const hasteRatingToSpeed = (hasteRating) => roundOnTwoDecimals(hasteRating / ratingMultipliers.meleeHaste);
export const hitRatingToHitChance = (hitRating) => roundOnTwoDecimals(hitRating / ratingMultipliers.meleeHit);
export const expertiseRatingToExpertise = (expertiseRating) => Math.floor(expertiseRating / ratingMultipliers.expertise);
export const expertiseToReduction = (expertise) => roundOnTwoDecimals(expertise / expertiseMultiplier);
export const glancingChanceForLevel = (level) => 10 + (level * 5) - 350;
export const glancingDamageForLevel = (level) => null; // TODO

// Spell
export const spellCritRatingToCrit = (critRating) => roundOnTwoDecimals(critRating / ratingMultipliers.spellCrit);
export const intellectToCrit = (intellect, wowClass) => roundOnTwoDecimals(intellect * statsMultipliers[wowClass].intToCrit);
export const spellHasteRatingToSpeed = (hasteRating) => roundOnTwoDecimals(hasteRating / ratingMultipliers.spellHaste);
export const spellHitRatingToHitChance = (hitRating) => roundOnTwoDecimals(hitRating / ratingMultipliers.spellHit);

export const missChanceForLevel = (level = 73, wielding = 1) => {
  const defenseSkill = level * 5;
  const weaponsSkill = 70 * 5;
  if (defenseSkill - weaponsSkill > 10) {
    const wieldingBase = wielding === 1 ? 7 : 26
    return wieldingBase + (defenseSkill - weaponsSkill - 10) * 0.4
  } else {
    const wieldingBase = wielding === 1 ? 5 : 24
    return wieldingBase + (defenseSkill - weaponsSkill) * 0.1
  }
}

export const spellResistChanceForLevel = (level = 73) => {
  const playerLevel = 70;
  let result
  if (level - playerLevel > 2) {
    result = - 16 + (level - playerLevel) * 11 - 1
  } else {
    result = 4 + (level - playerLevel) - 1
  }

  return Math.min(Math.max(parseInt(result), 99), 1);
}
