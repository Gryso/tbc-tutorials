import {manaRegen, spellHasteRatingForReduction} from "../../data/statsFormulas";
import React from "react";
import Table from "../table/Table";
import round from "../../utils/round";

export const SpellHasteDataTable = () => (
  <Table>
    <caption>Spell Haste Rating for level of reduction</caption>
    <thead>
      <tr>
        <th>Reduction</th>
        <th>Spell Haste Rating Required</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(99 / 100))}</td>
      </tr>
      <tr>
        <td>10%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(9 / 10))}</td>
      </tr>
      <tr>
        <td>20%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(8 / 10))}</td>
      </tr>
      <tr>
        <td>30%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(7 / 10))}</td>
      </tr>
      <tr>
        <td><strong>1/3</strong></td>
        <td><strong>{Math.ceil(spellHasteRatingForReduction(2 / 3))} (This is Soft Cap)</strong></td>
      </tr>
      <tr>
        <td>40%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(6 / 10))}</td>
      </tr>
      <tr>
        <td>50%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(5 / 10))}</td>
      </tr>
      <tr>
        <td>60%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(4 / 10))}</td>
      </tr>
      <tr>
        <td>2/3</td>
        <td>{Math.ceil(spellHasteRatingForReduction(1 / 3))}</td>
      </tr>
      <tr>
        <td>70%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(3 / 10))}</td>
      </tr>
      <tr>
        <td>80%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(2 / 10))}</td>
      </tr>
      <tr>
        <td>90%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(1 / 10))}</td>
      </tr>
      <tr>
        <td>99%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(1 / 100))}</td>
      </tr>
      <tr>
        <td>100%</td>
        <td>{Math.ceil(spellHasteRatingForReduction(0))}</td>
      </tr>
    </tbody>
  </Table>
);


export const PointsSplitBetweenSpiritAndIntellectDataTable = () => (
  <Table cellAlign="center">
    <caption>1000 points split between Spirit and Intellect</caption>
    <thead>
      <tr>
        <th>Spirit</th>
        <th>Intellect</th>
        <th>MP5</th>
        <th>MP5 per Spirit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1000</td>
        <td>0</td>
        <td>{manaRegen(1000, 0)}</td>
        <td>{round(manaRegen(1000, 0)/1000, 3, true)}</td>
      </tr>
      <tr>
        <td>900</td>
        <td>100</td>
        <td>{manaRegen(900, 100)}</td>
        <td>{round(manaRegen(900, 100)/900, 3, true)}</td>
      </tr>
      <tr>
        <td>800</td>
        <td>200</td>
        <td>{manaRegen(800, 200)}</td>
        <td>{round(manaRegen(800, 200)/800, 3, true)}</td>
      </tr>
      <tr>
        <td>700</td>
        <td>300</td>
        <td>{manaRegen(700, 300)}</td>
        <td>{round(manaRegen(700, 300)/700, 3, true)}</td>
      </tr>
      <tr>
        <td>600</td>
        <td>400</td>
        <td>{manaRegen(600, 400)}</td>
        <td>{round(manaRegen(600, 400)/600, 3, true)}</td>
      </tr>
      <tr className="highlight">
        <td>667</td>
        <td>333</td>
        <td>{manaRegen(667, 333)}</td>
        <td>{round(manaRegen(667, 333)/667, 3, true)}</td>
      </tr>
      <tr>
        <td><strong>541</strong></td>
        <td><strong>459</strong></td>
        <td><strong>{manaRegen(541, 459)}</strong></td>
        <td><strong>{round(manaRegen(541, 459)/541, 3, true)}</strong></td>
      </tr>
      <tr>
        <td>500</td>
        <td>500</td>
        <td>{manaRegen(500, 500)}</td>
        <td>{round(manaRegen(500, 500)/500, 3, true)}</td>
      </tr>
      <tr>
        <td>400</td>
        <td>600</td>
        <td>{manaRegen(400, 600)}</td>
        <td>{round(manaRegen(500, 600)/500, 3, true)}</td>
      </tr>
      <tr>
        <td>300</td>
        <td>700</td>
        <td>{manaRegen(300, 700)}</td>
        <td>{round(manaRegen(400, 700)/400, 3, true)}</td>
      </tr>
      <tr>
        <td>200</td>
        <td>800</td>
        <td>{manaRegen(200, 800)}</td>
        <td>{round(manaRegen(300, 800)/300, 3, true)}</td>
      </tr>
      <tr>
        <td>100</td>
        <td>900</td>
        <td>{manaRegen(100, 900)}</td>
        <td>{round(manaRegen(200, 900)/200, 3, true)}</td>
      </tr>
      <tr>
        <td>0</td>
        <td>1000</td>
        <td>{manaRegen(0, 1000)}</td>
        <td>{round(manaRegen(100, 1000)/100)}</td>
      </tr>
    </tbody>
  </Table>
);

export const ImpactOfDifferentSpiritAndIntellectDistributionDataTable = () => (
  <Table cellAlign="center">
    <caption>Impact of different Spirit and Intellect distribution on Spirit Based Mana Regeneration</caption>
    <thead>
      <tr>
        <th>Stats</th>
        <th>Best ratio relation</th>
        <th>Base MP5</th>
        <th>+100 Int</th>
        <th>+100 Spirit</th>
        <th>+67 Spirit / +33 Int</th>
        <th>Best option</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="col">300 Spirit, 100 Int</th>
        <td>Above</td>
        <td>{manaRegen(300, 100)}</td>
        <td className="highlight">{manaRegen(300, 200)}</td>
        <td>{manaRegen(400, 100)}</td>
        <td>{manaRegen(367, 133)}</td>
        <td>Go full Intellect</td>
      </tr>
      <tr>
        <th scope="col">200 Spirit, 100 Int</th>
        <td>Equals</td>
        <td>{manaRegen(200, 100)}</td>
        <td>{manaRegen(200, 200)}</td>
        <td>{manaRegen(300, 100)}</td>
        <td className="highlight">{manaRegen(267, 133)}</td>
        <td>Keep 2/1 ratio</td>
      </tr>
      <tr>
        <th scope="col">100 Spirit, 300 Int</th>
        <td>Below</td>
        <td>{manaRegen(100, 300)}</td>
        <td>{manaRegen(100, 400)}</td>
        <td className="highlight">{manaRegen(200, 300)}</td>
        <td>{manaRegen(167, 333)}</td>
        <td>Go full Spirit</td>
      </tr>
    </tbody>
  </Table>
);
