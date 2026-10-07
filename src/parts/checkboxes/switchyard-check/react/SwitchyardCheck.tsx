'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 分岐点の二本のレールがつながる。 */
const SwitchyardCheck=forwardRef<HTMLInputElement,CheckboxProps>(function SwitchyardCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-switchyard-check ${className}`}/>;});
export default SwitchyardCheck;
