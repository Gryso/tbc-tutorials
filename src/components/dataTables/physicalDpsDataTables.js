import {
  damageReductionOfArmor,
  expertiseFor1PercentReduction,
  expertiseRatingFor1Expertise,
  glancingChanceForLevel, meleeHasteRatingForReduction
} from "../../data/statsFormulas";
import Icon from "../gameElements/icon/Icon";
import React from "react";
import Table from "../table/Table";
import round from "../../utils/round";
import {orderedArmorAmounts} from "../../data/bossArmor";
import {Druid, Hunter, Paladin, Rogue, Shaman, Warrior} from "../gameElements/class/classes";

export const GlancingBlowDataTable = () => (
  <Table cellAlign="center">
    <caption>Glancing Blow chance per enemy level</caption>
    <thead>
      <tr>
        <th>Enemy Level</th>
        <th>Chance</th>
        <th>Damage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>70</td>
        <td>{glancingChanceForLevel(70)}%</td>
        <td>??</td>
      </tr>
      <tr>
        <td>71</td>
        <td>{glancingChanceForLevel(71)}%</td>
        <td>??</td>
      </tr>
      <tr>
        <td>72</td>
        <td>{glancingChanceForLevel(72)}%</td>
        <td>??</td>
      </tr>
      <tr>
        <td>73(<Icon type="skull" />)</td>
        <td>{glancingChanceForLevel(73)}%</td>
        <td>75%</td>
      </tr>
    </tbody>
  </Table>
)

export const ExpertiseDataTable = ({isTank}) => (
  <Table cellAlign="center">
    <caption>Expertise and Expertise rating required for enemy of different levels:</caption>
    <thead>
      <tr>
        <th>Enemy Level</th>
        <th>Expertise{isTank ? " (soft/dodge)" : ""}</th>
        <th>Expertise rating{isTank ? " (soft/dodge)" : ""}</th>
        {isTank ?  <th>Expertise (hard/parry)</th> : null}
        {isTank ?  <th>Expertise rating (hard/parry)</th> : null}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>70</td>
        <td>{expertiseFor1PercentReduction() * 5}</td>
        <td>{Math.ceil(expertiseFor1PercentReduction() * expertiseRatingFor1Expertise() * 5)}</td>
        {isTank ?  <td>??</td> : null}
        {isTank ?  <td>??</td> : null}
      </tr>
      <tr>
        <td>71</td>
        <td>{expertiseFor1PercentReduction() * 5.5}</td>
        <td>{Math.ceil(expertiseFor1PercentReduction() * expertiseRatingFor1Expertise() * 5.5)}</td>
        {isTank ?  <td>??</td> : null}
        {isTank ?  <td>??</td> : null}
      </tr>
      <tr>
        <td>72</td>
        <td>{expertiseFor1PercentReduction() * 6}</td>
        <td>{Math.ceil(expertiseFor1PercentReduction() * expertiseRatingFor1Expertise() * 6)}</td>
        {isTank ?  <td>??</td> : null}
        {isTank ?  <td>??</td> : null}
      </tr>
      <tr>
        <td>73(<Icon type="skull" />)</td>
        <td>{expertiseFor1PercentReduction() * 6.5}</td>
        <td>{Math.ceil(expertiseFor1PercentReduction() * expertiseRatingFor1Expertise() * 6.5)}</td>
        {isTank ?  <td>{expertiseFor1PercentReduction() * 14}</td> : null}
        {isTank ?  <td>{Math.ceil(expertiseFor1PercentReduction() * expertiseRatingFor1Expertise() * 14)}</td> : null}
      </tr>
    </tbody>
  </Table>
)

export const MeleeHasteDataTable = () => (
  <Table>
    <caption>Haste Rating for level of reduction</caption>
    <thead>
      <tr>
        <th>Reduction</th>
        <th>Haste Rating Required</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(99 / 100))}</td>
      </tr>
      <tr>
        <td>10%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(9 / 10))}</td>
      </tr>
      <tr>
        <td>20%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(8 / 10))}</td>
      </tr>
      <tr>
        <td>30%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(7 / 10))}</td>
      </tr>
      <tr>
        <td>40%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(6 / 10))}</td>
      </tr>
      <tr>
        <td>50%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(5 / 10))}</td>
      </tr>
      <tr>
        <td>60%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(4 / 10))}</td>
      </tr>
      <tr>
        <td>70%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(3 / 10))}</td>
      </tr>
      <tr>
        <td>80%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(2 / 10))}</td>
      </tr>
      <tr>
        <td>90%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(1 / 10))}</td>
      </tr>
      <tr>
        <td>99%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(1 / 100))}</td>
      </tr>
      <tr>
        <td>100%</td>
        <td>{Math.ceil(meleeHasteRatingForReduction(0))}</td>
      </tr>
    </tbody>
  </Table>
);

