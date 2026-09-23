'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 光学フレームの内側が丸く開き、候補を露出する。選択時は虹彩状の境界が反応する。 */
export default function IrisMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="iris" className={`sop-iris-menu ${className}`}/>;}
