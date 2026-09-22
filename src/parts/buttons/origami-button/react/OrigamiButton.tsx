'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 一枚の厚い紙を折り返した、柔らかな立体ボタン。 */
const OrigamiButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function OrigamiButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-origami-button ${className}`}/>;
});
export default OrigamiButton;
