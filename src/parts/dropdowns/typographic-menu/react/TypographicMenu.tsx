'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 大きな文字と広い余白が主役。選択時に字間と太い線が動き、文字の背後を斜めの光が通る。 */
export default function TypographicMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="type" className={`sop-typographic-menu ${className}`}/>;}
