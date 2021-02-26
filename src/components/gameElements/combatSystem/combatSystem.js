import Icon from "../icon/Icon";
import React from "react";
import "./combatSystem.scss";

export const Block = () => <span className="combatSystem block"><Icon type="block"/>Block</span>;
export const Dodge = () => <span className="combatSystem dodge"><Icon type="dodge"/>Dodge</span>;
export const Parry = () => <span className="combatSystem parry"><Icon type="parry"/>Parry</span>;
