import Icon from "../icon/Icon";
import React from "react";
import "./currency.scss";
import Item from "../item/Item";

export const Gold = () => <span className="currency gold"><Icon type="gold"/>Gold</span>;
export const Silver = () => <span className="currency silver"><Icon type="silver"/>Silver</span>;
export const Copper = () => <span className="currency copper"><Icon type="copper"/>Copper</span>;

export const  WsgMark = () => <Item id={20558} quality="uncommon">Warsong Gulch Mark of Honor</Item>
export const  AbMark = () => <Item id={20559} quality="uncommon">Arathi Basin Mark of Honor</Item>
export const  EotsMark = () => <Item id={29024} quality="uncommon">Eye of the Storm Mark of Honor</Item>
export const  AvMark = () => <Item id={20560} quality="uncommon">Alterac Valley Mark of Honor</Item>
export const  ArenaPoints = () => <span className="currency arenaPoints"><Icon type="arenaPoints"/>Arena Points</span>;
export const  Honor = () => <span className="currency honor"><Icon type="honor"/>Honor</span>;


export const  Boj = () => <Item id={29434}>Badge of Justice</Item>;
