'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** フィールドの内側が奥行きのある入口へ変形し、何層もの輪郭と候補が手前へ組み上がる。 */
export default function PortalMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="portal" className={`sop-portal-menu ${className}`}/>;}
