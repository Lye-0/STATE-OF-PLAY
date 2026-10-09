'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 八角の焼き締めた縁に、凹んだ釉薬面を収めた陶の確認印。微細な素地と釉薬の境界で素材を表し、チェックを明瞭に表示する。 */
const CeramicStampCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CeramicStampCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ceramic-stamp-check ${className}`}/>;});
export default CeramicStampCheck;
