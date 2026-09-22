'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 炭色の面に灯る暖色の状態。焙煎の深さを選ぶ火のパネル。 */
export default function EmberSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-ember-select ${className}`}/>;
}
