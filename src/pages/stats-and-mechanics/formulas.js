import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading4, Heading5, Title} from "../../components/headers/headers";
import StatsAndMechanicsSideMenu from "../../components/menus/sideMenus/StatsAndMechanicsSideMenu";

const Formulas = () => {
  return (
    <MainLayout pageTitle="Formulas">
      <SideMenuLayout sideMenu={StatsAndMechanicsSideMenu}>
        <Title>Formulas</Title>
        <Heading4>Maximal Defense Skill</Heading4>
        <div className="calculation">
          DefenseSkill = Level * 5
        </div>
        <Heading4>Maximal Weapon Skill</Heading4>
        <div className="calculation">
          WeaponSkill = Level * 5
        </div>
        <Heading4>Armor for 75% Reduction</Heading4>
        <div className="calculation">
          Armor = (1402.5 * enemyLevel) - 66502.5
        </div>
        <Heading4>Resistance for 75% average reduction</Heading4>
        <div className="calculation">
          Resistance = (enemyLevel) => 5 * level;
        </div>
        <Heading4>Glancing Blow Chance</Heading4>
        <div className="calculation">
          Chance = 10 + (enemyLevel * 5) - 350
        </div>
        <Heading4>Player vs mob Melee Miss Chance</Heading4>
        <Heading5>Mob's Defense Skill - Player's Weapon Skill ≤ 10</Heading5>
        single-wielding-base = 5%<br />
        dual-wielding-base = 24%<br />
        <div className="calculation">
          Chance = wielding-base + (DefenseSkill - WeaponSkill) * 0.1%
        </div>
        <Heading5>Mob's Defense Skill - Player's Weapon Skill > 10</Heading5>
        single-wielding-base = 7%<br />
        dual-wielding-base = 26%<br />
        <div className="calculation">
          Chance = wielding-base + (DefenseSkill - WeaponSkill - 10) * 0.4%
        </div>
        <Heading4>Player vs mob spell Miss chance</Heading4>
        <Heading5>Mob's Level - Player's level ≤ 2</Heading5>
        <div className="calculation">
          Chance = 4 + (enemyLevel - Level) * 1
        </div>
        <Heading5>Mob's Level - Player's level > 2</Heading5>
        <div className="calculation">
          Chance = - 16 + (enemyLevel - Level) * 11 (There is cap at 99)
        </div>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default Formulas;
