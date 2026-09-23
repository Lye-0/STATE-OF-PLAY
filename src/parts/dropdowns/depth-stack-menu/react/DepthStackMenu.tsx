'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 離れた薄い層が奥から順番に現れ、選ぶ行の背後に深い落ち影と縁の光が生まれる。 */
export default function DepthStackMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="depth" className={`sop-depth-stack-menu ${className}`}/>;}
