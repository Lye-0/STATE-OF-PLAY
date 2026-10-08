'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 薄い紙の封印の外へ、同じ糸の縫い目と二つの角糸を回すチェック。太い浮いた縁を除き、1pxの紙縁と細い縫い目へ揃える。確認記号と混在記号は無地の内側へ置き、押しても文字と枠を縮めない。 */
const StitchedSealCheck=forwardRef<HTMLInputElement,CheckboxProps>(function StitchedSealCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-stitched-seal-check ${className}`}/>;});
export default StitchedSealCheck;
