'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 蔵書票の背が選択面を綴じる。 */
const BookplateCheck=forwardRef<HTMLInputElement,CheckboxProps>(function BookplateCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-bookplate-check ${className}`}/>;});
export default BookplateCheck;
