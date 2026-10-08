'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 蔵書票の確認面を、左右の高さが違う差込みポケットへ通すチェック。紙は上と右へ露出し、下の31pxのポケットの斜めの口が紙の下端へ5〜15px重なる。確認欄と文字を露出した紙の無地へ固定し、色帯と小さい栞だけの蔵書票にしない。 */
const BookplateCheck=forwardRef<HTMLInputElement,CheckboxProps>(function BookplateCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-bookplate-check ${className}`}/>;});
export default BookplateCheck;
