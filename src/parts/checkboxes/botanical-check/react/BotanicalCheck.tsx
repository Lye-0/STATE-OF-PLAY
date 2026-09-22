'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 葉の輪郭と真鍮の縁が、緑の選択を包む。 */
const BotanicalCheck=forwardRef<HTMLInputElement,CheckboxProps>(function BotanicalCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-botanical-check ${className}`}/>;});
export default BotanicalCheck;
