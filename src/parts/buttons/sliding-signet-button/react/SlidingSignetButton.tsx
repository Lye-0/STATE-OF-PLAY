'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 角を落とした印面を、下の平行なガイドと小さな止めで支える。多重の光沢縁を取り去り、均一なマット面の輪郭だけが滑る。ラベルは固定する。 */
const SlidingSignetButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SlidingSignetButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-sliding-signet-button ${className}`}/>;
});
export default SlidingSignetButton;
