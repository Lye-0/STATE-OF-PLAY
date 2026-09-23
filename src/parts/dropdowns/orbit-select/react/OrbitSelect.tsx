'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** チャコールの面の中を、輪郭の美しい丸い選択面が滑る。選択済みの小さな円と、移動中の背景を区別する。 */
export default function OrbitSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-orbit-select ${className}`}/>;
}
