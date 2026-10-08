'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** チケットの切り取り端が折れて確定を示す。四角いチェック領域は変形させない。 */
const FoldedTicketCheck=forwardRef<HTMLInputElement,CheckboxProps>(function FoldedTicketCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-folded-ticket-check ${className}`}/>;});
export default FoldedTicketCheck;
