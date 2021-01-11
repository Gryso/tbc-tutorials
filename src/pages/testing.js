import * as React from "react";
import MainLayout from "../components/MainLayout";
import Item from "../components/item/Item";
import Quest from "../components/quest/Quest";
import Spell from "../components/spell/Spell";
import Talent from "../components/talent/Talent";
import ClassIcon from "../components/classIcon/ClassIcon";
import RaceIcon from "../components/raceIcon/RaceIcon";

const testing = (props) => {
  return (
    <MainLayout>
      TESTING
      <br/>
      <br/>
      <br/>

      Items:
      <br/>
      <Item id={14555}>Alcor's Sunrazor</Item>
      <br/>
      <Item id={9477} quality="rare">The Chief's Enforcer</Item>
      <br/>
      <Item quality="uncommon">Ancestral Tunic</Item>
      <br/>
      <br/>

      Quests:
      <br/>
      <Quest id={9376}>A Pilgrim's Plight</Quest>
      <br/>
      <Quest difficulty="veryEasy" type="quest">A Necessary Distraction</Quest>
      <br/>
      <Quest id={11042} difficulty="easy" type="questComplete">A Mystifying Vision</Quest>
      <br/>
      <Quest id={9376} difficulty="medium" type="daily">A Pilgrim's Plight</Quest>
      <br/>
      <Quest difficulty="hard" type="dailyComplete">A Necessary Distraction</Quest>
      <br/>
      <Quest difficulty="veryHard">A Necessary Distraction</Quest>
      <br/>
      <br/>

      Spells:
      <br/>
      <Spell id={5229}>Enrage</Spell>
      <br/>
      <Spell>Serpent Sting</Spell>
      <br/>
      <br/>

      Talents:
      <br/>
      <Talent id={33890}>Empowered Rejuvenation</Talent>
      <br/>
      <Talent>Ignite</Talent>
      <br/>
      <br/>

      Classes:
      <br/>
      <ClassIcon className={"druid"}/>
      <ClassIcon className={"hunter"}/>
      <ClassIcon className={"mage"}/>
      <ClassIcon className={"paladin"}/>
      <ClassIcon className={"priest"}/>
      <ClassIcon className={"rogue"}/>
      <ClassIcon className={"shaman"}/>
      <ClassIcon className={"warlock"}/>
      <ClassIcon className={"warrior"}/>
      <ClassIcon/>
      <br/>

      Races:
      <br/>
      <RaceIcon className={"bloodelf"}/>
      <RaceIcon className={"draenei"}/>
      <RaceIcon className={"dwarf"}/>
      <RaceIcon className={"gnome"}/>
      <RaceIcon className={"human"}/>
      <RaceIcon className={"nightelf"}/>
      <RaceIcon className={"orc"}/>
      <RaceIcon className={"tauren"}/>
      <RaceIcon className={"troll"}/>
      <RaceIcon className={"undead"}/>
      <RaceIcon/>


    </MainLayout>
  );
};

export default testing;
