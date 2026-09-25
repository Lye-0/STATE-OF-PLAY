'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 淡い選択面と丸い輪郭の、控えめなチェック。 */
const LgcCheckboxesMist=forwardRef<HTMLInputElement,CheckboxProps>(function LgcCheckboxesMist({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`lgc-root sop-lgc-checkboxes-mist ${className}`}/>;});
export default LgcCheckboxesMist;
