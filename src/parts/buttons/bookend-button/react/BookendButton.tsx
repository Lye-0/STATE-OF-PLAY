'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 明るい紙の操作面を、左右のL字のブックエンドで支える。縦の支え・外へ張った足・下の紙束を分け、ホバーでは両端の支持具だけが内へ寄る。 */
const BookendButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function BookendButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-bookend-button ${className}`}/>;
});
export default BookendButton;
