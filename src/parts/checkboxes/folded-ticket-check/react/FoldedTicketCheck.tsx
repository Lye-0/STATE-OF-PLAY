'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 切符の片隅を折り返す。 */
const FoldedTicketCheck=forwardRef<HTMLInputElement,CheckboxProps>(function FoldedTicketCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-folded-ticket-check ${className}`}/>;});
export default FoldedTicketCheck;
