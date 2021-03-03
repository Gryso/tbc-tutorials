import {
  expertiseFor1PercentReduction,
  expertiseRatingFor1Expertise,
  glancingChanceForLevel
} from "../../data/statsFormulas";
import Icon from "../gameElements/icon/Icon";
import React from "react";

export const GlancingBlowDataTable = () => (
  <table className="simplePageTable center">
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
  </table>
)

export const ExpertiseDataTable = ({isTank}) => (
  <table className="simplePageTable center">
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
  </table>
)
