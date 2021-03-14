import round from "../utils/round";

const statsMultipliers = {
  "druid": {
    baseDodge: -1.87,
    agiToDodge: 0.0680,
    agiToCrit: 25.00,
    intToCrit: 80.00
  },
  "hunter": {
    baseDodge: -5.45,
    agiToDodge: 0.04,
    agiToCrit: 40.00,
    intToCrit: 80.00
  },
  "mage": {
    baseDodge: 3.45,
    agiToDodge: 0.04,
    agiToCrit: 25.00,
    intToCrit: 80.00
  },
  "paladin": {
    baseDodge: 0.65,
    agiToDodge: 0.0506,
    agiToCrit: 25.00,
    intToCrit: 80.00
  },
  "priest": {
    baseDodge: 3.18,
    agiToDodge: 0.04,
    agiToCrit: 25.00,
    intToCrit: 80.00
  },
  "rogue": {
    baseDodge: -0.59,
    agiToDodge: 0.05,
    agiToCrit: 40.00,
    intToCrit: 0
  },
  "shaman": {
    baseDodge: 1.67,
    agiToDodge: 0.04,
    agiToCrit: 25.00,
    intToCrit: 80
  },
  "warlock": {
    baseDodge: 2.03,
    agiToDodge: 0.04,
    agiToCrit: 24.69,
    intToCrit: 81.97
  },
  "warrior": {
    baseDodge: 0.75,
    agiToDodge: 0.0333,
    agiToCrit: 33.00,
    intToCrit: 0,
  }
};

export default statsMultipliers;

export const ratingMultipliers = {
  // defense
  defense: 2.3654,
  dodge: 18.92,
  parry: 23.65,
  block: 7.88,
  resilience: 39.42,
  // melee
  meleeHit: 15.76,
  meleeCrit: 22.08,
  meleeHaste: 15.77,
  expertise: 3.9423,
  // spell
  spellHit: 12.62,
  spellCrit: 22.08,
  spellHaste: 15.77,
};

export const attackPowerMultiplier = 14;
export const expertiseMultiplier = 4;
export const defenseMultiplier = 25;
export const dualWieldingMissIncrease = 19;
export const manaPerIntellect = 15;
export const healthPerStamina = 10;
export const healthPerStaminaTauren = 10.5;

// For one percent
export const ratingFor1Percent = (rating) => ratingMultipliers[rating];
export const agilityFor1PercentDodge = (wowClass) => statsMultipliers[wowClass].agiToDodge;
export const agilityFor1PercentCrit = (wowClass) => statsMultipliers[wowClass].agiToCrit;
export const intellectFor1Crit = (wowClass) => statsMultipliers[wowClass].intToCrit;
export const expertiseFor1PercentReduction = () => expertiseMultiplier;
export const expertiseRatingFor1Expertise = () => ratingMultipliers.expertise;
export const defenseFor1PercentReduction = () => defenseMultiplier;
export const defenseRatingFor1Defense = () => ratingMultipliers.defense;

// Defenses
export const armorCapForLevel = (level = 73) => (1402.5 * level) - 66502.5;
export const damageReductionOfArmor = (armor, attackerLevel = 70, percentage = false) => {
  if (percentage) {
    return round((armor / (armor + (467.5 * attackerLevel - 22167.5)) * 100), 2);
  }
  return round(armor / (armor + (467.5 * attackerLevel - 22167.5)), 2);
}
export const resistanceCapForLevel = (level) => 5 * level;
export const blockRatingToBlock = (blockRating) => round(blockRating / ratingMultipliers.block);
export const defenseRatingToDefense = (defenseRating) => round(defenseRating / ratingMultipliers.defense);
export const defenseSkillToBonus = (defenseSkill) => round(defenseSkill / defenseMultiplier);
export const dodgeRatingToDodge = (dodgeRating) => round(dodgeRating / ratingMultipliers.dodge);
export const agilityToDodge = (agility, wowClass) => round(agility / statsMultipliers[wowClass].agiToDodge);
export const parryRatingToParry = (parryRating) => round(parryRating / ratingMultipliers.parry);
export const resilienceRatingToCritReduction = (resilience) => round(resilience / ratingMultipliers.resilience);
export const staminaToHealth = (stamina, tauren = false) => stamina * (tauren ? healthPerStaminaTauren : healthPerStamina);

// Melee
export const critRatingToCrit = (critRating) => round(critRating / ratingMultipliers.meleeCrit);
export const agilityToCrit = (agility, wowClass) => round(agility / statsMultipliers[wowClass].agiToCrit);
export const hasteRatingToSpeed = (hasteRating) => round(hasteRating / ratingMultipliers.meleeHaste);
export const hitRatingToHitChance = (hitRating) => round(hitRating / ratingMultipliers.meleeHit);
export const expertiseRatingToExpertise = (expertiseRating) => Math.floor(expertiseRating / ratingMultipliers.expertise);
export const expertiseToReduction = (expertise) => round(expertise / expertiseMultiplier);
export const glancingChanceForLevel = (level) => 10 + (level * 5) - 350;
export const glancingDamageForLevel = (level) => null; // TODO
export const meleeHasteRatingForReduction = (reduction) => round(1570 * (1 / reduction - 1));

export const missChanceForLevel = (level = 73, wielding = 1) => {
  const defenseSkill = level * 5;
  const weaponsSkill = 70 * 5;
  if (defenseSkill - weaponsSkill > 10) {
    const wieldingBase = wielding === 1 ? 7 : 26;
    return wieldingBase + (defenseSkill - weaponsSkill - 10) * 0.4;
  } else {
    const wieldingBase = wielding === 1 ? 5 : 24;
    return wieldingBase + (defenseSkill - weaponsSkill) * 0.1;
  }
};

// Spell
export const spellCritRatingToCrit = (critRating) => round(critRating / ratingMultipliers.spellCrit);
export const intellectToCrit = (intellect, wowClass) => round(intellect / statsMultipliers[wowClass].intToCrit);
export const intellectToMana = (intellect) => round(intellect * manaPerIntellect);
export const spellHasteRatingToSpeed = (hasteRating) => round(1 - (1 / (1 + (hasteRating) / 1570)));
export const spellHitRatingToHitChance = (hitRating) => round(hitRating / ratingMultipliers.spellHit);
export const spellHasteRatingForReduction = (reduction) => round(1570 * (1 / reduction - 1));

export const spellMissChanceForLevel = (level = 73) => {
  const playerLevel = 70;
  let result;
  if (level - playerLevel > 2) {
    result = -16 + (level - playerLevel) * 11;
  } else {
    result = 4 + (level - playerLevel);
  }

  return Math.min(Math.max(parseInt(result), 1), 99);
};

export const manaRegen = (spirit, intellect) => Math.ceil(5 * (0.001 + Math.sqrt(intellect) * spirit * 0.009327));
// export const manaRegen = (spirit, intellect) => 5 * (0.001 + Math.sqrt(intellect) * spirit * 0.009327)

export const averageDamageReductionFromResistance = (resistance = 15, casterLevel = 70) => {
  return round((resistance / (casterLevel * 5)) * 0.75);
};

export const spellResistanceForLevel = (targetLevel = 70, effectiveResistance = 0) => {
  const playerLevel = 70;
  return effectiveResistance + Math.max(parseInt((targetLevel - playerLevel) * 5), 0);
};