export const ArmorPenetrationOnFixedArmorDataTable = () => {
  const bossArmor = 5000;
  const bossArmorReduction = damageReductionOfArmor(bossArmor, 70, true)
  const armorPenetrationIncrement = 500;

  return (
    <Table cellAlign="center" fillFirstCell={true}>
      <caption>Damage increase per Armor Penetration on {bossArmor} Armor Boss</caption>
      <thead>
        <tr>
          <th>Penetration</th>
          <th>Reduced Armor</th>
          <th>Damage Reduction</th>
          <th>Reduction Decrease</th>
          <th>Damage Increase per Penetration</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(Array(bossArmor/armorPenetrationIncrement + 1)).map((item, index) => {
          const armorPenetration = Math.min(index * armorPenetrationIncrement, bossArmor)
          const armor = Math.max(bossArmor - armorPenetration, 0);
          const armorReduction = damageReductionOfArmor(armor, 70, true);
          const reductionDecrease = round(bossArmorReduction - armorReduction)
          return (
            <tr key={index}>
              <td>{armorPenetration}</td>
              <td>{armor}</td>
              <td>{damageReductionOfArmor(armor, 70, true)}%</td>
              <td>{reductionDecrease}%</td>
              <td>{round(reductionDecrease / armorPenetration) || 0}%</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export const FixedArmorPenetrationOnArmorDataTable = () => {
  const armorPenetration = 1000;
  const armorIncrement = 1000;
  return (
    (
      <Table cellAlign="center" fillFirstCell={true}>
        <caption>Damage increase of fixed Armor Penetration ({armorPenetration}) on different Armor</caption>
        <thead>
          <tr>
            <th>Armor</th>
            <th>Damage Reduction</th>
            <th>Reduced Armor</th>
            <th>Reduction Decrease</th>
            <th>Damage Increase per Penetration</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(7)).map((item, index) => {
            const armor = armorPenetration + index * armorIncrement;
            const armorReduction = damageReductionOfArmor(armor, 70, true);
            const reducedArmor = Math.max(armor - armorPenetration, 0)
            const reducedArmorReduction = damageReductionOfArmor(reducedArmor, 70, true)
            const reductionDecrease = round(armorReduction - reducedArmorReduction)
            return (
              <tr key={index}>
                <td>{armor}</td>
                <td>{armorReduction}%</td>
                <td>{reducedArmor}</td>
                <td>{reductionDecrease}%</td>
                <td>{round(reductionDecrease / armorPenetration) || 0}%</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  )
}



export const AmountOfArmorValuesDataTable = () => {
  return (
    (
      <Table cellAlign="center">
        <caption>Amount of different Armor values you can encounter</caption>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Armor</th>
            <th>Proportion</th>
          </tr>
        </thead>
        <tbody>
          {orderedArmorAmounts.map((datum, index) => (
            <tr key={index}>
              <td>{datum.amount}</td>
              <td>{datum.armor}</td>
              <td>{datum.proportion}%</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  )
}

export const DpsIncreasePerCritChancePercent = () => {
  return (
    (
      <section>
        <h5>DPS increase per 1% of Critical Strike Chance for different classes:</h5>
        <ul>
          <li>
            <Druid />: <strong>1.2%</strong>
          </li>
          <li>
            <Hunter />: <strong>~1.19%</strong> (1.3% for Ranged Attacks and 1% for Pet Attacks)
          </li>
          <li>
            <Paladin />: <strong>1%</strong>
          </li>
          <li>
            <Rogue />: <strong>~1.3%</strong> (exclude auto attack and finishing moves)
          </li>
          <li>
            <Shaman />: <strong>1%</strong>
          </li>
          <li>
            <Warrior />: <strong>1.2%</strong>
          </li>
        </ul>
      </section>
    )
  )
}
