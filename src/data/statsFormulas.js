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

const ratingMultipliers = {
  WepS: 3.94, // TODO neviem co to je
  defense: 2.3654,
  defenseSkill: 25,
  dodge: 18.92,
  parry: 31.54,
  block: 7.88,
  meleeHit: 15.77,
  meleeCrit: 22.08,
  meleeHaste: 15.77,
  spellHit: 12.62,
  spellCrit: 22.08,
  spellHaste: 15.77,
  resilience: 39.42,
};

function roundOnTwoDecimals(number) {
  return +number.toFixed(4);
}

// For one percent
export const ratingFor1Percent = (rating) => ratingMultipliers[rating];
export const agilityFor1PercentDodge = (wowClass) => statsMultipliers[wowClass].agiToDodge;
export const agilityFor1PercentCrit = (wowClass) => statsMultipliers[wowClass].agiToCrit;
export const intellectFor1Crit = (intellect, wowClass) => statsMultipliers[wowClass].intToCrit;

// Defenses
export const armorCapForLevel = (level) => (1402.5 * level) - 66502.5;
export const resistanceCapForLevel = (level) => 5 * level;
export const blockRatingToBlock = (blockRating) => roundOnTwoDecimals(blockRating / ratingMultipliers.block);
export const defenseRatingToDefense = (defenseRating) => roundOnTwoDecimals(defenseRating / ratingMultipliers.defense);
export const defenseSkillToBonus = (defenseSkill) => roundOnTwoDecimals(defenseSkill / ratingMultipliers.defenseSkill);
export const dodgeRatingToDodge = (dodgeRating) => roundOnTwoDecimals(dodgeRating / ratingMultipliers.dodge);
export const agilityToDodge = (agility, wowClass) => roundOnTwoDecimals(agility / statsMultipliers[wowClass].agiToDodge);
export const parryRatingToParry = (parryRating) => roundOnTwoDecimals(parryRating / ratingMultipliers.parry);
export const resilienceRatingToCritReduction = (resilience) => roundOnTwoDecimals(resilience / ratingMultipliers.resilience);

// Melee
export const critRatingToCrit = (critRating) => roundOnTwoDecimals(critRating / ratingMultipliers.meleeCrit);
export const agilityToCrit = (agility, wowClass) => roundOnTwoDecimals(agility / statsMultipliers[wowClass].agiToCrit);
export const hasteRatingToSpeed = (hasteRating) => roundOnTwoDecimals(hasteRating / ratingMultipliers.meleeHaste);
export const hitRatingToHitChance = (hitRating) => roundOnTwoDecimals(hitRating / ratingMultipliers.meleeHit);
export const glancingChanceForLevel = (level) => 10 + (level * 5) - 350;
export const glancingDamageForLevel = (level) => null; // TODO

// Spell
export const spellCritRatingToCrit = (critRating) => roundOnTwoDecimals(critRating / ratingMultipliers.spellCrit);
export const intellectToCrit = (intellect, wowClass) => roundOnTwoDecimals(intellect * statsMultipliers[wowClass].intToCrit);
export const spellHasteRatingToSpeed = (hasteRating) => roundOnTwoDecimals(hasteRating / ratingMultipliers.spellHaste);
export const spellHitRatingToHitChance = (hitRating) => roundOnTwoDecimals(hitRating / ratingMultipliers.spellHit);


export default statsMultipliers;
