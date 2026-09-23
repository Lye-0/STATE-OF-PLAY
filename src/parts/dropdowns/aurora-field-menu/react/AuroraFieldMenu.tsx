'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 立体的に重なった光の帯がポインターを追う。候補は静止したまま、背景だけが形を変える。 */
export default function AuroraFieldMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="aurora" className={`sop-aurora-field-menu ${className}`}/>;}
