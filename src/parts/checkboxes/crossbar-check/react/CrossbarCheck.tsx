'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** クロスバーが上下へ閉じて確定したチェックを支える。二重の選択記号は使わない。 */
const CrossbarCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CrossbarCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-crossbar-check ${className}`}/>;});
export default CrossbarCheck;
