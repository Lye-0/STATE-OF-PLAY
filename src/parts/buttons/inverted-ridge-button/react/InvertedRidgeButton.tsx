'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 金属板の片側をヒンジとして扱い、反射面だけを反転させる。文字の回転は行わない。 */
const InvertedRidgeButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function InvertedRidgeButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-inverted-ridge-button ${className}`}/>;
});
export default InvertedRidgeButton;
