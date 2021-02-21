import React from "react";
import "./resistances.scss";
import Icon from "../icon/Icon";

export const ArcaneResistance = () => <span className="resistance arcane"><Icon type="arcaneResistance"/>Arcane Resistance</span>;
export const FireResistance = () => <span className="resistance fire"><Icon type="fireResistance"/>Fire Resistance</span>;
export const FrostResistance = () => <span className="resistance frost"><Icon type="frostResistance"/>Frost Resistance</span>;
export const NatureResistance = () => <span className="resistance nature"><Icon type="natureResistance"/>Nature Resistance</span>;
export const ShadowResistance = () => <span className="resistance shadow"><Icon type="shadowResistance"/>Shadow Resistance</span>;
