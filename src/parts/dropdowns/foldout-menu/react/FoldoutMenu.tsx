'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 折り畳まれた紙が一行ずつ前後にほどけて候補になる。選ぶ行の折り目が平らに開く。 */
export default function FoldoutMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="fold" className={`sop-foldout-menu ${className}`}/>;}
