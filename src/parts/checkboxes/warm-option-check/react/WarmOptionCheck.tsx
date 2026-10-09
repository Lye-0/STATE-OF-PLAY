'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 短い説明を先に読み、行末のチェックで選ぶオプトイン欄。選択すると左の細い罫線も濃くなり、長い説明でも読み順を保つ。 */
const WarmOptionCheck=forwardRef<HTMLInputElement,CheckboxProps>(function WarmOptionCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-warm-option-check ${className}`}/>;});
export default WarmOptionCheck;
