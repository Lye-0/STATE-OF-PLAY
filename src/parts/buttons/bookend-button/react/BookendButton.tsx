'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 両端の支えが本文キーの下面と連続して伸びる。 */
const BookendButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function BookendButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-bookend-button ${className}`}/>;
});
export default BookendButton;
