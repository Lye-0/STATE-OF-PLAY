'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 四角い計器の座に円形の光学レンズを収めたチェック。曲面の縁と弧状の反射で凹凸を示し、選択と混在状態の印は中央で明瞭に読む。 */
const InsetLensCheck=forwardRef<HTMLInputElement,CheckboxProps>(function InsetLensCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-inset-lens-check ${className}`}/>;});
export default InsetLensCheck;
