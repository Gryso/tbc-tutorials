import {
  expertiseFor1PercentReduction,
  expertiseRatingFor1Expertise,
  glancingChanceForLevel, meleeHasteRatingForReduction
} from "../../data/statsFormulas";
import Icon from "../gameElements/icon/Icon";
import React from "react";
import Table from "../table/Table";

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
