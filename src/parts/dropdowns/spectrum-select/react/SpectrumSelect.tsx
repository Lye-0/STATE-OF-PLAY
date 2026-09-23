'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 塗りの少ない暗い面。動くのは候補の文字幅に合わせた分光の下線で、行全体を厚い箱にしない。 */
export default function SpectrumSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-spectrum-select ${className}`}/>;
}
