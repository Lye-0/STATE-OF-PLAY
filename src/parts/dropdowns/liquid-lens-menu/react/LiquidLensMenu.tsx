'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 押すとガラスの膜が縦に伸びる。候補の背後では、厚い透明レンズがたわみながら滑る。 */
export default function LiquidLensMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="liquid" className={`sop-liquid-lens-menu ${className}`}/>;}
