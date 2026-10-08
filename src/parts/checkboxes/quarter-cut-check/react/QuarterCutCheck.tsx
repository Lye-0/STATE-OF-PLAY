'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 四分の一の切片を、確認欄の外の三四分円の座へ合わせるチェック。96pxの支持環に実際の四分円の空隙を作り、確定すると切片だけが5px内側へ戻る。48pxのnative欄と文字は固定し、支持環の右の接点へ読む票を連続させる。角を落とした普通のカードにしない。 */
const QuarterCutCheck=forwardRef<HTMLInputElement,CheckboxProps>(function QuarterCutCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-quarter-cut-check ${className}`}/>;});
export default QuarterCutCheck;
