'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 分岐する二本の軌道を、四角い確認面の左右の外へ接続するチェック。横棒と二重枠とぼけた影を除き、3pxの縦軌道から中央へ分岐する線へ絞る。線は記号の外で止まり、確認面の無地にチェックと混在の線を置く。 */
const SwitchyardCheck=forwardRef<HTMLInputElement,CheckboxProps>(function SwitchyardCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-switchyard-check ${className}`}/>;});
export default SwitchyardCheck;
