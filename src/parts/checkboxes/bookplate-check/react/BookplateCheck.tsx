'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 本の小さい蔵書票をチェック面にする。選択時は背から出た栞が票を留める。 */
const BookplateCheck=forwardRef<HTMLInputElement,CheckboxProps>(function BookplateCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-bookplate-check ${className}`}/>;});
export default BookplateCheck;
