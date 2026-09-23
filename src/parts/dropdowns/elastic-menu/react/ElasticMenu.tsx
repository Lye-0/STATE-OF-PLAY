'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 太い柔らかな選択面が候補間で伸び、弾性を伴って新しい行の形へ戻る。 */
export default function ElasticMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="elastic" className={`sop-elastic-menu ${className}`}/>;}
