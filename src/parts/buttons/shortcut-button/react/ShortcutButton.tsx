'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 実行ラベルと小さなキーキャップを一つの操作としてまとめる。 */
const ShortcutButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function ShortcutButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-shortcut-button ${className}`}/>;
});
export default ShortcutButton;
