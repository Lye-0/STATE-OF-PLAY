'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 余白に置く小旗。チェック領域の外へ旗が出て確定を示し、四角い選択記号を保つ。 */
const MarginFlagCheck=forwardRef<HTMLInputElement,CheckboxProps>(function MarginFlagCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-margin-flag-check ${className}`}/>;});
export default MarginFlagCheck;
