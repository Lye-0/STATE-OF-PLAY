'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** ワックスの縁と、封蝋に押した刻印。 */
const WaxSealCheck=forwardRef<HTMLInputElement,CheckboxProps>(function WaxSealCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-wax-seal-check ${className}`}/>;});
export default WaxSealCheck;
