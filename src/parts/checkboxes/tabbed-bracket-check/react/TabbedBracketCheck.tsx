'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 括弧のタブが上下から噛み合う。 */
const TabbedBracketCheck=forwardRef<HTMLInputElement,CheckboxProps>(function TabbedBracketCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-tabbed-bracket-check ${className}`}/>;});
export default TabbedBracketCheck;
