'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 二本の連続した桁と二段の横木が確認面を支える梯子。選択で座の下の受けだけが締まり、文字とチェックの位置は固定する。 */
const LadderSeatCheck=forwardRef<HTMLInputElement,CheckboxProps>(function LadderSeatCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ladder-seat-check ${className}`}/>;});
export default LadderSeatCheck;
