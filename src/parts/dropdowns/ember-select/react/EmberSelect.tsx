'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 暗い面に落ち着いた文字。移動中の行の縁だけに温かな光が集まり、面の余白を引き立てる。 */
export default function EmberSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-ember-select ${className}`}/>;
}
