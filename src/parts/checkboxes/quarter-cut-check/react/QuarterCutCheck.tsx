'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 四隅の切り欠きを持つ確認票。選択時は対角の角だけが接続し、中心のチェックを囲む。 */
const QuarterCutCheck=forwardRef<HTMLInputElement,CheckboxProps>(function QuarterCutCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-quarter-cut-check ${className}`}/>;});
export default QuarterCutCheck;
