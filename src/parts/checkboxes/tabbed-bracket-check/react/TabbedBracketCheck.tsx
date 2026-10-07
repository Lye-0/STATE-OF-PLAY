'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 両端の括弧がチェックを包む。 */
const TabbedBracketCheck=forwardRef<HTMLInputElement,CheckboxProps>(function TabbedBracketCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-tabbed-bracket-check ${className}`}/>;});
export default TabbedBracketCheck;
