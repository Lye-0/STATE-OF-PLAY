'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 精密な金属板の上を薄い選択面が強いばねで移動。吸着する瞬間に小さく行き過ぎて戻る。 */
export default function MagneticMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="magnetic" className={`sop-magnetic-menu ${className}`}/>;}
