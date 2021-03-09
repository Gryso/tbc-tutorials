import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PvpTutorialsSideMenu from "../../components/menus/sideMenus/PvpTutorialsSideMenu";
import {Title, Heading2} from "../../components/headers/headers";


const PvpMechanics = () => {

  return (
    <MainLayout pageTitle="PVP Mechanics">
      <SideMenuLayout sideMenu={PvpTutorialsSideMenu}>
        <Title>PVP Mechanics</Title>
        <Heading2>Diminishing returns</Heading2>
        First cast of your CC effect will for the full duration.
        Second cast of your CC effect will be limited to 1/2 duration.
        Third cast of your CC effect will be limited to 1/4 duration.
        Fourth cast will not cause anything, and the enemy will respond with "immune".

        Root - Frost Nova, Entangling Roots, Nature's Grasp, Frost Shock (exception) and other root effects (Gnomish Net-o-Matic).
        Stun - Bash, Concussion Blow, Charge, Inferno, Hammer of Justice, Intercept, Intimidation, Kidney Shot, War Stomp and other active stun effects (Tidal Charm).
        Opener Stun - Cheap Shot, Pounce
        Random Stun - Blackout, Impact, Improved Starfire, Improved Concussive Shot, Mace Spec, Pyroclasm, Improved Revenge, Seal of Justice and other effects from Chance on Hit: Stun.
        Disarm - Disarm, Riposte
        Incapacitate - Gouge, Repentance, Sap
        Sleep/Disorient - Freezing Trap, Hibernate, Polymorph, Wyvern Sting, Blind, Scatter Shot and other Sleep or Disorient effects (Magic Dust).
        Fear - Fear, Howl of Terror, Psychic Scream, Intimidating Shout, Scare Beast, Seduction (exception) and other fear effects (Warlock setbonus)
        Horror - Death Coil
      </SideMenuLayout>
    </MainLayout>
  );
};

export default PvpMechanics;
