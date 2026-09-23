'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 重なったガラス層が奥からほどけ、移動中の候補は光の縁をまとって手前へ浮かぶ。 */
export default function LayeredGlassMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="layers" className={`sop-layered-glass-menu ${className}`}/>;}
