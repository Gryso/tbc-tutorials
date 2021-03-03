import Icon from "../icon/Icon";
import React from "react";
import "./stances.scss";

export const BearForm = () => <span className="stance druid"><Icon type="bearForm"/>Bear Form</span>;
export const CatForm = () => <span className="stance druid"><Icon type="catForm"/>Cat Form</span>;
export const TravelForm = () => <span className="stance druid"><Icon type="travelForm"/>Travel Form</span>;
export const AquaticForm = () => <span className="stance druid"><Icon type="aquaticForm"/>Aquatic Form</span>;
export const FlightForm = () => <span className="stance druid"><Icon type="flightForm"/>Flight Form</span>;
export const SwiftFlightForm = () => <span className="stance druid"><Icon type="flightForm"/>Swift Flight Form</span>;
export const MoonkinForm = () => <span className="stance druid"><Icon type="moonkinForm"/>Moonkin Form</span>;
export const TreeForm = () => <span className="stance druid"><Icon type="treeForm"/>Tree Form</span>;
export const Prowl = () => <span className="stance druid"><Icon type="prowl"/>Prowl</span>;

export const BattleStance = () => <span className="stance warrior"><Icon type="battleStance"/>Battle Stance</span>;
export const BerserkerStance = () => <span className="stance warrior"><Icon type="berserkerStance"/>Berserker Stance</span>;
export const DefensiveStance = () => <span className="stance warrior"><Icon type="defensiveStance"/>Defensive Stance</span>;

export const Stealth = () => <span className="stance rogue"><Icon type="stealth"/>Stealth</span>;
