'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 一枚の均一な操作面を、左右の角張ったクランプで挟む。顎だけが内へ進み、処理中も中央の面を分割せずラベルとアイコンの位置を保つ。 */
const ReframedKeyButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function ReframedKeyButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-reframed-key-button ${className}`}/>;
});
export default ReframedKeyButton;
