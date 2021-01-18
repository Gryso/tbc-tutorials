import * as React from "react";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import Item from "../components/gameElements/item/Item";
import Quest from "../components/gameElements/quest/Quest";
import Spell from "../components/gameElements/spell/Spell";
import Talent from "../components/gameElements/talent/Talent";
import Icon from "../components/gameElements/icon/Icon";
import {Alliance, Horde} from "../components/gameElements/faction/factions";
import {
  Alchemy,
  Blacksmithing,
  Cooking,
  Enchanting,
  Engineering,
  Firstaid,
  Fishing,
  Herbalism,
  Jewelcrafting,
  Leatherworking,
  Mining,
  Skinning,
  Tailoring
} from "../components/gameElements/profession/professions";
import {
  Druid,
  Hunter,
  Mage,
  Paladin,
  Priest,
  Rogue,
  Shaman,
  Warlock,
  Warrior
} from "../components/gameElements/class/classes";
import {
  Bloodelf,
  Draenei,
  Dwarf,
  Gnome,
  Human,
  Nightelf,
  Orc,
  Tauren,
  Troll,
  Undead
} from "../components/gameElements/race/races";

const testing = () => {
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

      All icons:
      <br/>
      Classes:
      <br/>
      <Icon type="druid"/>
      <Icon type="hunter"/>
      <Icon type="mage"/>
      <Icon type="paladin"/>
      <Icon type="priest"/>
      <Icon type="rogue"/>
      <Icon type="shaman"/>
      <Icon type="warlock"/>
      <Icon type="warrior"/>
      <br/>
      Races:
      <br/>
      <Icon type="bloodelf"/>
      <Icon type="draenei"/>
      <Icon type="dwarf"/>
      <Icon type="gnome"/>
      <Icon type="human"/>
      <Icon type="nightelf"/>
      <Icon type="orc"/>
      <Icon type="tauren"/>
      <Icon type="troll"/>
      <Icon type="undead"/>
      <br/>
      Professions:
      <br/>
      <Icon type="alchemy"/>
      <Icon type="blacksmithing"/>
      <Icon type="cooking"/>
      <Icon type="enchanting"/>
      <Icon type="engineering"/>
      <Icon type="firstaid"/>
      <Icon type="fishing"/>
      <Icon type="herbalism"/>
      <Icon type="jewelcrafting"/>
      <Icon type="leatherworking"/>
      <Icon type="mining"/>
      <Icon type="skinning"/>
      <Icon type="tailoring"/>
      <br/>
      Factions:
      <br/>
      <Icon type="horde"/>
      <Icon type="alliance"/>
      <br/>
      <Icon/>
      <br/>
      <br/>

      <Horde/>
      <Alliance/>
      <br/>
      <br/>
      <Alchemy/>
      <Blacksmithing/>
      <Cooking/>
      <Enchanting/>
      <Engineering/>
      <Firstaid/>
      <Fishing/>
      <Herbalism/>
      <Jewelcrafting/>
      <Leatherworking/>
      <Mining/>
      <Skinning/>
      <Tailoring/>
      <br/>
      <br/>
      <Druid/>
      <Hunter/>
      <Mage/>
      <Paladin/>
      <Priest/>
      <Rogue/>
      <Shaman/>
      <Warlock/>
      <Warrior/>
      <br/>
      <br/>
      <Bloodelf/>
      <Draenei/>
      <Dwarf/>
      <Gnome/>
      <Human/>
      <Nightelf/>
      <Orc/>
      <Tauren/>
      <Troll/>
      <Undead/>
      <br/>
      <br/>
      <p>
        I like <Bloodelf/> because they pointy ears, i do not like <Draenei/> so much as they have hoofs.
        I like <Tauren/> hoofs better and hey are nice and big not like little <Dwarf/> or <Gnome/>. I find <Human/> dull
        as I already am one in real life. I do not like capuera so that is also no for <Troll/>. I choose
        <Nightelf/> or <Bloodelf/> as elfs are quite cool not so coll as <Undead/> tho. There is also <Orc/> but I
        think too many people already play orcs. I like <Shaman/> most of all classes but I would also consider <Hunter/>
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


    </MainLayout>
  );
};

export default testing;
