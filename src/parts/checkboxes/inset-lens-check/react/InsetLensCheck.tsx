'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 浅い一枚のレンズを、細い溝へ落ち着かせるチェック。元の丸いレンズ面を残し、水色の発光と厚い影を除く。反射は上の2pxと左の1pxの細い線へ絞り、チェックと混在状態をぼかさず読む。 */
const InsetLensCheck=forwardRef<HTMLInputElement,CheckboxProps>(function InsetLensCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-inset-lens-check ${className}`}/>;});
export default InsetLensCheck;
