'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** ミシン目と小さなパンチ穴を持つチケット。 */
const TicketCheck=forwardRef<HTMLInputElement,CheckboxProps>(function TicketCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ticket-check ${className}`}/>;});
export default TicketCheck;
