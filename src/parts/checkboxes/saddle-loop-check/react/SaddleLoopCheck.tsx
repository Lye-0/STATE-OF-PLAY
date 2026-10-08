'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 四角い確認面の上下を、縫った革のループで包むチェック。元の丸い上下の回り込みを残し、赤茶の発光とぼかしを取り除く。3pxの革縁の内側へ1pxの糸を揃え、中央の記号の外にループを保つ。 */
const SaddleLoopCheck=forwardRef<HTMLInputElement,CheckboxProps>(function SaddleLoopCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-saddle-loop-check ${className}`}/>;});
export default SaddleLoopCheck;
