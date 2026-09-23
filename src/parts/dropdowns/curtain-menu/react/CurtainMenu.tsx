'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 縦の布目を持つ幕が中央から左右へ開き、候補が交互に現れる。選択行に光が横切る。 */
export default function CurtainMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="curtain" className={`sop-curtain-menu ${className}`}/>;}
